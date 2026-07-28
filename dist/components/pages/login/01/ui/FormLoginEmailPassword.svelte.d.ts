import type { LoginRequestDto } from "../../types";
/** Form de login com email e senha. Wrapper fino de FormLogin variant="EMAIL". */
type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
};
declare const FormLoginEmailPassword: import("svelte").Component<Props, {}, "">;
type FormLoginEmailPassword = ReturnType<typeof FormLoginEmailPassword>;
export default FormLoginEmailPassword;
