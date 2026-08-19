<script lang="ts">
  import CarouselBadge from "$lib/components/core/carousel/badge/ui/CarouselBadge.svelte";
  import {
    BedDoubleIcon,
    DashboardCircleIcon,
    Hotel01Icon,
    Hotel02Icon,
  } from "@hugeicons/core-free-icons";
</script>

<div class="relative flex justify-center mt-10">
  <CarouselBadge
    orientation="horizontal"
    iconClass="size-6"
    onClick={(value) => console.log(value)}
    items={[
      {
        label: "Todos",
        value: "hospegadem",
        icon: DashboardCircleIcon,
      },
      { label: "Hotel", value: "hotel", icon: Hotel01Icon },
      { label: "Hospedaria", value: "hospedaria", icon: Hotel02Icon },
      { label: "Pensão", value: "pensao", icon: BedDoubleIcon },
    ]}
    itemStyle="INLINE"
    showButton={true}
    isBorderInline
  />
</div>
