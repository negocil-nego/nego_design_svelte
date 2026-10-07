import type { HugeiconsIconName } from "$lib/components/ui/image/icons";
import type { Snippet } from "svelte";

/**
 * Props do componente ModalCore — contentor base reutilizável para todos os modais.
 * Fornece overlay, container com gradiente, cabeçalho, rodapé com progress bar e navegação.
 * @property isOpen - Controla a visibilidade do modal (bindable).
 * @property title - Título principal do modal.
 * @property subtitle - Subtítulo/descrição abaixo do título.
 * @property totalSteps - Número total de passos (para a progress bar).
 * @property currentStep - Passo actual (para a progress bar).
 * @property showProgress - Exibe a progress bar.
 * @property showBack - Exibe o botão "Back".
 * @property showSkip - Exibe o botão/link "Skip".
 * @property skipText - Texto do botão/link de skip.
 * @property continueText - Texto do botão "Continue".
 * @property backText - Texto do botão "Back".
 * @property onBack - Chamado ao clicar no botão "Back".
 * @property onContinue - Chamado ao clicar no botão "Continue".
 * @property onSkip - Chamado ao clicar no skip.
 * @property onClose - Chamado ao clicar no overlay (fechar).
 * @property content - Snippet com o conteúdo principal do modal.
 * @property footer - Snippet personalizado para o rodapé (substitui o padrão).
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalCoreProps = {
	isOpen: boolean;
	title: string;
	subtitle?: string;
	totalSteps?: number;
	currentStep?: number;
	showProgress?: boolean;
	showBack?: boolean;
	showSkip?: boolean;
	skipText?: string;
	continueText?: string;
	backText?: string;
	onBack?: () => void;
	onContinue?: () => void;
	onSkip?: () => void;
	onClose?: () => void;
	content?: Snippet;
	footer?: Snippet;
	class?: string;
};

/**
 * Modelo de dados para um badge/pill seleccionável dentro do modal.
 * Cada badge representa uma opção simples (ex: "Marketing", "Engineering").
 * @property label - Texto visível do badge.
 * @property value - Valor identificador do badge.
 * @property icon - Ícone opcional exibido antes do label.
 */
export type ModelBadge = {
	label: string;
	value: string;
	icon?: string | HugeiconsIconName;
};

/**
 * Ponto de informação apresentado dentro de um card do ModalGridSelection.
 * Lista de características/informações do card (checklist).
 * @property icon - Ícone do ponto (string CSS).
 * @property text - Texto do ponto de informação.
 * @property isChecked - Estado do ponto (true = destacado, false = esbatido).
 */
export type ModelGridCardInfoProps = {
	icon: string;
	text: string;
	isChecked: boolean;
};

/**
 * Modelo de dados para um card seleccionável dentro do grid do modal.
 * Cada card representa uma opção com ícone, título e descrição (ex: "Estudante", "Empresa").
 * @property title - Título visível do card.
 * @property description - Descrição curta exibida abaixo do título.
 * @property icon - Ícone exibido no topo do card (string CSS ou HugeIcons).
 * @property info - Pontos de informação/checklist apresentados dentro do card.
 */
export type ModelGridCardProps = {
	title: string;
	description?: string;
	icon: string | HugeiconsIconName;
	url?: string;
	info?: ModelGridCardInfoProps[];
};

/**
 * Modelo de dados para uma rede social no modal de partilha.
 * Cada item representa uma plataforma de redes sociais para partilhar conteúdo.
 * @property name - Nome da rede social.
 * @property icon - Ícone da rede social (string CSS ou HugeIcons).
 * @property img - URL da imagem/imagem de marca da rede social.
 * @property color - Cor da rede social (hex, rgb, etc.).
 * @property url - URL de partilha da rede social.
 */
export type ModelSocialShare = {
    name: string;
    icon?: string | HugeiconsIconName;
    img?: string;
    color?: string;
    url?: string;
};

/**
 * Opção seleccionável apresentada no painel do ModalOptionsPanel.
 * @property value - Valor identificador da opção.
 * @property label - Texto visível da opção.
 * @property country - Código ISO do país para exibir a bandeira via ImageFlag.
 * @property icon - Ícone opcional (string CSS ou HugeIcons) quando não há bandeira.
 */
export type ModalOptionItem = {
    value: string;
    label: string;
    country?: string;
    icon?: string | HugeiconsIconName;
};

/**
 * Props do componente ModalOptionsPanel — modal com painel de opções
 * (bandeiras/ícones + label) em grelha, construído sobre o ModalCore.
 * @property isOpen - Controla a visibilidade do modal (bindable).
 * @property title - Título principal do modal.
 * @property subtitle - Subtítulo/descrição abaixo do título.
 * @property options - Lista de opções apresentadas no painel.
 * @property selecteds - Valores actualmente seleccionados (realce).
 * @property onToggle - Chamado ao clicar num item do painel.
 * @property continueText - Texto do botão de fecho do rodapé.
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalOptionsPanelProps = {
    isOpen?: boolean;
    title: string;
    subtitle?: string;
    options: ModalOptionItem[];
    selecteds?: string[];
    onToggle?: (value: string) => void;
    continueText?: string;
    class?: string;
};
