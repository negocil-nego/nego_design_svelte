import type { Credential } from "../data/page-props";
type Props = {
    onSubmit?: (credential: Credential) => void;
};
declare const FormLoginPhonePassword: import("svelte").Component<Props, {}, "">;
type FormLoginPhonePassword = ReturnType<typeof FormLoginPhonePassword>;
export default FormLoginPhonePassword;
