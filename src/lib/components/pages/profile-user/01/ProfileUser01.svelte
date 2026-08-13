<script lang="ts" module>
	/**
	 * Variante 01 da página de perfil. Reutiliza headers partilhados,
	 * tabs, moradas, segurança e definições.
	 * @component
	 */
</script>

<script lang="ts">
	import { t } from "$lib/i18n";
	import type { ProfileUserData } from "../types";
	import ProfileUserHeader from "../shared/ProfileUserHeader.svelte";
	import ProfileUserTabs from "../shared/ProfileUserTabs.svelte";
	import ProfileUserAddress from "../shared/ProfileUserAddress.svelte";
	import ProfileUserResetPassword from "../shared/ProfileUserResetPassword.svelte";
	import ProfileUserSetting from "../shared/ProfileUserSetting.svelte";

	let {
		data,
		activeTab = $bindable(),
		isLoading = false,
		onLoginAsUser,
		onAddAddress,
		onChangePassword,
		tabs: customTabs,
		// Header V1
		statusDefault = $t("profile-user.variant1.statusActive"),
		roleDefault = $t("profile-user.variant1.roleAdministrator"),
		loginAsUserLabel = $t("profile-user.variant1.loginAsUser"),
		// Address
		addressesTitle = $t("profile-user.variant1.addresses.title"),
		addressesAddLabel = $t("profile-user.variant1.addresses.add"),
		addressesDefaultBadge = $t("profile-user.variant1.addresses.defaultBadge"),
		addressesEmptyText = $t("profile-user.variant1.addresses.empty"),
	}: {
		data: ProfileUserData;
		activeTab?: string;
		isLoading?: boolean;
		onLoginAsUser?: (id: string | number) => void;
		onAddAddress?: () => void;
		onChangePassword?: (payload: {
			currentPassword: string;
			newPassword: string;
			confirmPassword: string;
		}) => void;
		tabs?: { id: string; label: string }[];
		// Header V1
		statusDefault?: string;
		roleDefault?: string;
		loginAsUserLabel?: string;
		// Address
		addressesTitle?: string;
		addressesAddLabel?: string;
		addressesDefaultBadge?: string;
		addressesEmptyText?: string;
	} = $props();

	const defaultTabs = $derived(
		customTabs?.length
			? customTabs
			: [
					{ id: "addresses", label: $t("profile-user.variant1.tabs.addresses") || "Moradas" },
					{ id: "security", label: $t("profile-user.variant2.tabs.security") || "Segurança" },
					{ id: "settings", label: $t("profile-user.variant1.tabs.settings") || "Definições" },
				]
	);

	const currentTab = $derived(activeTab ?? defaultTabs[0]?.id ?? "addresses");
	const fullName = $derived(data.fullName ?? `${data.firstName} ${data.lastName}`);
</script>

<div class="bg-background">
	<ProfileUserHeader
		{data}
		{isLoading}
		{fullName}
		{onLoginAsUser}
		{statusDefault}
		{roleDefault}
		{loginAsUserLabel}
	/>

	<div class="mx-auto max-w-7xl px-6 py-8">
		<ProfileUserTabs
			tabs={defaultTabs}
			bind:activeTab
			{isLoading}
		/>

		<div class="flex flex-col gap-8">
			{#if currentTab === "addresses"}
				<ProfileUserAddress
					addresses={data.addresses}
					{isLoading}
					{onAddAddress}
					title={addressesTitle}
					addLabel={addressesAddLabel}
					defaultBadge={addressesDefaultBadge}
					emptyText={addressesEmptyText}
				/>
			{:else if currentTab === "security"}
				<ProfileUserResetPassword {isLoading} {onChangePassword} />
			{:else if currentTab === "settings"}
				<ProfileUserSetting
					notificationPref={data.notificationPref}
					enableNotification={data.enableNotification}
					marketingPrefs={data.marketingPrefs}
					{isLoading}
				/>
			{/if}
		</div>
	</div>
</div>
