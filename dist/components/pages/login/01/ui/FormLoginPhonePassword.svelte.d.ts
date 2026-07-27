import type { Credential } from "../data/page-props";
/** Form de login com telefone e senha. Wrapper fino de FormLogin variant="PHONE". */
type Props = {
    onSubmit?: (credential: Credential) => void;
};
declare const FormLoginPhonePassword: import("svelte").Component<Props, {}, "">;
type FormLoginPhonePassword = ReturnType<typeof FormLoginPhonePassword>;
export default FormLoginPhonePassword;
