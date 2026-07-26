<script lang="ts">
  import LanguageSwitcher from "../../../../../ui/language-switcher/language-switcher.svelte";
  import LinkTermsOfService from "../../../../../core/link/link-terms-of-service.svelte";
  import LinkPrivacyPolity from "../../../../../core/link/link-privacy-polity.svelte";
  import TabUnderline from "../../../../../core/tabs/ui/tab-underline.svelte";
  import ButtonBack from "../../../../../core/button/ButtonBack.svelte";
  import LabelOr from "../../../../../core/label/LabelOr.svelte";
  //import FormRegister from "./FormRegister.svelte";
  import FormLogin from "./FormLogin.svelte";
  import { LightSwitch } from "../../../../../ui/light-switch";
  import { t } from "../../../../../../i18n";
</script>

<div class="flex-1 flex flex-col justify-between h-screen bg-gradient-right">
  <nav class="flex justify-between p-5 md:bg-transparent">
    <div>
      <ButtonBack />
    </div>
    <div class="flex gap-2">
      <LightSwitch />
      <LanguageSwitcher />
    </div>
  </nav>

  <div
    class="p-5 h-full border-t-2 bg-background md:border-none rounded-tl-[35px] rounded-tr-[35px]"
  >
    <TabUnderline
      items={[
        {
          item: { label: $t("label.login"), value: "login" },
          children: loginSnippet,
        },
        // {
        //   item: { label: $t("label.register"), value: "register" },
        //   children: registerSnippet,
        // },
      ]}
    />

    {#snippet loginSnippet()}
      <FormLogin />
    {/snippet}

    <!-- {#snippet registerSnippet()}
      <FormRegister />
    {/snippet} -->
  </div>

  <!-- Footer Terms -->
  <div
    class="text-[11px] text-slate-400 py-2 flex justify-center gap-2 bg-background"
  >
    <LinkPrivacyPolity />
    <LabelOr />
    <LinkTermsOfService />
  </div>
</div>
