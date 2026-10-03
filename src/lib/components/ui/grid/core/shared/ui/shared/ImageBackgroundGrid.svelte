<script lang="ts">
  let {
    image,
    variant = 1,
    overlayClass,
  }: {
    image?: string | null;
    variant?: 1 | 2;
    overlayClass?: string;
  } = $props();

  const hasImage = $derived(!!image);
  const defaultOverlay = $derived(
    variant === 2
      ? "bg-black/60 shadow-[inset_0_0_24px_rgba(0,0,0,0.6)]"
      : "bg-black/40 shadow-[inset_0_0_24px_rgba(0,0,0,0.4)]",
  );
</script>

{#if hasImage}
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style="background-image: url('{image}')"
  ></div>
  <div class="absolute inset-0 {overlayClass ?? defaultOverlay}"></div>
{/if}
