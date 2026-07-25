<script lang="ts">
  import { t } from "$lib/i18n";
  import AuthCard from "./AuthCard.svelte";
  import LeftHero from "./LeftHero.svelte";
</script>

<main class="h-screen w-screen flex items-center">
  <div class="hidden md:block md:w-8/12">
    <LeftHero
      title="Negodesign"
      varient="POINTER"
      items={[
        {
          buttonText: $t("label.next"),
          title: "ALorem Ipsum is simply dummy text of the printing and",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled",
        },
        {
          buttonText: $t("label.next"),
          title: "BLorem Ipsum is simply dummy text of the printing and",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled",
        },
        {
          buttonText: $t("label.next"),
          title: "CLorem Ipsum is simply dummy text of the printing and",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled",
        },
      ]}
    />
  </div>
  <div class="w-full md:px-0 md:w-4/12 border-gray-900">
    <AuthCard />
  </div>
</main>

<style>
  :global(.grid-pattern) {
    background-size: 40px 40px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  }
</style>
