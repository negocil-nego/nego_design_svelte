import type { ForgetPasswordRequestDto, ForgetPasswordVariant } from "../../types";
type Props = {
    variant?: ForgetPasswordVariant;
    onSubmit?: (request: ForgetPasswordRequestDto) => void;
};
declare const FormForgetPassword: import("svelte").Component<Props, {}, "">;
type FormForgetPassword = ReturnType<typeof FormForgetPassword>;
export default FormForgetPassword;
