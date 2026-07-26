<script lang="ts">
  import Separator from "../../ui/separator/separator.svelte";
  import { t } from "../../../i18n";

  type Props = {
    variant?: "SEPARATOR";
  };

  let { variant }: Props = $props();
</script>

{#if variant === "SEPARATOR"}
  <div class="relative my-1 text-center">
    <div class="absolute inset-0 flex items-center">
      <Separator />
    </div>
    <span
      class="relative bg-white dark:bg-primary px-4 text-[10px] uppercase text-slate-400 tracking-wider"
    >
      {$t("label.or")}
    </span>
  </div>
{:else}
  {$t("label.or")}
{/if}
