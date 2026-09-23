import type {
	LoginFormType,
	LoginRequestDto,
	LinkProps,
	SocialLoginItem,
} from "$lib/components/pages/security/login/types";

/**
 * Configuração opcional do modal de login. Qualquer desses campos sobrescreve
 * os valores predefinidos pelo componente ModalLogin.
 */
export type LoginStoreConfig = {
	/** Título exibido no cabeçalho do modal. */
	title?: string;
	/** Subtítulo exibido abaixo do título. */
	subtitle?: string;
	/** Variante do formulário de login (padrão: "USERNAME_PASSWORD"). */
	formType?: LoginFormType;
	/** Estado de carregamento do botão de submeter. */
	isLoading?: boolean;
	/** Link "esqueci a senha". */
	forgetPassword?: LinkProps;
	/** Link da política de privacidade. */
	privacyPolicy?: LinkProps;
	/** Link dos termos de utilização. */
	termsOfService?: LinkProps;
	/** Redes sociais para login social. */
	socialLogins?: SocialLoginItem[];
	/**
	 * Quando `true`, apresenta o NotificationBanner com um botão para abrir
	 * o ModalLogin.
	 */
	isOpenBanner?: boolean;
	/** Chamado quando as credenciais são submetidas. */
	onSubmit?: (credential: LoginRequestDto) => void;
	/** Chamado quando o modal é fechado. */
	onClose?: () => void;
};

/**
 * Estado do store de login. Quando `open` é `true`, o ModalLogin (montado no
 * NegoDesign) abre em qualquer parte da aplicação.
 */
export type LoginStore = LoginStoreConfig & {
	/** Controla a visibilidade do modal de login. Padrão: false. */
	open: boolean;
};

/** Store global do modal de login. Escute `loginStore.open` para controlar a visibilidade. */
export const loginStore: LoginStore = $state({ open: false });

function resetDefaults() {
	loginStore.title = undefined;
	loginStore.subtitle = undefined;
	loginStore.formType = undefined;
	loginStore.isLoading = false;
	loginStore.forgetPassword = undefined;
	loginStore.privacyPolicy = undefined;
	loginStore.termsOfService = undefined;
	loginStore.socialLogins = undefined;
	loginStore.isOpenBanner = false;
	loginStore.onSubmit = undefined;
	loginStore.onClose = undefined;
}

/**
 * Abre o modal de login em toda a aplicação.
 * @param config - Configuração opcional (título, variante, links, callbacks).
 * @example
 * openLogin({ formType: "EMAIL_PASSWORD", onSubmit: (cred) => login(cred) });
 */
export function openLogin(config: LoginStoreConfig = {}) {
	resetDefaults();
	Object.assign(loginStore, config, { open: true });
}

/** Fecha o modal de login global. */
export function closeLogin() {
	loginStore.open = false;
}