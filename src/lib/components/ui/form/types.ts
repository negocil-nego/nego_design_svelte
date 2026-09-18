import type { ButtonVariant } from "$lib/components/ui/button";

/**
 * Opção para inputs do tipo select, radio ou checkbox.
 * @property value - Valor identificador da opção.
 * @property label - Texto visível da opção.
 */
export type FormOption = {
	value: string;
	label: string;
};

/**
 * Configuração de um input dentro do Form.
 * Cada item define um campo do formulário com o seu tipo e propriedades.
 *
 * Tipos suportados:
 * - `'text'` | `'email'` | `'password'` | `'date'` | `'phone'` — inputs de texto
 * - `'submit'` — botão de submissão (usa a variante do Button)
 * - `'select'` — dropdown/select com opções
 * - `'date-interval'` — intervalo de datas (calendário duplo, usa `startName`/`endName`)
 * - `'radio'` — grupo de radio buttons
 * - `'checkbox'` — grupo de checkboxes
 * - `'textarea'` — área de texto
 * - `'toggle'` — interruptor on/off
 * - `'badges'` — input de tags/badges com sugestões
 * - `'location'` — botão que obtém a localização atual (geolocalização)
 * - `'otp'` — código de verificação one-time (caixas de dígitos)
 *
 * @property type - Tipo do input.
 * @property name - Nome do campo (usado como chave no objeto de dados).
 * @property value - Valor inicial do campo.
 * @property label - Label/rótulo do campo.
 * @property placeholder - Texto placeholder.
 * @property onChange - Callback ao alterar o valor.
 * @property disabled - Desativa o campo.
 * @property required - Marca como obrigatório.
 * @property fill - Ocupa 2 colunas (true) ou 1 coluna (false/default).
 * @property options - Opções para select, radio ou checkbox.
 * @property multiple - Permite seleção múltipla (apenas select).
 * @property rows - Número de linhas (apenas textarea).
 * @property description - Texto descritivo (apenas toggle).
 * @property suggestions - Sugestões de tags (apenas badges).
 * @property maxTags - Número máximo de tags (apenas badges, 0 = ilimitado).
 * @property latitudeName - Nome do campo que recebe a latitude (apenas location).
 * @property longitudeName - Nome do campo que recebe a longitude (apenas location).
 * @property locationText - Texto do botão de localização (apenas location).
 * @property locationLoadingText - Texto do botão durante a obtenção (apenas location).
 * @property length - Número de caixas do código OTP (apenas otp).
 * @property separator - Separa o código OTP em grupos visualmente (apenas otp).
 * @property loadingText - Texto exibido enquanto carrega (apenas submit).
 * @property variant - Variante do `Button` — default | outline | secondary | ghost | destructive | link (apenas submit).
 * @property min - Data mínima aceite em formato ISO (apenas date).
 * @property max - Data máxima aceite em formato ISO (apenas date).
 * @property startName - Nome do campo que recebe a data inicial (apenas date-interval).
 * @property endName - Nome do campo que recebe a data final (apenas date-interval).
 */
export type FormInputConfig = {
	type:
	| "text"
	| "submit"
	| "email"
	| "password"
	| "date"
	| "date-interval"
	| "phone"
	| "select"
	| "radio"
	| "checkbox"
	| "textarea"
	| "toggle"
	| "badges"
	| "location"
	| "otp";
	name: string;
	value?: string | string[] | boolean;
	label?: string | undefined;
	placeholder?: string;
	onChange?: (value: string | string[] | boolean) => void;
	onClick?: () => void;
	disabled?: boolean;
	required?: boolean;
	fill?: boolean;
	options?: FormOption[];
	multiple?: boolean;
	rows?: number;
	description?: string;
	suggestions?: string[];
	maxTags?: number;
	latitudeName?: string;
	longitudeName?: string;
	locationText?: string;
	locationLoadingText?: string;
	length?: number;
	separator?: boolean;
	loadingText?: string;
	variant?: ButtonVariant;
	min?: string;
	max?: string;
	startName?: string;
	endName?: string;
};

/**
 * Props do componente Form — formulário com grid responsivo de 2 colunas.
 * Organiza os inputs numa grid, onde cada campo pode ocupar 1 ou 2 colunas via `fill`.
 *
 * @property inputs - Array de configurações dos inputs do formulário.
 * @property onSubmit - Callback ao submeter o formulário (objeto com name:value).
 * @property submitText - Texto do botão de submissão.
 * @property submitLoadingText - Texto durante carregamento.
 * @property isLoading - Estado de carregamento.
 * @property columns - Número de colunas da grid (padrão: 2).
 * @property gap - Espaçamento entre os campos.
 * @property submitAlign - Alinhamento do botão de submissão (start: esquerda, end: direita).
 * @property class - Classe CSS extra no container.
 */
export type FormProps = {
	inputs: FormInputConfig[];
	onSubmit?: (data: Record<string, string | string[] | boolean>) => void;
	submitText?: string;
	submitLoadingText?: string;
	isLoading?: boolean;
	isButton?: boolean;
	columns?: 1 | 2;
	gap?: string;
	submitAlign?: "start" | "end";
	class?: string;
};
