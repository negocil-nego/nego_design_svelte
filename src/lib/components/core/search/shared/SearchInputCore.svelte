<script lang="ts" module>
  /**
   * Reusable search input component used by Search01 and Search02.
   * Renders a text input with a search icon and submit button.
   * @component
   */
</script>

<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Search01Icon } from "@hugeicons/core-free-icons";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Separator } from "$lib/components/ui/separator/index";
  import { t } from "$lib/i18n";
  import type { SearchInputProps } from "../types";

  let { onSubmit, placeholder, variant = 1, inputClass, iconClass }: SearchInputProps = $props();

  let value = $state("");

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") onSubmit?.(value);
  }
</script>

<div class="container relative">
  <div
    class="mx-auto md:w-3/4 z-10 {variant === 2
      ? 'border-b'
      : 'border bg-input rounded-lg shadow'} m-auto"
  >
    <div class="flex items-center gap-2 py-1 px-2 w-full md:min-h-15">
      <div class="items-center gap-2 hidden md:flex">
        <HugeiconsIcon
          icon={Search01Icon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
          class={iconClass}
        />
      </div>
      <input
        type="search"
        bind:value
        onkeydown={handleKeydown}
        class="text-sm w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent {inputClass}"
        placeholder={placeholder || $t("label.search.placeholder")}
      />
      <div class="flex gap-1">
        <Separator class="w-full" orientation="vertical" />
        <Button
          onclick={() => onSubmit?.(value)}
          class="flex justify-center items-center cursor-pointer"
          variant="outline"
        >
          <HugeiconsIcon
            icon={Search01Icon}
            size={15}
            color="currentColor"
            strokeWidth={2}
          />
          <span class="hidden md:block">{$t("label.search")}</span>
        </Button>
      </div>
    </div>
  </div>
</div>
