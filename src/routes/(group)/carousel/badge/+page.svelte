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
        icon: "DashboardCircleAddIcon",
      },
      { label: "Hotel", value: "hotel", icon: "BedDoubleIcon" },
      { label: "Hospedaria", value: "hospedaria", icon: "BedDoubleIcon" },
      { label: "Pensão", value: "pensao", icon: "BedDoubleIcon" },
    ]}
    itemStyle="INLINE"
    showButton={true}
    isBorderInline
  />
</div>
