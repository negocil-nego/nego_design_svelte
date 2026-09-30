<script lang="ts">
  import { cn } from "$lib/utils";
  import type { ItemGridProps } from "../../data/types";
  import DescriptionGrid from "../shared/DescriptionGrid.svelte";
  import IconRenderGrid from "../shared/IconRenderGrid.svelte";
  import TitleGrid from "../shared/TitleGrid.svelte";

  let {
    id,
    icon,
    title,
    isLoading,
    iconClass,
    titleClass,
    description,
    itemClassName,
    descriptionClass,
    image,
    onClick,
    isShowDescription = true,
  }: ItemGridProps = $props();

  const hasImage = $derived(!!image);
</script>

<button
  onclick={() => {
    if (id && onClick) onClick(id);
  }}
  class="relative overflow-hidden flex flex-col justify-center items-center gap-2 rounded-xl {itemClassName}"
>
  {#if hasImage}
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('{image}')"
    ></div>
    <div
      class="absolute inset-0 bg-black/40 shadow-[inset_0_0_24px_rgba(0,0,0,0.6)]"
    ></div>
  {/if}
  <div
    class="relative z-10 flex flex-col justify-center items-center gap-2 w-full
    {hasImage ? 'text-white' : ''}
    "
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
        descriptionClass={cn(
          "animate__animated animate__fadeInDown",
          hasImage ? `text-white/90!` : descriptionClass,
        )}
        {description}
        {isLoading}
      />
    {/if}
  </div>
</button>
