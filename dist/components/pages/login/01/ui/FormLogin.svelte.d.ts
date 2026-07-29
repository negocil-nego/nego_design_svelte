import type { LoginRequestDto, LoginVariant, LinkProps } from "../../types";
/**
 * Formulário de login reutilizável.
 * @property {LoginVariant} variant - Tipo do input de dados (EMAIL, USERNAME, PHONE)
 * @property {(cred: Credential) => void} onSubmit - Callback ao submeter { data, password }
 * @property {LinkProps} forgetPassword - Config do link de esquecimento de senha { url, onclick }
 */
type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
};
declare const FormLogin: import("svelte").Component<Props, {}, "">;
type FormLogin = ReturnType<typeof FormLogin>;
export default FormLogin;
