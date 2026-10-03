<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { CardTagsProps } from "../../types";

  type Props = {
    baggage?: string;
    tags?: CardTagsProps[];
    isLoading?: boolean;
    class?: string;
  };

  let {
    baggage,
    tags,
    isLoading = false,
    class: className = "",
  }: Props = $props();

  const baggageInfo = $derived(
    baggage ||
      tags?.find((item) => /kg|bagagem|bag/i.test(item.text))?.text ||
      (tags && tags.length > 0 ? tags[0].text : "25 KG")
  );
</script>

{#if isLoading}
  <Skeleton class="h-3.5 w-12 rounded {className}" />
{:else}
  <div class="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-muted-foreground {className}">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-3 shrink-0 text-muted-foreground"
    >
      <rect x="5" y="6" width="14" height="15" rx="3" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M7 21v1a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1v-1" />
      <path d="M15 21v1a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1v-1" />
      <path d="M9 10v7" />
      <path d="M15 10v7" />
    </svg>
    <span class="font-semibold uppercase tracking-wider">{baggageInfo}</span>
  </div>
{/if}
