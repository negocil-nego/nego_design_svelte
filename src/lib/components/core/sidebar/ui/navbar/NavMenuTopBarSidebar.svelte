<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	import type { NavTopBarSidebarItem } from "../../../nav/data/nav-top-bar-sidebar";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { UnfoldMoreIcon } from "@hugeicons/core-free-icons";

	// This should be `Component` after @lucide/svelte updates types
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let { content, dropdownMenu }: NavTopBarSidebarItem = $props();
	const sidebar = useSidebar();
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<div
							class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
						>
							<content.logo class="size-4" />
						</div>
						<div
							class="grid flex-1 text-start text-sm leading-tight"
						>
							<span class="truncate font-medium">
								{content.title}
							</span>
							<span class="truncate text-xs"
								>{content.subtitle}</span
							>
						</div>
						{#if dropdownMenu}
							<HugeiconsIcon
								icon={UnfoldMoreIcon}
								class="ms-auto"
							/>
						{/if}
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			{#if dropdownMenu}
				<DropdownMenu.Content
					class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
					align="start"
					side={sidebar.isMobile ? "bottom" : "right"}
					sideOffset={4}
				>
					{#if dropdownMenu.header}
						<DropdownMenu.Label
							class="text-muted-foreground text-xs"
						>
							{#if dropdownMenu.header.icon}
								<dropdownMenu.header.icon
									class="size-3.5 shrink-0"
								/>
							{/if}
							{dropdownMenu.header.text}
						</DropdownMenu.Label>
					{/if}
					{#each dropdownMenu.items as it, index (index)}
						<DropdownMenu.Item
							onSelect={it.onclick}
							class="gap-2 p-2"
						>
							<div
								class="flex size-6 items-center justify-center rounded-md border"
							>
								<it.icon class="size-3.5 shrink-0" />
							</div>
							{it.text}
							<DropdownMenu.Shortcut>
								⌘{index + 1}
							</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
					{/each}
					{#if dropdownMenu.footer}
						<DropdownMenu.Separator />
						<DropdownMenu.Item class="gap-2 p-2">
							<div
								class="flex size-6 items-center justify-center rounded-md border bg-transparent"
							>
								{#if dropdownMenu.footer.icon}
									<dropdownMenu.footer.icon class="size-4" />
								{/if}
							</div>
							<div class="text-muted-foreground font-medium">
								{dropdownMenu.footer.text}
							</div>
						</DropdownMenu.Item>
					{/if}
				</DropdownMenu.Content>
			{/if}
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
