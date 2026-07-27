import type { Credential } from "../data/page-props";
/** Form de login com email e senha. Wrapper fino de FormLogin variant="EMAIL". */
type Props = {
    onSubmit?: (credential: Credential) => void;
};
declare const FormLoginEmailPassword: import("svelte").Component<Props, {}, "">;
type FormLoginEmailPassword = ReturnType<typeof FormLoginEmailPassword>;
export default FormLoginEmailPassword;
