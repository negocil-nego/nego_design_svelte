import type { Credential, LoginVariant } from "../data/page-props";
type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: Credential) => void;
};
declare const FormLogin: import("svelte").Component<Props, {}, "">;
type FormLogin = ReturnType<typeof FormLogin>;
export default FormLogin;
