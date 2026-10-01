import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { VisibilityOptions } from "$lib/hooks/visibility.svelte.js";

export type VisibilityFallbackPosition =
	| "top"
	| "bottom"
	| "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right"
	| "center"
	| "custom";

export type VisibilityFallbackSlotProps = {
	isVisible: boolean;
	isFixed: boolean;
	fixed: boolean;
};

export type VisibilityFallbackProps = HTMLAttributes<HTMLDivElement> &
	VisibilityOptions & {
		/** Snippet com o conteúdo principal exibido quando visível */
		children?: Snippet<[{ isVisible: boolean }]>;
		/** Snippet de fallback exibido quando o elemento principal sai da tela */
		fallback?: Snippet<[VisibilityFallbackSlotProps]>;
		/** Habilita exibição fixa na tela quando o fallback for ativado */
		fixed?: boolean;
		/** Alias para fixed */
		isFixed?: boolean;
		/** Posição fixa predefinida do container de fallback na viewport */
		fixedPosition?: VisibilityFallbackPosition;
		/** Classes adicionais para quando o fallback estiver no modo fixo */
		fixedClass?: string;
		/** Habilita animações suaves com Animate.css (padrão: true) */
		animate?: boolean;
		/** Classe de animação do Animate.css para o conteúdo principal (padrão: "animate__fadeIn animate__faster") */
		animation?: string;
		/** Classe de animação do Animate.css para o fallback (padrão: "animate__fadeIn animate__faster") */
		fallbackAnimation?: string;
		/** Classe aplicada quando o elemento está visível */
		visibleClass?: string;
		/** Classe aplicada quando o elemento sai da tela */
		hiddenClass?: string;
		/** Classe do container do fallback */
		fallbackClass?: string;
		/** Mantém o espaço ocupado pelo elemento no layout quando o fallback estiver ativo (ideal para menus fixos e heroes para evitar saltos de scroll) */
		preserveSpace?: boolean;
		/** Mantém o children montado no DOM com display:none em vez de desmontar (default: false) */
		keepMounted?: boolean;
		/** Inverte a exibição: exibe fallback quando visível e children quando fora da tela */
		invert?: boolean;
	};


