import type { LoginRequestDto } from "../../types";
/** Form de login com telefone e senha. Wrapper fino de FormLogin variant="PHONE". */
type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
};
declare const FormLoginPhonePassword: import("svelte").Component<Props, {}, "">;
type FormLoginPhonePassword = ReturnType<typeof FormLoginPhonePassword>;
export default FormLoginPhonePassword;
