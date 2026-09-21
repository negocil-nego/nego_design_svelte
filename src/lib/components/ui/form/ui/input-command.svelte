<script lang="ts">
  import { t } from "$lib/i18n";
  import { cn } from "$lib/utils.js";
  import Popover from "../../popover/popover.svelte";
  import PopoverTrigger from "../../popover/popover-trigger.svelte";
  import PopoverContent from "../../popover/popover-content.svelte";
  import ImageHugeicons from "../../image/ImageHugeicons.svelte";
  import type { Snippet } from "svelte";
  import type { HugeiconsIconName } from "../../image/hugeicons";

  export type CommandGroup = {
    label: string;
    items: CommandItem[];
  };

  export type CommandItem = {
    id: string;
    label: string;
    icon?: HugeiconsIconName;
    shortcut?: string;
    description?: string;
  };

  type Props = {
    value?: string;
    placeholder?: string;
    groups?: CommandGroup[];
    emptyMessage?: string;
    class?: string;
    onSelect?: (item: CommandItem) => void;
    onSearch?: (query: string) => void;
    children?: Snippet;
  };

  let {
    value = $bindable(""),
    placeholder,
    groups = [],
    emptyMessage,
    class: className,
    onSelect,
    onSearch,
    children,
  }: Props = $props();

  let open = $state(false);
  let inputRef: HTMLInputElement | null = $state(null);

  const query = $derived(value.trim().toLowerCase());

  const filteredGroups = $derived.by(() => {
    if (!query) return groups;
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.label.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query),
        ),
      }))
      .filter((group) => group.items.length > 0);
  });

  const hasResults = $derived(filteredGroups.length > 0);

  function handleSelect(item: CommandItem) {
    value = item.label;
    open = false;
    inputRef?.blur();
    onSelect?.(item);
  }

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    value = target.value;
    onSearch?.(value);
    open = !!value.trim();
  }

  function handleFocus() {
    if (value.trim()) {
      open = true;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      open = false;
      inputRef?.blur();
    }
  }
</script>

<Popover bind:open>
  <PopoverTrigger class={cn("w-full", className)}>
    <div class="flex items-center gap-2 w-full">
      <ImageHugeicons
        icon="search-01"
        width={22}
        height={22}
        class="dark:text-white"
      />
      <input
        bind:this={inputRef}
        type="text"
        {value}
        oninput={handleInput}
        onkeydown={handleKeydown}
        onfocus={handleFocus}
        placeholder={placeholder || $t("search.input.placeholder")}
        class="text-sm py-3 px-0 w-full border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-foreground placeholder:text-muted-foreground"
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
      />
    </div>
  </PopoverTrigger>

  <PopoverContent align="start" side="bottom" class="w-full p-0 min-w-[300px]">
    <div class="max-h-80 overflow-y-auto">
      {#if filteredGroups.length > 0}
        {#each filteredGroups as group (group.label)}
          <div class="px-2 py-1.5">
            <div class="px-2 py-1 text-xs font-medium text-muted-foreground">
              {group.label}
            </div>
            {#each group.items as item (item.id)}
              <button
                type="button"
                onclick={() => handleSelect(item)}
                class="flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors text-left"
              >
                {#if item.icon}
                  <ImageHugeicons
                    icon={item.icon}
                    width={16}
                    height={16}
                    color="currentColor"
                  />
                {/if}
                <span class="flex-1">{item.label}</span>
                {#if item.shortcut}
                  <span class="text-xs text-muted-foreground font-mono">
                    {item.shortcut}
                  </span>
                {/if}
              </button>
            {/each}
          </div>
        {/each}
      {:else if query}
        <div class="px-4 py-6 text-center text-sm text-muted-foreground">
          {emptyMessage || $t("search.input.empty")}
        </div>
      {/if}
    </div>
  </PopoverContent>
</Popover>
