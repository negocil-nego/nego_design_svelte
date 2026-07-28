import type { PageForgetPasswordProps } from "./types";
/**
 * Página de recuperação de senha.
 * @property {"01"} varient - Variante do layout
 * @property {CarouselItem[]} carousel - Itens do carousel hero
 * @property {string} title - Título do hero
 * @property {(req: ForgetPasswordRequestDto) => void} onSubmit - Callback ao submeter email
 */
type Props = {
    varient?: "01";
};
type $$ComponentProps = PageForgetPasswordProps & Props;
declare const PageForgetPassword: import("svelte").Component<$$ComponentProps, {}, "">;
type PageForgetPassword = ReturnType<typeof PageForgetPassword>;
export default PageForgetPassword;
