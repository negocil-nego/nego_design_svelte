import type { ModelGridCardProps } from "$lib/components/ui/modal/core/types";
export type { ModelGridCardProps as ModelGridCard } from "$lib/components/ui/modal/core/types";

/**
 * Modelo de dados para uma categoria/selecção no topo do modal (variante 2).
 * Cada categoria filtra ou indica o contexto dos cards.
 * @property label - Texto visível da categoria.
 * @property value - Valor identificador da categoria.
 */
export type ModelGridCategory = {
	label: string;
	value: string;
};

/**
 * Props do componente ModalGridSelection — modal de seleção em grid.
 * Suporta duas variantes visuais: 1 (centrado 3 colunas) e 2 (dark 2 colunas + categorias).
 * @property variant - Variante visual do modal (1 ou 2).
 * @property title - Título principal do modal.
 * @property subtitle - Subtítulo/descrição abaixo do título.
 * @property categories - Lista de categorias no topo (apenas variante 2).
 * @property selectedCategory - Categoria seleccionada (apenas variante 2).
 * @property cards - Lista de cards seleccionáveis.
 * @property selectedCard - Card actualmente seleccionado.
 * @property selectedCards - Cards seleccionados (modo múltiplo, variante 2).
 * @property multiple - Permite seleção múltipla (variante 2).
 * @property totalSteps - Número total de passos (para pagination dots).
 * @property currentStep - Passo actual (para pagination dots).
 * @property isOpen - Controla a visibilidade do modal.
 * @property onSelect - Chamado ao seleccionar um card.
 * @property onSelectCategory - Chamado ao seleccionar uma categoria (variante 2).
 * @property onBack - Chamado ao clicar no botão "Back".
 * @property onContinue - Chamado ao clicar no botão "Continue".
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalGridSelectionProps = {
	variant?: 1 | 2;
	title: string;
	subtitle?: string;
	categories?: ModelGridCategory[];
	selectedCategory?: ModelGridCategory | null;
	cards: ModelGridCardProps[];
	selectedCard?: ModelGridCardProps | null;
	selectedCards?: ModelGridCardProps[];
	multiple?: boolean;
	totalSteps?: number;
	currentStep?: number;
	isOpen?: boolean;
	onSelect?: (card: ModelGridCardProps) => void;
	onSelectCategory?: (category: ModelGridCategory) => void;
	onBack?: () => void;
	onContinue?: () => void;
	class?: string;
};
