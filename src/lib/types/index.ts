import type {
    LoginVariant,
    LoginRequestDto,
    LinkProps,
    PageLoginProps
} from "../components/pages/security/login/types";

import type {
    ForgetPasswordVariant,
    ForgetPasswordRequestDto,
    PageForgetPasswordProps
} from "../components/pages/security/forget-password/types";

import type {
    ResetPasswordRequestDto,
    PageResetPasswordProps
} from "../components/pages/security/reset-password/types";

import type {
    OtpVerificationRequestDto,
    PageOtpVerificationProps
} from "../components/pages/security/otp-verification/types";
import type { NavMenuLinksProps } from "$lib/components/core/nav/data/nav-menu";

export type {
    /** @see NavMenuLinksProps */
    NavMenuLinksProps,

    /**  Dados necessários para autenticação de um utilizador. @see LoginRequestDto */
    LoginRequestDto,
    /** Tipo de formulário de login. @see AuthFormType */
    LoginVariant,
    /** Configuração de link externo. @see LinkProps */
    LinkProps,
    /** Props do componente PageLogin. @see PageLoginProps */
    PageLoginProps,
    /** Variante do formulário de recuperação de senha. @see ForgetPasswordVariant */
    ForgetPasswordVariant,
    /** Dados necessários para recuperação de senha. @see ForgetPasswordRequestDto */
    ForgetPasswordRequestDto,
    /** Props do componente PageForgetPassword. @see PageForgetPasswordProps */
    PageForgetPasswordProps,
    /** Dados necessários para redefinição de senha. @see ResetPasswordRequestDto */
    ResetPasswordRequestDto,
    /** Props do componente PageResetPassword. @see PageResetPasswordProps */
    PageResetPasswordProps,
    /** Dados necessários para verificação OTP. @see OtpVerificationRequestDto */
    OtpVerificationRequestDto,
    /** Props do componente PageOtpVerification. @see PageOtpVerificationProps */
    PageOtpVerificationProps
}
