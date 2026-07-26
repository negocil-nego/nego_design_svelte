<script lang="ts" module>
  export type LanguageSwitcherProps = {
    /** Dropdown alignment */
    align?: "start" | "center" | "end";

    /** Button variant */
    variant?: "outline" | "ghost";

    class?: string;
  };
</script>

<script lang="ts">
  import GlobeIcon from "@lucide/svelte/icons/globe";
  import * as DropdownMenu from "../dropdown-menu";
  import { buttonVariants } from "../button";
  import { t, locale, locales } from "../../../i18n";
  import { cn } from "../../../utils.js";

  let {
    align = "end",
    variant = "outline",
    class: className,
  }: LanguageSwitcherProps = $props();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={cn(
      buttonVariants({ variant, size: "icon" }),
      className,
      "rounded-full bg-input",
    )}
    aria-label="Change language"
  >
    <GlobeIcon class="size-4" />
    <span class="sr-only">Change language</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content {align}>
    <DropdownMenu.RadioGroup bind:value={$locale}>
      {#each locales as code (code)}
        <DropdownMenu.RadioItem value={code}>
          {$t(`language.${code}`)}
        </DropdownMenu.RadioItem>
      {/each}
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu.Root>
