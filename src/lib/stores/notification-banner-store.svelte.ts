import { getCountdownLabel, getIsBannerSuppressed } from "./banner-store.svelte";
import { loginStore } from "./login-store.svelte";
import { otpStore } from "./otp-store.svelte";

/** Re-exporta os helpers de supressão do banner base. */
export {
	suppressBanner,
	releaseBanner,
	setBannerSuppressed,
} from "./banner-store.svelte";

/** Tipo de banner de autenticação a apresentar. */
export type AuthBannerKind = "login" | "otp" | null;

/**
 * Store do NotificationBanner de autenticação. Escuta o `otpStore` e o
 * `loginStore`: quando `isOpenBanner` é `true` (e o respetivo modal não está
 * aberto e o banner não está suprimido), apresenta o banner com o botão
 * para abrir o ModalOtp ou o ModalLogin.
 */
export function getAuthBannerKind(): AuthBannerKind {
	if (getIsBannerSuppressed()) return null;
	if (otpStore.isOpenBanner && !otpStore.open) return "otp";
	if (loginStore.isOpenBanner && !loginStore.open) return "login";
	return null;
}

/** Indica se o NotificationBanner de autenticação deve aparecer. */
export function getAuthBannerVisible(): boolean {
	return getAuthBannerKind() !== null;
}

/** Texto em destaque exibido antes do separador do banner. */
export function getAuthBannerStrongText(): string | null {
	return getAuthBannerKind() === "otp" ? "OTP" : null;
}

/** Descrição do banner. Para OTP inclui o countdown do tempo restante. */
export function getAuthBannerDescription(): string {
	if (getAuthBannerKind() === "otp") {
		return `O código de verificação expira em ${getCountdownLabel()}.`;
	}
	return "Inicie sessão para continuar.";
}

/** Texto do botão CTA do banner. */
export function getAuthBannerCtaText(): string {
	return getAuthBannerKind() === "otp" ? "Abrir verificação" : "Iniciar sessão";
}

/**
 * Abre o modal correspondente ao banner apresentado
 * (ModalOtp quando o banner é de OTP, ModalLogin quando é de login).
 */
export function authBannerAction() {
	const kind = getAuthBannerKind();
	if (kind === "otp") otpStore.open = true;
	else if (kind === "login") loginStore.open = true;
}

/** Dispensa o banner (desativa o `isOpenBanner` do store de origem). */
export function authBannerDismiss() {
	const kind = getAuthBannerKind();
	if (kind === "otp") otpStore.isOpenBanner = false;
	else if (kind === "login") loginStore.isOpenBanner = false;
}