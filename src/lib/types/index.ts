import type {
    LoginVariant,
    LoginRequestDto,
    LinkProps,
    PageLoginProps
} from "../components/pages/login/types";

import type {
    ForgetPasswordVariant,
    ForgetPasswordRequestDto,
    PageForgetPasswordProps
} from "../components/pages/forget-password/types";

import type {
    ResetPasswordRequestDto,
    PageResetPasswordProps
} from "../components/pages/reset-password/types";

import type {
    OtpVerificationRequestDto,
    PageOtpVerificationProps
} from "../components/pages/otp-verification/types";

export type {
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
