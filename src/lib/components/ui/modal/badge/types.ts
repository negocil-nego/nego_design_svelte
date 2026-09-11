import type { ModelBadge } from "$lib/components/ui/modal/core/types";

export type { ModelBadge } from "$lib/components/ui/modal/core/types";

/**
 * Props do componente ModalBadgeSelection — modal de seleção com badges/pills.
 * Segunda variação do sistema de modais do NegoDesign.
 * @property title - Título principal do modal.
 * @property subtitle - Subtítulo/descrição abaixo do título.
 * @property badges - Lista de badges/pills seleccionáveis.
 * @property selectedBadge - Badge actualmente seleccionado.
 * @property multiple - Permite seleção múltipla de badges.
 * @property totalSteps - Número total de passos (para a progress bar).
 * @property currentStep - Passo actual.
 * @property isOpen - Controla a visibilidade do modal.
 * @property onSelect - Chamado ao seleccionar um badge.
 * @property onBack - Chamado ao clicar no botão "Back".
 * @property onContinue - Chamado ao clicar no botão "Continue".
 * @property onSkip - Chamado ao clicar no "Skip This Step".
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalBadgeSelectionProps = {
	title: string;
	subtitle?: string;
	badges: ModelBadge[];
	selectedBadge?: ModelBadge | null;
	selectedBadges?: ModelBadge[];
	multiple?: boolean;
	totalSteps?: number;
	currentStep?: number;
	isOpen?: boolean;
	onSelect?: (badge: ModelBadge) => void;
	onBack?: () => void;
	onContinue?: () => void;
	onSkip?: () => void;
	class?: string;
};
