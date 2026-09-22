import { startCountdown, stopCountdown } from "./banner-store.svelte";

/**
 * Configuração opcional do modal OTP. Qualquer desses campos sobrescreve
 * os valores predefinidos pelo componente ModalOtp.
 */
export type OtpStoreConfig = {
	/** Título exibido no cabeçalho do modal. */
	title?: string;
	/** Subtítulo exibido abaixo do título. */
	subtitle?: string;
	/** Quantidade de caixas do código OTP (padrão: 6). */
	otpLength?: number;
	/** Estado de carregamento do botão de submeter. */
	isLoading?: boolean;
	/**
	 * Duração (em minutos) da validade do OTP. Quando o tempo expira,
	 * `isLoading` é reposto para `false` e o modal OTP fecha.
	 */
	minutes?: number;
	/**
	 * Quando `true`, apresenta o NotificationBanner com um botão para abrir
	 * o ModalOtp e um countdown com o tempo restante da validade do OTP.
	 */
	isOpenBanner?: boolean;
	/** Chamado quando o código OTP é submetido. */
	onSubmit?: (code: string) => void;
	/** Chamado quando o modal é fechado. */
	onClose?: () => void;
};

/**
 * Estado do store OTP. Quando `open` é `true`, o ModalOtp (montado no
 * NegoDesign) abre em qualquer parte da aplicação.
 */
export type OtpStore = OtpStoreConfig & {
	/** Controla a visibilidade do modal OTP. Padrão: false. */
	open: boolean;
};

/** Store global do modal OTP. Escute `otpStore.open` para controlar a visibilidade. */
export const otpStore: OtpStore = $state({ open: false });

function resetDefaults() {
	otpStore.title = undefined;
	otpStore.subtitle = undefined;
	otpStore.otpLength = undefined;
	otpStore.isLoading = false;
	otpStore.minutes = undefined;
	otpStore.isOpenBanner = false;
	otpStore.onSubmit = undefined;
	otpStore.onClose = undefined;
}

/**
 * Abre o modal OTP em toda a aplicação.
 * @param config - Configuração opcional (título, subtítulo, comprimento, minutos, callbacks).
 * @example
 * openOtp({ title: "Código de verificação", minutes: 5, onSubmit: (code) => verify(code) });
 */
export function openOtp(config: OtpStoreConfig = {}) {
	resetDefaults();
	Object.assign(otpStore, config, { open: true });

	stopCountdown();
	if (config.minutes != null) {
		startCountdown(config.minutes * 60, () => {
			otpStore.isLoading = false;
			otpStore.open = false;
			otpStore.isOpenBanner = false;
		});
	}
}

/** Fecha o modal OTP global. */
export function closeOtp() {
	stopCountdown();
	otpStore.open = false;
}