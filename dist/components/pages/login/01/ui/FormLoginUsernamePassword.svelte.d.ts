import type { Credential } from "../data/page-props";
/** Form de login com username e senha. Wrapper fino de FormLogin variant="USERNAME". */
type Props = {
    onSubmit?: (credential: Credential) => void;
};
declare const FormLoginUsernamePassword: import("svelte").Component<Props, {}, "">;
type FormLoginUsernamePassword = ReturnType<typeof FormLoginUsernamePassword>;
export default FormLoginUsernamePassword;
