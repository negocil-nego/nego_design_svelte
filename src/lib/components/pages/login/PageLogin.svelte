<script lang="ts">
  import type { PageLoginProps } from "./types";
  import PageLogin01 from "./01/ui/PageLogin01.svelte";

  /**
   * Página de login principal.
   * @property {"01"} varient - Variante do layout de login
   * @property {CarouselItem[]} carousel - Itens do carousel hero
   * @property {string} title - Título do hero
   * @property {AuthFormType} formType - Tipo do form (EMAIL_PASSWORD, USERNAME_PASSWORD, PHONE_PASSWORD)
   * @property {LinkProps} privacyPolicy - Config do link de política de privacidade
   * @property {LinkProps} termsOfService - Config do link de termos de serviço
   */
  type Props = {
    varient?: "01";
  };

  let { ...props }: PageLoginProps & Props = $props();
</script>

<PageLogin01 {...props} />
