<script lang="ts">
  import CardAdBanner from "$lib/components/core/banner/CardAdBanner.svelte";
</script>

<CardAdBanner
  tagText="Este anúncio pode ser seu."
  titleHighlight="Este anúncio"
  titleMain="pode ser seu."
  buttonText="Saiba mais"
  onClickButton={() => console.log("clickou aqui")}
/>
