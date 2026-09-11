/**
 * Props do componente ModalNotification — modal de subscrição/notificação por email.
 * Quarta variação do sistema de modais do NegoDesign.
 * @property title - Título principal do modal (ex: "Be the first to know").
 * @property description - Texto descritivo abaixo do título.
 * @property placeholder - Texto placeholder do input de email.
 * @property buttonText - Texto do botão de submissão.
 * @property buttonLoadingText - Texto exibido durante o carregamento.
 * @property isLoading - Estado de carregamento do botão.
 * @property isOpen - Controla a visibilidade do modal.
 * @property onSubmit - Chamado ao submeter o email.
 * @property onClose - Chamado ao fechar o modal.
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalNotificationProps = {
	title: string;
	description?: string;
	placeholder?: string;
	buttonText?: string;
	buttonLoadingText?: string;
	isLoading?: boolean;
	isOpen?: boolean;
	onSubmit?: (email: string) => void;
	onClose?: () => void;
	class?: string;
};
