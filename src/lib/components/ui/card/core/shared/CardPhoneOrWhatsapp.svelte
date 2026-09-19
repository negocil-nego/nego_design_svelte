<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
      import type { CardPhoneOrWhatsappProps } from "../types";

  let {
    id,
    className,
    buttonClass,
    btnWhatsappClass,
    btnEmailClass,
    onEmailClick,
    onWhatsappClick,
  }: CardPhoneOrWhatsappProps = $props();

  let isFlex = $derived(onEmailClick && onWhatsappClick);
</script>

<div class="flex border-t border-gray-300 dark:border-gray-700 {className}">
  {#if onEmailClick}
    <button
      class="flex-1 flex justify-center items-center gap-2 p-3 hover:bg-red-800 hover:text-white cursor-pointer rounded-bl-lg {!isFlex
        ? 'rounded-br-lg'
        : ''} {buttonClass} {btnEmailClass}"
      onclick={() => onEmailClick?.(id)}
    >
      <ImageHugeicons icon="mail-01" width={20} height={20} />
      <span>Email</span>
    </button>
  {/if}
  {#if isFlex}
    <div class="border-l border-gray-300 dark:border-gray-700"></div>
  {/if}
  {#if onWhatsappClick}
    <button
      class="flex-1 flex justify-center items-center gap-2 p-3 hover:bg-green-600 hover:text-white cursor-pointer rounded-br-lg {!isFlex
        ? 'rounded-bl-lg'
        : ''} {buttonClass} {btnWhatsappClass}"
      onclick={() => onWhatsappClick?.(id)}
    >
      <ImageHugeicons icon="whatsapp" width={20} height={20} />
      <span>Whatsapp</span>
    </button>
  {/if}
</div>
