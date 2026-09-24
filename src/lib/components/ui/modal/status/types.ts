import type { ModalStatusType, ProblemDetails } from "$lib/stores";

/**
 * Props do componente ModalStatus — modal de status global.
 */
export type ModalStatusProps = {
	/** Título exibido no cabeçalho do modal. */
	title?: string;
	/** Subtítulo exibido abaixo do título. */
	subtitle?: string;
	/** Tipo de status (ERROR ou SUCCESS). */
	status?: ModalStatusType;
	/** Detalhes do problema (formato RFC 7807, string ou Error nativo). */
	data?: ProblemDetails | string | Error;
	/** Chamado quando o modal é fechado. */
	onClose?: () => void;
	/** Classe CSS extra no container do modal. */
	class?: string;
};
