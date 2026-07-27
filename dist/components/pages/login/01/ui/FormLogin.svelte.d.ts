import type { Credential, LoginVariant } from "../data/page-props";
/**
 * Formulário de login reutilizável.
 * @property {LoginVariant} variant - Tipo do input de dados (EMAIL, USERNAME, PHONE)
 * @property {(cred: Credential) => void} onSubmit - Callback ao submeter { data, password }
 */
type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: Credential) => void;
};
declare const FormLogin: import("svelte").Component<Props, {}, "">;
type FormLogin = ReturnType<typeof FormLogin>;
export default FormLogin;
