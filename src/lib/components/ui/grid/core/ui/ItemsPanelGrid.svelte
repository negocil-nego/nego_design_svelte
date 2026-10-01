<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { GridProps } from "../data/types";
  import GridCard from "./shared/GridCard.svelte";

  let {
    variant,
    className,
    isLoading,
    items,
    itemClassName,
    isShowDescription,
    onClick,
    autoPlay = false,
  }: GridProps = $props();

  const styleMobile = "flex justify-between overflow-x-auto no-scrollbar";

  const responsive = useDevice();

  let containerEl = $state<HTMLDivElement | null>(null);

  $effect(() => {
    if (!autoPlay || responsive.isMobile || !containerEl) return;

    const el = containerEl;
    let stopped = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const SCROLL_STEP = 2;
    const INTERVAL_MS = 100;

    const scroll = () => {
      if (stopped) return;
      const maxScroll = el.scrollHeight - el.clientHeight;
      if (maxScroll <= 0) return;

      if (el.scrollTop >= maxScroll - 1) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        el.scrollTop += SCROLL_STEP;
      }
    };

    const onPointer = () => {
      stopped = true;
      clearInterval(timer);
    };

    el.addEventListener("pointerdown", onPointer);
    el.addEventListener("touchstart", onPointer);

    timer = setInterval(scroll, INTERVAL_MS);

    return () => {
      stopped = true;
      clearInterval(timer);
      el.removeEventListener("pointerdown", onPointer);
      el.removeEventListener("touchstart", onPointer);
    };
  });
</script>

<div
  bind:this={containerEl}
  class="gap-4 my-2 {responsive.isMobile
    ? styleMobile
    : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-h-237.5 overflow-y-auto'} {className}"
>
  {#if isLoading}
    {#each Array.from({ length: responsive.isMobile ? 3 : 10 }) as it, i (i)}
      <GridCard
        id={i}
        title={`${it}`}
        description=""
        icon=""
        {variant}
        {isLoading}
      />
    {/each}
  {:else}
    {#each items as item, i (i)}
      <GridCard
        {...item}
        {variant}
        {onClick}
        {itemClassName}
        isShowDescription={item.isShowDescription ?? isShowDescription}
      />
    {/each}
  {/if}
</div>
