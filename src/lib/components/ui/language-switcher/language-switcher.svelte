<script lang="ts" module>
  export type LanguageSwitcherProps = {
    /** Dropdown alignment */
    align?: "start" | "center" | "end";
    class?: string;
  };
</script>

<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { t, locale, locales } from "$lib/i18n";
  import { cn } from "$lib/utils.js";

  let { align = "end", class: className }: LanguageSwitcherProps = $props();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={cn(
      "rounded-full bg-input h-10 w-10 dark:bg-white flex items-center justify-center",
      className,
    )}
    aria-label="Change language"
  >
    <ImageHugeicons icon="global" />
    <span class="sr-only">Change language</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content {align}>
    <DropdownMenu.RadioGroup bind:value={$locale}>
      {#each $locales as code (code)}
        <DropdownMenu.RadioItem value={code}>
          {$t(`language.${code}`)}
        </DropdownMenu.RadioItem>
      {/each}
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu.Root>
