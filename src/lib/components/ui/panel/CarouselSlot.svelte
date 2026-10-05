<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { CarouselSlotProps } from "./type";

  const {
    title,
    description,
    titleClass = "",
    descriptionClass = "",
    isBorder = false,
    headerProps,
    slotProps,
    positionButtonPreviousAndNext = "center",
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
    isBorderBottom = false,
    containerClass = "w-full",
    plugins = [],
    isScrollbar = false,
    onMoreViewClick,
    isEmpty = false,
    emptyTitle,
    emptyDescription,
    emptyIcon,
    emptySnippet,
    children,
  }: CarouselSlotProps = $props();

  const effectiveTitle = $derived(headerProps?.title ?? title);
  const effectiveDescription = $derived(
    headerProps?.description ?? description,
  );
  const effectiveTitleClass = $derived(
    headerProps?.titleClass ?? titleClass,
  );
  const effectiveDescriptionClass = $derived(
    headerProps?.descriptionClass ?? descriptionClass,
  );
  const effectiveIsBorder = $derived(headerProps?.isBorder ?? isBorder);
  const effectiveContainerClass = $derived(
    headerProps?.containerClass ?? containerClass,
  );
  const effectivePositionButton = $derived(
    slotProps?.positionButtonPreviousAndNext ??
      headerProps?.positionButtonPreviousAndNext ??
      positionButtonPreviousAndNext,
  );
  const effectiveIsButtonPreviousAndNext = $derived(
    slotProps?.isButtonPreviousAndNext ?? isButtonPreviousAndNext,
  );
  const effectiveButtonClass = $derived(
    slotProps?.buttonPreviousAndNextClass ?? buttonPreviousAndNextClass,
  );
  const effectiveOnMoreViewClick = $derived(
    slotProps?.onMoreViewClick ?? onMoreViewClick,
  );
  const effectiveIsScrollbar = $derived(
    Boolean(slotProps?.isScrollbar || isScrollbar),
  );
  const effectivePlugins = $derived(slotProps?.plugins ?? plugins);
  const effectiveIsBorderBottom = $derived(
    slotProps?.isBorderBottom ?? isBorderBottom,
  );

  const styleTopButtomMoreCenter =
    "border-1 bg-white dark:bg-background rounded-full p-2";
  const styleTopCenter = "bg-gradient text-white! cursor-pointer!";
  const styleCenter =
    "absolute top-1/2 -translate-y-1/2 mt-0.5 md:mr-0 bg-blue-700! text-white! cursor-pointer!";

  const responsive = useDevice();

  const isControlsOnTopRight = $derived(
    effectivePositionButton === "top_right" || responsive.isMobile,
  );

  const hasHeaderContent = $derived(
    Boolean(
      effectiveTitle ||
        effectiveDescription ||
        effectiveOnMoreViewClick ||
        (isControlsOnTopRight && effectiveIsButtonPreviousAndNext),
    ),
  );
</script>

<div class="w-full flex justify-center">
  <div
    class="w-full p-2 rounded-xl
    {effectiveIsBorder ? 'border border-gray-50 dark:border-gray-800' : ''} 
    {effectiveContainerClass}"
  >
    {#if isEmpty}
      {#if effectiveTitle || effectiveDescription}
        <div class="flex flex-col gap-1 mb-2">
          {#if effectiveTitle}
            <h1 class={`text-xl ${effectiveTitleClass}`}>{effectiveTitle}</h1>
          {/if}
          {#if effectiveDescription}
            <div class={`mt-1 text-sm ${effectiveDescriptionClass}`}>
              {effectiveDescription}
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
      <Carousel.Root {plugins} isScrollbar={effectiveIsScrollbar}>
        {#if hasHeaderContent}
          <div class="flex items-center justify-between gap-3 mb-2 px-1">
            <div class="flex flex-col gap-1 flex-1 min-w-0">
              {#if effectiveTitle}
                <h1 class={`text-xl truncate ${effectiveTitleClass}`}>
                  {effectiveTitle}
                </h1>
              {/if}
              {#if effectiveDescription}
                <div class={`mt-1 text-sm ${effectiveDescriptionClass}`}>
                  {effectiveDescription}
                </div>
              {/if}
            </div>

            <div class="flex items-center gap-2 shrink-0">
              {#if effectiveOnMoreViewClick}
                <button
                  type="button"
                  onclick={effectiveOnMoreViewClick}
                  class={styleTopButtomMoreCenter}
                >
                  <span class="px-2 py-1 text-sm font-medium"
                    >{$t("label.view.full")}</span
                  >
                </button>
              {/if}
              {#if isControlsOnTopRight && effectiveIsButtonPreviousAndNext}
                <Carousel.Previous
                  class={`static! inset-auto! my-auto! ${styleTopCenter} ${effectiveButtonClass}`}
                />
                <Carousel.Next
                  class={`static! inset-auto! my-auto! ${styleTopCenter} ${effectiveButtonClass}`}
                />
              {/if}
            </div>
          </div>
        {/if}

        <div
          class={`relative py-3 px-2 ${effectiveIsScrollbar ? "overflow-x-auto" : ""} ${effectiveIsBorderBottom ? "border-b" : ""}`}
        >
          <Carousel.Content
            class={effectivePositionButton === "top_right" ? "" : "ml-0"}
          >
            {@render children?.()}
          </Carousel.Content>

          {#if !isControlsOnTopRight && effectiveIsButtonPreviousAndNext}
            <Carousel.Previous
              class={`-left-8 ${styleCenter} ${effectiveButtonClass}`}
            />
            <Carousel.Next
              class={`-right-8 ${styleCenter} ${effectiveButtonClass}`}
            />
          {/if}
        </div>
      </Carousel.Root>
    {/if}
  </div>
</div>
