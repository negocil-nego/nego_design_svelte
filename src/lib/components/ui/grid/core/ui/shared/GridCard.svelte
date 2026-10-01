<script lang="ts">
  import type { ItemGridProps } from "../../data/types";
  import Grid01 from "../01/Grid01.svelte";
  import Grid02 from "../02/Grid02.svelte";

  let {
    variant = 1,
    id,
    icon = "",
    title = "",
    description = "",
    image,
    iconClass,
    titleClass,
    descriptionClass,
    itemClassName,
    width,
    height,
    itemWidth,
    itemHeight,
    isShowDescription = true,
    isLoading = false,
    onClick,
  }: ItemGridProps & {
    variant?: 1 | 2;
  } = $props();
</script>

{#if variant == 2}
  <Grid02
    {id}
    {icon}
    {title}
    {description}
    {image}
    {iconClass}
    {titleClass}
    {descriptionClass}
    {itemClassName}
    {width}
    {height}
    {itemWidth}
    {itemHeight}
    {isShowDescription}
    {isLoading}
    {onClick}
  />
{:else}
  <Grid01
    {id}
    {icon}
    {title}
    {description}
    {image}
    {iconClass}
    {titleClass}
    {descriptionClass}
    {itemClassName}
    {width}
    {height}
    {itemWidth}
    {itemHeight}
    {isShowDescription}
    {isLoading}
    {onClick}
  />
{/if}
