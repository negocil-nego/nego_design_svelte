import InputPasswordConfirm from "./components/core/form/ui/input-password-confirm.svelte";
import InputEmailOrPhone from "./components/core/form/ui/input-email-or-phone.svelte";
import InputUsername from "./components/core/form/ui/input-username.svelte";
import InputPassword from "./components/core/form/ui/input-password.svelte";
import InputCodeOtp from "./components/core/form/ui/input-code-otp.svelte";
import InputPhone from "./components/core/form/ui/input-phone.svelte";
import InputEmail from "./components/core/form/ui/input-email.svelte";
import DataTableCore from "./components/core/datatable/ui/DataTableCore.svelte";
import MenuBarSidebar from "./components/core/sidebar/MenuBarSidebar.svelte";
import AdminContent from "./components/pages/admin/01/ui/AdminContent.svelte";
import AdminPanel from "./components/pages/admin/01/ui/AdminPanel.svelte";
import PrivacyPolicyOrTermsOfUse from "./components/pages/privacy-policy-or-terms-of-use/PrivacyPolicyOrTermsOfUse.svelte";
import PageOtpVerification from "./components/pages/security/otp-verification/PageOtpVerification.svelte";
import PageForgetPassword from "./components/pages/security/forget-password/PageForgetPassword.svelte";
import PageResetPassword from "./components/pages/security/reset-password/PageResetPassword.svelte";
import PageLogin from "./components/pages/security/login/PageLogin.svelte";
import SearchInput from "$lib/components/core/search/SearchInput.svelte";
import NavMenu from "./components/core/nav/ui/nav-menu.svelte";
import NegoDesign from "./components/NegoDesign.svelte";

/** Store reativa do idioma atual. Altere com `$locale = "pt"`. */
export { locale } from "./i18n";
/** Lista de idiomas disponíveis. Atualizado automaticamente. */
export { locales } from "./i18n";
/** Função de tradução reativa. Use `$t("chave")` nos templates. */
export { t } from "./i18n";
/** Retorna as traduções mescladas (base + customizadas). */
export { getMergedTranslations } from "./i18n/config";
/** Retorna a lista de idiomas disponíveis. */
export { getLocales } from "./i18n/config";


export {
    /** Componente raiz do Negodesign. Configura o tema, idioma e traduções. @property {Record<string, Record<string, string>>} translations - Traduções customizadas @property {Snippet} children - Conteúdo da aplicação */
    NegoDesign,

    NavMenu,

    SearchInput,

    /** Página de login com carousel hero e card de autenticação. @see PageLoginProps */
    PageLogin,

    /** Página de recuperação de senha com carousel hero e card de recuperação. @see PageForgetPasswordProps */
    PageForgetPassword,

    /** Página de redefinição de senha com carousel hero e card de redefinição. @see PageResetPasswordProps */
    PageResetPassword,

    /** Página de redefinição de senha com carousel hero e card de redefinição. @see PrivacyPolicyOrTermsOfUseProps */
    PrivacyPolicyOrTermsOfUse,

    /** Página de verificação OTP com carousel hero e card de verificação. @see PageOtpVerificationProps */
    PageOtpVerification,

    /** Tabela de dados genérica com paginação, ordenação e filtros. @see DataTableItem */

    DataTableCore,
    /** Sidebar de navegação com menus, usuário e botões. @see MenuBarSidebar */
    MenuBarSidebar,

    /** Layout de admin com sidebar, header e conteúdo. @property {Snippet} appsidebar - Sidebar da aplicação @property {Snippet} content - Conteúdo principal @property {Snippet} breadcrumb - Navegação breadcrumb */
    AdminPanel,
    /** Wrapper de conteúdo para páginas admin. @property {Snippet} children - Conteúdo interno */
    AdminContent,

    /** Campo de input para email. @property {string} value - Valor vinculado @property {string} label - Rótulo personalizado */
    InputEmail,
    /** Campo de input para telefone. @property {string} value - Valor vinculado @property {string} label - Rótulo personalizado */
    InputPhone,
    /** Campo de input para email ou telefone. @property {string} value - Valor vinculado @property {string} label - Rótulo personalizado */
    InputEmailOrPhone,
    /** Campo de input para código OTP. @property {number} length - Quantidade de caixas @property {boolean} separator - Exibir separador */
    InputCodeOtp,
    /** Campo de input para senha. @property {string} value - Valor vinculado @property {string} label - Rótulo personalizado */
    InputPassword,
    /** Campo de input para nome de usuário. @property {string} value - Valor vinculado @property {string} label - Rótulo personalizado */
    InputUsername,
    /** Campo de input para confirmação de senha. @property {string} value - Valor vinculado @property {string} label - Rótulo personalizado */
    InputPasswordConfirm
}
