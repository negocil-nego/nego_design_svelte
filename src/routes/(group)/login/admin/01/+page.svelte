<script lang="ts">
  import { PageLogin, t } from "$lib";

  let variant = $state<1 | 2 | 3>(1);

  const carousel = [
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
  ];
</script>

<div class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
  <button
    onclick={() => variant = 1}
    class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors {variant === 1 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}"
  >
    Variant 01
  </button>
  <button
    onclick={() => variant = 2}
    class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors {variant === 2 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}"
  >
    Variant 02
  </button>
  <button
    onclick={() => variant = 3}
    class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors {variant === 3 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}"
  >
    Variant 03
  </button>
</div>

<PageLogin
  {variant}
  title="Negodesign"
  formType="EMAIL_PASSWORD"
  {carousel}
/>
