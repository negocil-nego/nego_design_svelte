<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Search01Icon } from "@hugeicons/core-free-icons";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Separator } from "$lib/components/ui/separator/index";
  import { t } from "$lib/i18n";

  type Props = {
    onSubmit?: (q: string) => void;
    placeholder?: string;
  }

  let { onSubmit, placeholder }: Props = $props();

  let value = $state("")

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") onSubmit!(value);
  }
</script>

<div class="container relative">
  <div
    class="absolute -top-5 left-0 right-0 mx-auto w-full z-10 shadow border m-auto"
  >
    <div
      class="flex items-center gap-2 py-1 px-2 w-full md:min-h-15"
    >
      <div class="items-center gap-2 hidden md:flex text-slate-500">
        <HugeiconsIcon
          icon={Search01Icon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
        />
      </div>
      <input
        type="text"
        bind:value={value}
        onkeydown={handleKeydown}
        class="text-sm w-full bg-transparent placeholder-slate-400 border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent"
        placeholder={placeholder || $t("label.search.placeholder")}
      />
      <div class="flex gap-1">
        <Separator class="w-full" orientation="vertical" />
        <Button
          onclick={() => onSubmit!(value)}
          class="flex justify-center items-center cursor-pointer "
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
