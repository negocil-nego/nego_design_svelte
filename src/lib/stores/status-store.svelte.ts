/**
 * Tipo de status do modal.
 */
export type ModalStatusType = "ERROR" | "SUCCESS";

/**
 * Detalhes do problema no formato RFC 7807 (Problem Details).
 */
export type ProblemDetails = {
	/** Mensagem descritiva do erro. */
	detail?: string;
	/** URI que indica a ocorrência do erro. */
	instance?: string;
	/** Código HTTP do erro. */
	status?: number;
	/** Título legível do erro. */
	title?: string;
};

/**
 * Configuração opcional do modal de status.
 */
export type StatusStoreConfig = {
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
};

/**
 * Estado do store de status. Quando `open` é `true`, o ModalStatus (montado no
 * NegoDesign) abre em qualquer parte da aplicação.
 */
export type StatusStore = StatusStoreConfig & {
	/** Controla a visibilidade do modal de status. Padrão: false. */
	open: boolean;
};

/** Store global do modal de status. Escute `statusStore.open` para controlar a visibilidade. */
export const statusStore: StatusStore = $state({ open: false });

function resetDefaults() {
	statusStore.title = undefined;
	statusStore.subtitle = undefined;
	statusStore.status = undefined;
	statusStore.data = undefined;
	statusStore.onClose = undefined;
}

/**
 * Abre o modal de status em toda a aplicação.
 * @param config - Configuração opcional (título, subtítulo, status, data, callbacks).
 * @example
 * openStatus({ status: "ERROR", data: { detail: "Failed to send OTP", status: 403, title: "Proibido" } });
 * openStatus({ status: "SUCCESS", data: "Operação concluída com sucesso" });
 */
export function openStatus(config: StatusStoreConfig = {}) {
	resetDefaults();
	Object.assign(statusStore, config, { open: true });
}

/** Fecha o modal de status global. */
export function closeStatus() {
	statusStore.open = false;
}
