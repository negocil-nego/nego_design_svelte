<script lang="ts">
  import { t } from "$lib/i18n";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { CardTagsProps } from "../../types";
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverTitle,
    PopoverHeader,
  } from "$lib/components/ui/popover";

  type Props = {
    title?: string;
    content?: string;
    tags?: CardTagsProps[];
    variant?: "icon" | "text" | "overlay-icon";
    align?: "start" | "center" | "end";
    class?: string;
  };

  let {
    title,
    content,
    tags,
    variant = "icon",
    align = "end",
    class: className = "",
  }: Props = $props();
</script>

{#if content}
  <Popover class={className}>
    <PopoverTrigger>
      {#if variant === "overlay-icon"}
        <span
          class="size-7 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white hover:bg-black/60 transition cursor-pointer"
          title={$t("label.description") || "Detalhes"}
        >
          <ImageHugeicons icon="InformationCircleIcon" class="size-3.5" />
        </span>
      {:else if variant === "text"}
        <span
          class="inline-flex items-center text-[10px] sm:text-[11px] text-primary hover:underline font-medium cursor-pointer"
        >
          {$t("label.view.full") || "Info"}
        </span>
      {:else}
        <span
          class="size-7 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors cursor-pointer"
          title={$t("label.description") || "Detalhes"}
        >
          <ImageHugeicons icon="InformationCircleIcon" class="size-3.5" />
        </span>
      {/if}
    </PopoverTrigger>

    <PopoverContent
      {align}
      class="w-72 sm:w-80 rounded-2xl p-3.5 shadow-xl border bg-popover/95 backdrop-blur-md"
    >
      <PopoverHeader class="mb-1.5">
        <PopoverTitle class="text-xs font-semibold flex items-center gap-1.5">
          <ImageHugeicons icon="Airplane01Icon" class="size-3.5 text-primary" />
          {title || $t("label.details") || "Detalhes do Voo"}
        </PopoverTitle>
      </PopoverHeader>
      <div class="text-[11px] sm:text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
        {content}
      </div>
      {#if tags && tags.length > 0}
        <div class="mt-2.5 pt-2.5 border-t border-border/60 flex flex-wrap gap-1">
          {#each tags as tag, i (i)}
            <span
              class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-muted text-foreground"
            >
              {#if tag.icon}
                <ImageHugeicons icon={tag.icon} class="size-2.5" />
              {/if}
              {tag.text}
            </span>
          {/each}
        </div>
      {/if}
    </PopoverContent>
  </Popover>
{/if}
