<script lang="ts" module>
	/**
	 * Variante 03 da página de perfil. Reutiliza header, tabs pill,
	 * moradas, segurança e definições.
	 * Todos os textos parametrizáveis com defaults via i18n.
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
		onAddAddress,
		onChangePassword,
		onLoginAsUser,
		tabs: customTabs,
	}: {
		data: ProfileUserData;
		activeTab?: string;
		isLoading?: boolean;
		onAddAddress?: () => void;
		onChangePassword?: (payload: {
			currentPassword: string;
			newPassword: string;
			confirmPassword: string;
		}) => void;
		onLoginAsUser?: (id: string | number) => void;
		tabs?: { id: string; label: string }[];
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
	<ProfileUserHeader {data} {isLoading} {fullName} {onLoginAsUser} />

	<div class="mx-auto max-w-7xl px-6">
		<ProfileUserTabs
			tabs={defaultTabs}
			bind:activeTab
			style="pill"
			{isLoading}
		/>

		<div class="pb-12">
			{#if currentTab === "addresses"}
				<ProfileUserAddress
					addresses={data.addresses}
					{isLoading}
					{onAddAddress}
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
