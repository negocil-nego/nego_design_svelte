/**
 * Estado de supressão/visibilidade do banner. Base partilhada usada pelos
 * restantes stores (otp e login).
 */
export const banner = $state({
	/** Contador de supressões. Quando > 0, o banner não aparece na página atual. */
	suppressed: 0,
});

/** Estado do countdown genérico (usado para o tempo restante do OTP). */
export const countdown = $state({
	/** Tempo total em segundos. */
	total: 0,
	/** Tempo restante em segundos. */
	remaining: 0,
	/** Indica se o countdown está em execução. */
	running: false,
});

/**
 * Rótulo formatado do tempo restante (mm:ss).
 * @example "04:32"
 */
export const countdownLabel = $derived.by(() => {
	const minutes = Math.floor(countdown.remaining / 60);
	const seconds = countdown.remaining % 60;
	return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});

export const isBannerSuppressed = $derived(banner.suppressed > 0);

let timer: ReturnType<typeof setInterval> | undefined;
let expired: (() => void) | undefined;

/**
 * Inicia um countdown de `totalSeconds` segundos.
 * Quando chega a zero, o countdown para e `onEnd` é chamado.
 */
export function startCountdown(totalSeconds: number, onEnd?: () => void) {
	stopCountdown();
	countdown.total = Math.max(0, totalSeconds);
	countdown.remaining = countdown.total;
	countdown.running = true;
	expired = onEnd;
	timer = setInterval(() => {
		countdown.remaining -= 1;
		if (countdown.remaining <= 0) {
			stopCountdown();
			expired?.();
		}
	}, 1000);
}

/** Para e repõe o countdown. */
export function stopCountdown() {
	if (timer) clearInterval(timer);
	timer = undefined;
	expired = undefined;
	countdown.total = 0;
	countdown.remaining = 0;
	countdown.running = false;
}

/**
 * Suprime o banner na página atual. Enquanto houver pelo menos uma supressão
 * ativa, o banner não aparece. Use `releaseBanner()` (ex: em onDestroy) para
 * voltar a apresentar o banner ao mudar de página.
 */
export function suppressBanner() {
	banner.suppressed += 1;
}

/** Liberta uma supressão do banner (inverso de `suppressBanner`). */
export function releaseBanner() {
	banner.suppressed = Math.max(0, banner.suppressed - 1);
}

/**
 * Define diretamente se o banner deve (ou não) estar suprimido na página atual.
 * @param suppressed - `true` esconde o banner na página atual;
 * `false` volta a apresentá-lo (ex: ao mudar de página).
 */
export function setBannerSuppressed(suppressed: boolean) {
	banner.suppressed = suppressed ? banner.suppressed + 1 : Math.max(0, banner.suppressed - 1);
}