import type {
	LoginFormType,
	LoginRequestDto,
	LinkProps,
	SocialLoginItem,
} from "$lib/components/pages/security/login/types";

/**
 * Props do ModalLogin — modal de autenticação que abre globalmente via o
 * `loginStore`. Todos os campos são opcionais: quando omitidos, os valores são
 * lidos a partir do `loginStore` (definidos por `openLogin(config)`).
 * @property title - Título exibido no cabeçalho do modal.
 * @property subtitle - Subtítulo exibido abaixo do título.
 * @property formType - Variante do formulário de login (padrão: "USERNAME_PASSWORD").
 * @property isLoading - Estado de carregamento do botão de submeter.
 * @property forgetPassword - Link "esqueci a senha".
 * @property privacyPolicy - Link da política de privacidade.
 * @property termsOfService - Link dos termos de utilização.
 * @property socialLogins - Redes sociais para login social.
 * @property onSubmit - Chamado quando as credenciais são submetidas.
 * @property onClose - Chamado quando o modal é fechado.
 * @see ModalLoginProps
 */
export type ModalLoginProps = {
	title?: string;
	subtitle?: string;
	formType?: LoginFormType;
	isLoading?: boolean;
	forgetPassword?: LinkProps;
	privacyPolicy?: LinkProps;
	termsOfService?: LinkProps;
	socialLogins?: SocialLoginItem[];
	onSubmit?: (credential: LoginRequestDto) => void;
	onClose?: () => void;
	class?: string;
};