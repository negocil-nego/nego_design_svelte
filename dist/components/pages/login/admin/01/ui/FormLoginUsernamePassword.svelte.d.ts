import type { Credential } from "../data/page-props";
type Props = {
    onSubmit?: (credential: Credential) => void;
};
declare const FormLoginUsernamePassword: import("svelte").Component<Props, {}, "">;
type FormLoginUsernamePassword = ReturnType<typeof FormLoginUsernamePassword>;
export default FormLoginUsernamePassword;
