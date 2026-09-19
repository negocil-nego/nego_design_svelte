<script lang="ts">
  import CarouselBadge from "$lib/components/ui/carousel/core/badge/ui/CarouselBadge.svelte";
  </script>

<div class="relative flex justify-center mt-10">
  <CarouselBadge
    orientation="horizontal"
    iconClass="size-6"
    onClick={(value: string | number) => console.log(value)}
    items={[
      {
        label: "Todos",
        value: "hospegadem",
        icon: "dashboard-circle-add",
      },
      { label: "Hotel", value: "hotel", icon: "bed-double" },
      { label: "Hospedaria", value: "hospedaria", icon: "bed-double" },
      { label: "Pensão", value: "pensao", icon: "bed-double" },
    ]}
    itemStyle="INLINE"
    showButton={true}
    isBorderInline
  />
</div>
