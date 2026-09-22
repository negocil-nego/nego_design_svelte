/**
 * Props do ModalOtp — modal de verificação OTP que abre globalmente via o
 * `otpStore`. Todos os campos são opcionais: quando omitidos, os valores são
 * lidos a partir do `otpStore` (definidos por `openOtp(config)`).
 * @property title - Título exibido no cabeçalho do modal.
 * @property subtitle - Subtítulo exibido abaixo do título.
 * @property otpLength - Quantidade de caixas do código OTP (padrão: 6).
 * @property isLoading - Estado de carregamento do botão de submeter.
 * @property onSubmit - Chamado quando o código OTP é submetido.
 * @property onClose - Chamado quando o modal é fechado.
 * @see ModalOtpProps
 */
export type ModalOtpProps = {
	title?: string;
	subtitle?: string;
	otpLength?: number;
	isLoading?: boolean;
	onSubmit?: (code: string) => void;
	onClose?: () => void;
	class?: string;
};