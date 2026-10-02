<script lang="ts">
  import { cn } from "$lib/utils";
  import type { ItemGridProps } from "../../data/types";
  import DescriptionGrid from "../shared/DescriptionGrid.svelte";
  import IconRenderGrid from "../shared/IconRenderGrid.svelte";
  import TitleGrid from "../shared/TitleGrid.svelte";
  import ImageBackgroundGrid from "../shared/ImageBackgroundGrid.svelte";

  let {
    id,
    icon,
    title,
    isLoading,
    description,
    iconClass,
    titleClass,
    itemClassName,
    descriptionClass,
    image,
    width,
    height,
    itemWidth,
    itemHeight,
    isShowDescription = true,
    onClick,
  }: ItemGridProps = $props();

  const hasImage = $derived(!!image);

  function formatDimension(val?: string | number): string | undefined {
    if (val === undefined || val === null || val === "") return undefined;
    return typeof val === "number" ? `${val}px` : val;
  }

  const customStyle = $derived.by(() => {
    const styles: string[] = [];
    const w = formatDimension(width ?? itemWidth);
    const h = formatDimension(height ?? itemHeight);
    if (w) styles.push(`width: ${w}`);
    if (h) styles.push(`height: ${h}`);
    return styles.length > 0 ? styles.join("; ") : undefined;
  });
</script>

<button
  type="button"
  onclick={() => {
    if (id && onClick) onClick(id);
  }}
  style={customStyle}
  class="relative overflow-hidden flex flex-col justify-center items-center gap-2 border rounded-lg p-2 cursor-pointer
   {itemClassName}"
>
  <ImageBackgroundGrid {image} variant={2} />
  <div
    class="relative flex flex-col justify-center items-center gap-2 w-full {hasImage
      ? 'text-white'
      : ''}"
  >
    <IconRenderGrid
      {icon}
      {isLoading}
      iconClass={cn("animate__animated animate__fadeInDown", iconClass)}
    />
    <TitleGrid
      {title}
      {isLoading}
      titleClass={cn(
        "animate__animated animate__fadeInDown",
        isShowDescription ? "" : "mt-5",
        titleClass,
      )}
    />
    {#if isShowDescription}
      <DescriptionGrid
        descriptionClass={hasImage
          ? `text-white/90! ${descriptionClass ?? ""}`
          : descriptionClass}
        {description}
        {isLoading}
      />
    {/if}
  </div>
</button>
