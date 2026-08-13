<script lang="ts" module>
	/**
	 * Lista de moradas do utilizador com opção de adicionar e badge para default.
	 * Extraído da variante 1. Todos os textos são parametrizáveis com defaults via i18n.
	 * @component
	 */
</script>

<script lang="ts">
	import { MapPin } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
	import { cn } from "$lib/utils.js";
	import { t } from "$lib/i18n";
	import type { ProfileUserAddress, ProfileUserAddressProps } from "../types";

	let {
		addresses,
		isLoading = false,
		onAddAddress,
		className,
		title = $t("profile-user.variant1.addresses.title"),
		addLabel = $t("profile-user.variant1.addresses.add"),
		defaultBadge = $t("profile-user.variant1.addresses.defaultBadge"),
		emptyText = $t("profile-user.variant1.addresses.empty"),
	}: ProfileUserAddressProps & {
		addresses?: ProfileUserAddress[];
		isLoading?: boolean;
	} = $props();
</script>

<section
	class={cn("rounded-lg border bg-card p-6", className)}
	data-slot="profile-user-address"
>
	<div class="mb-6 flex items-center justify-between">
		<h3 class="text-lg font-semibold">{title}</h3>
		<Button variant="ghost" size="sm" onclick={onAddAddress}>
			<PlusIcon class="size-4" />
			{addLabel}
		</Button>
	</div>

	{#if isLoading}
		<div class="grid gap-4 md:grid-cols-2">
			{#each Array.from({ length: 2 }) as _, i (i)}
				<Skeleton class="h-32 w-full rounded-md" />
			{/each}
		</div>
	{:else if addresses && addresses.length > 0}
		<div class="grid gap-4 md:grid-cols-2">
			{#each addresses as address (address.id)}
				<div
					class={cn(
						"rounded-md border p-4 transition-colors",
						address.isDefault ? "border-primary bg-primary/5" : ""
					)}
				>
					<div class="mb-2 flex items-center justify-between">
						<span class="font-medium">{address.label}</span>
						{#if address.isDefault}
							<Badge>{defaultBadge}</Badge>
						{/if}
					</div>
					<div class="flex flex-col gap-1 text-sm text-muted-foreground">
						<p class="flex items-start gap-1.5">
							<HugeiconsIcon icon={MapPin} class="mt-0.5 size-4 shrink-0" />
							{address.street}
							{#if address.apartment}, {address.apartment}{/if}
						</p>
						{#if address.state || address.zip}
							<p class="pl-5.5">{address.state ?? ""} {address.zip ?? ""}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-sm text-muted-foreground">{emptyText}</p>
	{/if}
</section>
