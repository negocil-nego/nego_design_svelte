<script lang="ts">
  import AdCardBanner from "$lib/components/core/banner/AdCardBanner.svelte";
</script>

<AdCardBanner
  tagText="Este anúncio pode ser seu."
  titleHighlight="Este anúncio"
  titleMain="pode ser seu."
  buttonText="Saiba mais"
  onClickButton={() => console.log("clickou aqui")}
/>
