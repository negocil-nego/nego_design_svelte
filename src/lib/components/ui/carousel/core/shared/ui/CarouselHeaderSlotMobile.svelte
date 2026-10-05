<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import type { CarouselHeaderSlotProps } from "../../types";
  import { t } from "$lib/i18n";

  const {
    headerProps,
    slotProps,
    isEmpty = false,
    emptyTitle,
    emptyDescription,
    emptyIcon,
    plugins = [],
    isScrollbar = false,
    children,
    emptySnippet,
  }: CarouselHeaderSlotProps = $props();

  const styleTopButtomMoreCenter =
    "border-1 bg-white dark:bg-background rounded-full p-2";
  const styleTopCenter = "bg-gradient text-white! cursor-pointer!";
  const hasHeaderContent = $derived(
    Boolean(
      headerProps?.title ||
        headerProps?.description ||
        slotProps?.onMoreViewClick ||
        slotProps?.isButtonPreviousAndNext !== false,
    ),
  );
</script>

<div class="w-full flex justify-center">
  <div
    class="w-full p-2 rounded-xl
    {headerProps?.isBorder ? 'border border-gray-50 dark:border-gray-800' : ''} 
    {headerProps?.containerClass ?? ''}"
  >
    {#if isEmpty}
      {#if headerProps?.title || headerProps?.description}
        <div class="flex flex-col gap-1 mb-2">
          {#if headerProps.title}
            <h1 class={`text-xl ${headerProps.titleClass ?? ""}`}>
              {headerProps.title}
            </h1>
          {/if}
          {#if headerProps.description}
            <div class={`mt-1 text-sm ${headerProps.descriptionClass ?? ""}`}>
              {headerProps.description}
            </div>
          {/if}
        </div>
      {/if}
      {#if emptySnippet}
        {@render emptySnippet()}
      {:else}
        <NotFoundEmpty
          title={emptyTitle ?? $t("empty.title")}
          description={emptyDescription ?? $t("empty.description")}
          icon={emptyIcon}
        />
      {/if}
    {:else}
      <Carousel.Root
        {plugins}
        isScrollbar={isScrollbar || Boolean(slotProps?.isScrollbar)}
      >
        {#if hasHeaderContent}
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex flex-col gap-1 flex-1 min-w-0">
              {#if headerProps?.title}
                <h1 class={`text-xl truncate ${headerProps.titleClass ?? ""}`}>
                  {headerProps.title}
                </h1>
              {/if}
              {#if headerProps?.description}
                <div class={`mt-1 text-sm ${headerProps.descriptionClass ?? ""}`}>
                  {headerProps.description}
                </div>
              {/if}
            </div>

            <div class="flex items-center gap-2 shrink-0">
              {#if slotProps?.onMoreViewClick}
                <button
                  type="button"
                  onclick={slotProps.onMoreViewClick}
                  class={styleTopButtomMoreCenter}
                >
                  <span class="px-2 py-1 text-sm font-medium"
                    >{$t("label.view.full")}</span
                  >
                </button>
              {/if}
              {#if slotProps?.isButtonPreviousAndNext ?? true}
                <Carousel.Previous
                  class={`static! inset-auto! my-auto! ${styleTopCenter} ${slotProps?.buttonPreviousAndNextClass ?? ""}`}
                />
                <Carousel.Next
                  class={`static! inset-auto! my-auto! ${styleTopCenter} ${slotProps?.buttonPreviousAndNextClass ?? ""}`}
                />
              {/if}
            </div>
          </div>
        {/if}

        <div
          class={`relative py-3 px-2 ${isScrollbar || slotProps?.isScrollbar ? "overflow-x-auto" : ""} ${slotProps?.isBorderBottom ? "border-b" : ""} ${slotProps?.containerClass ?? "w-full"}`}
        >
          <Carousel.Content
            class={slotProps?.positionButtonPreviousAndNext === "top_right"
              ? ""
              : "ml-0"}
          >
            {@render children?.()}
          </Carousel.Content>
        </div>
      </Carousel.Root>
    {/if}
  </div>
</div>
