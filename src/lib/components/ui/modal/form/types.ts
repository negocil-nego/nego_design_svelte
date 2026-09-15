import type { FormInputConfig } from "$lib/components/ui/form/types";

export type { FormInputConfig, FormOption, FormProps } from "$lib/components/ui/form/types";

/**
 * Props do componente ModalForm — formulário dentro de um modal.
 * Reutiliza o componente Form com a mesma API de inputs, adicionando
 * overlay, título, subtítulo e botões de navegação do modal.
 *
 * @property title - Título principal do modal.
 * @property subtitle - Subtítulo/descrição abaixo do título.
 * @property inputs - Array de configurações dos inputs do formulário.
 * @property isOpen - Controla a visibilidade do modal (bindable).
 * @property submitText - Texto do botão de submissão.
 * @property submitLoadingText - Texto durante carregamento.
 * @property cancelText - Texto do botão cancelar.
 * @property isLoading - Estado de carregamento.
 * @property showCancel - Exibe o botão cancelar.
 * @property columns - Número de colunas da grid (padrão: 2).
 * @property onSubmit - Callback ao submeter o formulário.
 * @property onCancel - Chamado ao clicar no botão cancelar ou fechar.
 * @property onClose - Chamado ao fechar o modal.
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalFormProps = {
	title: string;
	subtitle?: string;
	inputs: FormInputConfig[];
	isOpen?: boolean;
	submitText?: string;
	submitLoadingText?: string;
	cancelText?: string;
	isLoading?: boolean;
	showCancel?: boolean;
	columns?: 1 | 2;
	onSubmit?: (data: Record<string, string | string[] | boolean>) => void;
	onCancel?: () => void;
	onClose?: () => void;
	class?: string;
};

export type ModalFormEmailOrPhoneType = "EMAIL" | "PHONE" | "EMAIL_OR_PHONE";

export type ModalFormEmailOrPhoneSubmitData = {
	type: ModalFormEmailOrPhoneType;
	value: string;
	email?: string;
	phone?: string;
};

/**
 * Props do componente ModalFormEmailOrPhone — formulário em modal para envio de OTP por email ou telefone.
 *
 * @property title - Título principal do modal.
 * @property subtitle - Subtítulo/descrição do modal.
 * @property email - Email pré-existente (opcional).
 * @property phone - Telefone pré-existente (opcional).
 * @property isOpen - Controla a visibilidade do modal (bindable).
 * @property submitText - Texto do botão de submissão.
 * @property submitLoadingText - Texto durante carregamento.
 * @property cancelText - Texto do botão cancelar.
 * @property isLoading - Estado de carregamento.
 * @property showCancel - Exibe o botão cancelar.
 * @property onSubmit - Callback ao submeter o formulário com o canal e valor escolhido.
 * @property onCancel - Chamado ao cancelar.
 * @property onClose - Chamado ao fechar o modal.
 * @property class - Classe CSS extra no container do modal.
 */
export type ModalFormEmailOrPhoneProps = {
	title?: string;
	subtitle?: string;
	email?: string;
	phone?: string;
	isOpen?: boolean;
	submitText?: string;
	submitLoadingText?: string;
	cancelText?: string;
	isLoading?: boolean;
	showCancel?: boolean;
	onSubmit?: (data: ModalFormEmailOrPhoneSubmitData) => void;
	onCancel?: () => void;
	onClose?: () => void;
	class?: string;
};

