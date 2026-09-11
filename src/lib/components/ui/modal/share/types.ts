import type { ModelSocialShare } from "$lib/components/ui/modal/core/types";

export type { ModelSocialShare } from "$lib/components/ui/modal/core/types";

/**
 * Props do componente ModalShareSelection — modal de partilha em redes sociais.
 * Terceira variação do sistema de modais do NegoDesign.
 * @property title - Título principal do modal (ex: "Share this design").
 * @property subtitle - Subtítulo/descrição abaixo do título.
 * @property networks - Lista de redes sociais para partilhar.
 * @property linkLabel - Texto acima do input de link (ex: "Or copy link").
 * @property linkValue - URL a ser partilhada/copiada.
 * @property copyText - Texto do botão de copiar.
 * @property copiedText - Texto exibido após copiar com sucesso.
 * @property isOpen - Controla a visibilidade do modal.
 * @property onShare - Chamado ao clicar numa rede social.
 * @property onCopy - Chamado ao clicar no botão copiar.
 * @property onClose - Chamado ao fechar o modal.
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalShareSelectionProps = {
	title: string;
	subtitle?: string;
	networks: ModelSocialShare[];
	linkLabel?: string;
	linkValue?: string;
	copyText?: string;
	copiedText?: string;
	isOpen?: boolean;
	onShare?: (network: ModelSocialShare) => void;
	onCopy?: (link: string) => void;
	onClose?: () => void;
	class?: string;
};
