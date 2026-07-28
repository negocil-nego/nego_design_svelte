import type { Snippet } from "svelte";
import type { ForgetPasswordRequestDto, ForgetPasswordVariant } from "../../types";
/**
 * Card de recuperação de senha.
 * @property {ForgetPasswordVariant} formType - Tipo do input (EMAIL, PHONE)
 * @property {(req: ForgetPasswordRequestDto) => void} onSubmit - Callback ao submeter
 */
type Props = {
    formType?: ForgetPasswordVariant;
    onSubmit?: (request: ForgetPasswordRequestDto) => void;
    children?: Snippet;
};
declare const ForgetPasswordCard: import("svelte").Component<Props, {}, "">;
type ForgetPasswordCard = ReturnType<typeof ForgetPasswordCard>;
export default ForgetPasswordCard;
