<script lang="ts" module>
  export type LanguageSwitcherProps = {
    /** Dropdown alignment */
    align?: "start" | "center" | "end";
    class?: string;
  };
</script>

<script lang="ts">
  import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import { languageFlagMap } from "$lib/components/ui/image/flag-map";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { t, locale, locales } from "$lib/i18n";
  import { cn } from "$lib/utils.js";

  let { align = "end", class: className }: LanguageSwitcherProps = $props();

  let currentFlag = $derived(languageFlagMap[$locale] ?? "gb");
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={cn(
      "rounded-full bg-input h-10 w-10 dark:bg-white flex items-center justify-center overflow-hidden",
      className,
    )}
    aria-label="Change language"
  >
    <ImageFlag country={currentFlag} class="size-6 rounded-full" />
    <span class="sr-only">Change language</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content {align}>
    <DropdownMenu.RadioGroup bind:value={$locale}>
      {#each $locales as code (code)}
        <DropdownMenu.RadioItem value={code} class="gap-2">
          <ImageFlag country={languageFlagMap[code] ?? "gb"} class="size-4 rounded-sm" />
          {$t(`language.${code}`)}
        </DropdownMenu.RadioItem>
      {/each}
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu.Root>
