<script lang="ts">
  import PageLogin from "$lib/components/pages/security/login/01/ui/PageLogin01.svelte";
  import { t } from "$lib/i18n";
</script>

<PageLogin
  title="Negodesign"
  formType="EMAIL_PASSWORD"
  carousel={[
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
