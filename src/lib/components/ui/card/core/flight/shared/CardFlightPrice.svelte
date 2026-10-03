<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { t } from "$lib/i18n";

  type Props = {
    id?: string | number;
    price?: string | number;
    currency?: string;
    pricePerPersonLabel?: string;
    isLoading?: boolean;
    onClickBuy?: (id: string | number) => void;
    class?: string;
  };

  let {
    id,
    price,
    currency,
    pricePerPersonLabel,
    isLoading = false,
    onClickBuy,
    class: className = "",
  }: Props = $props();

  const priceLabel = $derived(
    pricePerPersonLabel || $t("label.price_per_person") || "Price per Person"
  );
</script>

{#if isLoading}
  <Skeleton class="h-4 w-24 rounded {className}" />
{:else if price}
  <button
    type="button"
    onclick={() => id !== undefined && onClickBuy?.(id)}
    class="flex items-center gap-1 text-right group/btn transition cursor-pointer hover:opacity-90 {className}"
  >
    <span class="text-[10px] sm:text-[11px] font-medium text-muted-foreground">
      {priceLabel} /
    </span>
    <span
      class="text-[11px] sm:text-xs font-bold text-primary group-hover/btn:scale-105 transition-transform"
    >
      {currency ? `${currency} ` : ""}{price}
    </span>
  </button>
{/if}
