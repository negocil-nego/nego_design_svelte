<script lang="ts">
    import ImgPlaceholder from "$lib/assets/placeholder-image.png";
    import type { ImageLogoProps } from "./types";

    let { src, textClass, alt, text }: ImageLogoProps = $props();
</script>

<div class="flex gap-1 items-center">
    {#if src}
        <div class="w-10 h-10">
            <img
                src={src || ImgPlaceholder}
                alt={alt ?? "Sobre a empresa"}
                class="aspect-square size-full rounded-full object-cover"
                onerror={(e) =>
                    ((e.target as HTMLImageElement).src = ImgPlaceholder)}
            />
        </div>
    {/if}
    {#if src}
        <div class={textClass}>{text}</div>
    {/if}
</div>
