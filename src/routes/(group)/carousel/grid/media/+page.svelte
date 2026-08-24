<script lang="ts">
  import items from "$lib/components/core/card/media/data";
  import CarouselGridMedia from "$lib/components/core/carousel/grid/media/ui/CarouselGridMedia.svelte";
</script>

<CarouselGridMedia
  {items}
  headerProps={{
    title: "Promoções imperdiveis",
    description: "Confira as promoções imperdiveis que preparamos para você",
    containerClass: "bg-gray-50 dark:bg-gray-800",
    onButtonViewAll: () => console.log("click"),
  }}
  slotProps={{
    buttonPreviousAndNextClass: "bg-white dark:bg-gray-800",
    positionButtonPreviousAndNext: "center",
  }}
  gridProps={{
    items: [
      {
        icon: "hgi hgi-stroke hgi-rounded hgi-second-bracket",
        title: "What is Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum",
      },
      {
        icon: "hgi hgi-stroke hgi-rounded hgi-second-bracket",
        title: "What is Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum",
      },
      {
        icon: "hgi hgi-stroke hgi-rounded hgi-second-bracket",
        title: "What is Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum",
      },
    ],
  }}
  onFavoriteClick={(id: string | number) => console.log("click", id)}
  onButtonProfile={(id: string | number) => console.log("click", id)}
  isImageButtonMaximized
  isVideoButtonMaximized
/>
