<script lang="ts">
  import items from "$lib/components/ui/card/core/profile/data";
  import GridProfile from "$lib/components/ui/grid/core/profile/ui/GridProfile.svelte";
</script>

<GridProfile
  {items}
  variant={1}
  headerProps={{
    title: "Guias e intérpretes",
    description: "Conheça os profissionais que acompanham a sua viagem",
    containerClass: "bg-gray-50 dark:bg-gray-800",
  }}
  onFavoriteClick={(id: string | number) => console.log("favorite", id)}
  onButtonProfile={(id: string | number) => console.log("profile", id)}
  onEmailClick={(id: string | number) => console.log("email", id)}
  onWhatsappClick={(id: string | number) => console.log("whatsapp", id)}
/>
