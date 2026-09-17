<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type { AdminSectionProps } from "./types";
  import AdminUserSection from "./AdminUserSection.svelte";
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import ThemeSwitch from "$lib/components/ui/theme-switch/theme-switch.svelte";

  let {
    title,
    user,
    menuItems = [],
    cards = [],
    selectedKey = $bindable(),
    className,
    menuClass,
    cardClass,
    gridClass,
    onSelect,
    onCardClick,
  }: AdminSectionProps = $props();

  const activeKey = $derived<string | number | undefined>(
    selectedKey ?? menuItems.find((m) => m.isActive)?.id ?? menuItems[0]?.id,
  );

  const visibleCards = $derived(
    cards.filter(
      (card) =>
        card.menuId === undefined ||
        card.menuId === null ||
        card.menuId === activeKey,
    ),
  );

  function handleMenuSelect(id: string | number) {
    selectedKey = id;
    onSelect?.(id);
  }
</script>

<div class="rounded-2xl border border-border bg-primary p-3 {className}">
  <div class="flex items-center justify-between gap-4">
    <div class="text-lg font-bold">{title ?? "Negodesign"}</div>
    {#if menuItems.length > 0}
      <nav
        class="flex flex-wrap items-center gap-1 overflow-x-auto py-1 {menuClass}"
        role="group"
        aria-label={title ?? "Section menu"}
      >
        {#each menuItems as item, i (item.id ?? i)}
          {@const itemKey = item.id ?? i}
          {@const isActive = itemKey === activeKey}
          <button
            type="button"
            onclick={() => handleMenuSelect(itemKey)}
            aria-current={isActive}
            class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition hover:bg-primary/10 text-white {isActive
              ? 'bg-primary/10'
              : ''}"
          >
            {#if item.icon}
              {#if typeof item.icon === "string"}
                <i class="text-base {item.icon}"></i>
              {:else}
                <HugeiconsIcon icon={item.icon} class="size-4" />
              {/if}
            {/if}
            <span>{item.title}</span>
            {#if item.caption}
              <span
                class="rounded-full bg-primary/10 px-1.5 py-0.5 text-xs font-semibold text-primary"
              >
                {item.caption}
              </span>
            {/if}
          </button>
        {/each}
      </nav>
    {/if}
    <div class="flex gap-2 items-center">
      <ThemeSwitch />
      <LanguageSwitcher />
      <AdminUserSection {...user} />
    </div>
  </div>

  {#if visibleCards.length > 0}
    <div
      class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 {gridClass}"
    >
      {#each visibleCards as card, i (card.id ?? i)}
        {@const cardKey = card.id ?? i}
        <button
          type="button"
          onclick={() => onCardClick?.(cardKey)}
          class="group flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-5 text-left transition hover:border-primary/40 hover:shadow-sm {cardClass}"
        >
          <span class="text-sm font-semibold">{card.title}</span>
          <div class="flex items-center justify-between w-full">
            {#if card.value !== undefined}
              <span class="text-2xl font-bold tracking-tight">{card.value}</span
              >
            {/if}
            {#if card.icon}
              <span
                class="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                {#if typeof card.icon === "string"}
                  <i class="text-xl {card.icon}"></i>
                {:else}
                  <HugeiconsIcon icon={card.icon} class="size-5" />
                {/if}
              </span>
            {/if}
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>
