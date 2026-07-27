import type { Snippet } from "svelte";
import type { AuthFormType, Credential, LinkProps } from "../data/page-props";
/**
 * Card de autenticação com abas login/register.
 * @property {AuthFormType} formType - Tipo do form (EMAIL_PASSWORD, USERNAME_PASSWORD, PHONE_PASSWORD)
 * @property {(cred: Credential) => void} onSubmit - Callback ao submeter credenciais
 * @property {Snippet} register - Snippet do form de registro (opcional, exibe aba Register)
 * @property {LinkProps} privacyPolicy - Config do link de privacidade { url, onclick }
 * @property {LinkProps} termsOfService - Config do link de termos { url, onclick }
 */
type Props = {
    formType?: AuthFormType;
    onSubmit?: (credential: Credential) => void;
    register?: Snippet;
    privacyPolicy?: LinkProps;
    termsOfService?: LinkProps;
};
declare const AuthCard: import("svelte").Component<Props, {}, "">;
type AuthCard = ReturnType<typeof AuthCard>;
export default AuthCard;
