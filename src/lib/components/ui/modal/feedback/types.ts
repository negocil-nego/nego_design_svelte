/**
 * Props do componente ModalFeedback — modal de feedback com editor de texto rico.
 * Quinta variação do sistema de modais do NegoDesign.
 * @property title - Título principal do modal (ex: "Your Feedback").
 * @property icon - Emoji/ícone exibido ao lado do título.
 * @property placeholder - Texto placeholder da área de texto.
 * @property buttonText - Texto do botão de submissão.
 * @property buttonLoadingText - Texto exibido durante o carregamento.
 * @property cancelText - Texto do botão cancelar.
 * @property addImageText - Texto do botão de adicionar imagem.
 * @property isLoading - Estado de carregamento do botão.
 * @property isOpen - Controla a visibilidade do modal.
 * @property onSubmit - Chamado ao submeter o feedback (conteúdo HTML + imagens).
 * @property onAddImage - Chamado ao clicar no botão de adicionar imagem.
 * @property onClose - Chamado ao fechar o modal.
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalFeedbackProps = {
	title?: string;
	icon?: string;
	placeholder?: string;
	buttonText?: string;
	buttonLoadingText?: string;
	cancelText?: string;
	addImageText?: string;
	isLoading?: boolean;
	isOpen?: boolean;
	onSubmit?: (content: string, images: File[]) => void;
	onAddImage?: () => void;
	onClose?: () => void;
	class?: string;
};
