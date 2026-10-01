export interface VisibilityOptions {
	/** Elemento raiz para o viewport de observação (padrão: null / viewport do navegador) */
	root?: Element | Document | null;
	/** Margem aplicada ao root (ex: "0px", "100px 0px") */
	rootMargin?: string;
	/** Limite de visibilidade (número de 0 a 1 ou array) */
	threshold?: number | number[];
	/** Valor inicial de visibilidade antes do primeiro cálculo */
	initialValue?: boolean;
	/** Se true, desconecta o observador assim que o elemento fica visível pela primeira vez */
	once?: boolean;
	/** Callback disparado quando o estado de visibilidade muda */
	onChange?: (isVisible: boolean, entry: IntersectionObserverEntry) => void;
	/** Callback disparado quando o elemento entra no viewport */
	onEnter?: (entry: IntersectionObserverEntry) => void;
	/** Callback disparado quando o elemento sai do viewport */
	onLeave?: (entry: IntersectionObserverEntry) => void;
}

/**
 * Hook reativo do Svelte 5 para monitorar se um elemento está visível ou saiu da tela.
 * Utiliza a API nativa IntersectionObserver com suporte a thresholds, margens e callbacks.
 */
export function useVisibility(
	options: VisibilityOptions | (() => VisibilityOptions) = {}
) {
	const getOptions = () => (typeof options === "function" ? options() : options);
	let isVisible = $state(getOptions().initialValue ?? true);
	let entry = $state<IntersectionObserverEntry | null>(null);
	let target = $state<HTMLElement | null>(null);

	$effect(() => {
		if (!target || typeof IntersectionObserver === "undefined") return;

		const opts = getOptions();

		const observer = new IntersectionObserver(
			([e]) => {
				entry = e;
				const visible = e.isIntersecting;
				isVisible = visible;
				opts.onChange?.(visible, e);

				if (visible) {
					opts.onEnter?.(e);
					if (opts.once) {
						observer.disconnect();
					}
				} else {
					opts.onLeave?.(e);
				}
			},
			{
				root: opts.root,
				rootMargin: opts.rootMargin,
				threshold: opts.threshold ?? 0,
			}
		);

		observer.observe(target);

		return () => {
			observer.disconnect();
		};
	});

	/** Svelte action para vincular um elemento com `use:observe` */
	function observe(node: HTMLElement) {
		target = node;
		return {
			destroy() {
				if (target === node) {
					target = null;
				}
			},
		};
	}

	return {
		get isVisible() {
			return isVisible;
		},
		get isInView() {
			return isVisible;
		},
		get isOutOfView() {
			return !isVisible;
		},
		get entry() {
			return entry;
		},
		get target() {
			return target;
		},
		set target(el: HTMLElement | null) {
			target = el;
		},
		observe,
	};
}

/** Alias para useVisibility */
export const useInView = useVisibility;
export const useIntersectionObserver = useVisibility;
