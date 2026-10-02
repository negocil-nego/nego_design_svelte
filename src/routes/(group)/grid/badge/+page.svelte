<script lang="ts">
  import GridBadge from "$lib/components/ui/grid/core/badge/ui/GridBadge.svelte";
</script>

<div class="flex justify-center mt-10">
  <GridBadge
    orientation="horizontal"
    itemStyle="BORDER"
    iconClass="size-5"
    menuKey="hotel"
    items={[
      {
        label: "Todos",
        value: "todos",
        icon: "hgi hgi-stroke hgi-dashboard-circle-add",
      },
      { label: "Hotel", value: "hotel", icon: "hgi hgi-stroke hgi-hotel-01" },
      {
        label: "Hospedaria",
        value: "hospedaria",
        icon: "hgi hgi-stroke hgi-bed-double",
      },
      { label: "Pensão", value: "pensao", icon: "hgi hgi-stroke hgi-bed-double" },
      {
        label: "Restaurantes",
        value: "restaurantes",
        icon: "hgi hgi-stroke hgi-restaurant-01",
      },
      { label: "Tours", value: "tours", icon: "hgi hgi-stroke hgi-compass-01" },
    ]}
    onClick={(value: string | number) => console.log("badge", value)}
  />
</div>
