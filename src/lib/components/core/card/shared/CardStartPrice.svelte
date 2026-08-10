<script lang="ts">
  import StartBg from "$lib/assets/start.png";

  type Props = {
    newPrice?: string | number;
    oldPrice?: string | number;
    type?: "start" | "normal";
  };

  let { newPrice, oldPrice, type = "normal" }: Props = $props();
</script>

<div class="relative min-w-25 md:min-w-32 ml-0 pl-0">
  {#if type == "start"}
    <img
      src={StartBg}
      alt=""
      class="shadow rounded-tl-lg rounded-bl-lg md:w-20 md:h-20 lg:w-32 lg:h-24 absolute"
    />
  {/if}
  {#if newPrice && oldPrice}
    <div class="z-20 flex justify-center items-center">
      <div class="font-extrabold text-lg">{newPrice}</div>
      <div class="mx-2">/</div>
      <div class="font-semibold line-through text-red-600 text-[10px]">
        {oldPrice}
      </div>
    </div>
  {:else}
    <div class="z-20 font-bold">{newPrice}</div>
  {/if}
</div>
