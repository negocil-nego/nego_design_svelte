/**
 * Props do componente ModalMap — modal de seleção de localização com mapa.
 * Sexta variação do sistema de modais do NegoDesign.
 * @property title - Título do popup de localização (ex: "Location").
 * @property searchPlaceholder - Texto placeholder da barra de pesquisa.
 * @property address - Endereço actual.
 * @property addressLabel - Label do campo de endereço (ex: "Address").
 * @property description - Descrição/notas da localização.
 * @property descriptionLabel - Label do campo de descrição (ex: "Description").
 * @property editButtonText - Texto do botão "Edit" do endereço.
 * @property useLocationText - Texto da checkbox de usar localização actual.
 * @property useLocationChecked - Estado da checkbox.
 * @property cancelText - Texto do botão cancelar.
 * @property applyText - Texto do botão aplicar.
 * @property isLoading - Estado de carregamento.
 * @property isOpen - Controla a visibilidade do modal.
 * @property onSearch - Chamado ao pesquisar um endereço.
 * @property onEdit - Chamado ao clicar no botão Edit.
 * @property onApply - Chamado ao clicar no botão Apply.
 * @property onCancel - Chamado ao clicar no botão Cancel.
 * @property onToggleLocation - Chamado ao alterar a checkbox.
 * @property onClose - Chamado ao fechar o modal.
 * @property mapSlot - Snippet personalizado para o conteúdo do mapa.
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalMapProps = {
	title?: string;
	searchPlaceholder?: string;
	address?: string;
	addressLabel?: string;
	description?: string;
	descriptionLabel?: string;
	editButtonText?: string;
	useLocationText?: string;
	useLocationChecked?: boolean;
	cancelText?: string;
	applyText?: string;
	isLoading?: boolean;
	isOpen?: boolean;
	onSearch?: (query: string) => void;
	onEdit?: () => void;
	onApply?: (address: string, description: string) => void;
	onCancel?: () => void;
	onToggleLocation?: (checked: boolean) => void;
	onClose?: () => void;
	mapSlot?: import("svelte").Snippet;
	class?: string;
};
