<script lang="ts">
  import SimpleBadgeCarousel from "$lib/components/core/carousel/shared/ui/SimpleBadgeCarousel.svelte";
  import {
    BedDoubleIcon,
    DashboardCircleIcon,
    Hotel01Icon,
    Hotel02Icon,
  } from "@hugeicons/core-free-icons";
</script>

<div class="relative">
  <SimpleBadgeCarousel
    buttonPreviousAndNextClass="bg-blue-900 text-white dark:bg-black dark:text-white"
    orientation="vertical"
    isBorderItem={false}
    iconClass="size-6"
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
  />
</div>
