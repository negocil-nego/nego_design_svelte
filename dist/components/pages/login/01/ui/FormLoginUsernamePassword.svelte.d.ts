import type { LoginRequestDto, LinkProps } from "../../types";
/** Form de login com username e senha. Wrapper fino de FormLogin variant="USERNAME". */
type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
};
declare const FormLoginUsernamePassword: import("svelte").Component<Props, {}, "">;
type FormLoginUsernamePassword = ReturnType<typeof FormLoginUsernamePassword>;
export default FormLoginUsernamePassword;
