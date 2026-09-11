/**
 * Estado de um ficheiro no upload.
 * @property uploading - A subir.
 * @property completed - Subida concluída.
 * @property failed - Falhou o upload.
 */
export type UploadFileStatus = "uploading" | "completed" | "failed";

/**
 * Modelo de dados para um ficheiro no modal de upload.
 * @property id - Identificador único do ficheiro.
 * @property name - Nome do ficheiro.
 * @property size - Tamanho do ficheiro em bytes.
 * @property date - Data de upload.
 * @property progress - Percentagem de progresso (0-100).
 * @property status - Estado do upload.
 * @property type - Tipo MIME do ficheiro.
 */
export type UploadFile = {
	id: string;
	name: string;
	size: number;
	date?: string;
	progress?: number;
	status?: UploadFileStatus;
	type?: string;
};

/**
 * Props do componente ModalUpload — modal de upload de ficheiros.
 * Suporta drag and drop, lista de ficheiros com progress bar e estados.
 *
 * @property title - Título do modal (default: "Upload File").
 * @property accept - Tipos MIME aceites (ex: ".csv,.xlsx,.xls").
 * @property acceptedFormats - Texto com formatos aceites.
 * @property downloadText - Texto do link de download.
 * @property downloadLabel - Label do link de download.
 * @property dragText - Texto principal da área de drag.
 * @property browseText - Texto do link "Browse".
 * @property cancelText - Texto do botão cancelar.
 * @property uploadText - Texto do botão upload.
 * @property uploadLoadingText - Texto durante upload.
 * @property files - Lista de ficheiros (bindable).
 * @property isOpen - Controla a visibilidade do modal (bindable).
 * @property multiple - Permite selecionar múltiplos ficheiros.
 * @property maxSize - Tamanho máximo por ficheiro em bytes.
 * @property isLoading - Estado de carregamento do botão upload.
 * @property onFilesSelected - Chamado ao selecionar ficheiros.
 * @property onUpload - Chamado ao clicar no botão Upload.
 * @property onCancel - Chamado ao clicar no Cancel.
 * @property onRemoveFile - Chamado ao remover um ficheiro.
 * @property onRetryFile - Chamado ao repetir um ficheiro com falha.
 * @property onDownload - Chamado ao clicar no link de download.
 * @property onClose - Chamado ao fechar o modal.
 * @property class - Classe CSS extra no container.
 */
export type ModalUploadProps = {
	title?: string;
	accept?: string;
	acceptedFormats?: string;
	downloadText?: string;
	downloadLabel?: string;
	dragText?: string;
	browseText?: string;
	cancelText?: string;
	uploadText?: string;
	uploadLoadingText?: string;
	files?: UploadFile[];
	isOpen?: boolean;
	multiple?: boolean;
	maxSize?: number;
	isLoading?: boolean;
	onFilesSelected?: (files: File[]) => void;
	onUpload?: (files: UploadFile[]) => void;
	onCancel?: () => void;
	onRemoveFile?: (id: string) => void;
	onRetryFile?: (id: string) => void;
	onDownload?: () => void;
	onClose?: () => void;
	class?: string;
};
