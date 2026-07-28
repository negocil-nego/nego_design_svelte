import type { LoginVariant, LoginRequestDto, LinkProps, PageLoginProps } from "../components/pages/login/types";
import type { ForgetPasswordRequestDto, PageForgetPasswordProps } from "../components/pages/forget-password/types";
export type { 
/**  Dados necessários para autenticação de um utilizador. @see LoginRequestDto */
LoginRequestDto, 
/** Tipo de formulário de login. @see AuthFormType */
LoginVariant, 
/** Configuração de link externo. @see LinkProps */
LinkProps, 
/** Props do componente PageLogin. @see PageLoginProps */
PageLoginProps, 
/** Dados necessários para recuperação de senha. @see ForgetPasswordRequestDto */
ForgetPasswordRequestDto, 
/** Props do componente PageForgetPassword. @see PageForgetPasswordProps */
PageForgetPasswordProps };
