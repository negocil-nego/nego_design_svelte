import type { Credential } from "../data/page-props";
type Props = {
    onSubmit?: (credential: Credential) => void;
};
declare const FormLoginEmailPassword: import("svelte").Component<Props, {}, "">;
type FormLoginEmailPassword = ReturnType<typeof FormLoginEmailPassword>;
export default FormLoginEmailPassword;
