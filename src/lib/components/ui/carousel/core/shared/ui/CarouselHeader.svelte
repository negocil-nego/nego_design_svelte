<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { t } from "$lib/i18n";
      import type { CarouselHeaderProps } from "../../types";
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const {
    title,
    description,
    titleClass,
    descriptionClass,
    containerClass = "",
    onButtonViewAll,
    children,
    isBorder,
  }: CarouselHeaderProps & Props = $props();
</script>

<div class="w-full flex justify-center">
  <div
    class="w-full p-2 rounded-xl
    {isBorder ? 'border border-gray-50 dark:border-gray-800' : ''} 
    {containerClass}"
  >
    <div class="flex flex-col gap-1">
      <div class="flex justify-between">
        <div>
          {#if title}
            <h1 class={`text-xl ${titleClass}`}>{title}</h1>
          {/if}
          {#if description}
            <div class={`mt-3 ${descriptionClass}`}>
              {description}
            </div>
          {/if}
        </div>
        {#if onButtonViewAll}
          <div>
            <Button
              variant="outline"
              class="flex items-center gap-0.5 border"
              onclick={onButtonViewAll}
            >
              {$t("label.view.full")}
              <ImageHugeicons icon="arrow-right-01" />
            </Button>
          </div>
        {/if}
      </div>
    </div>
    <div>{@render children()}</div>
  </div>
</div>
