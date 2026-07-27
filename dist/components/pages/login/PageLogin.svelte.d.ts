import type { PageLoginProps } from "./01/data/page-props";
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
type $$ComponentProps = PageLoginProps & Props;
declare const PageLogin: import("svelte").Component<$$ComponentProps, {}, "">;
type PageLogin = ReturnType<typeof PageLogin>;
export default PageLogin;
