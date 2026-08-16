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
import AdCardBanner from "$lib/components/core/banner/AdCardBanner.svelte";
import CtaCardBanner from "$lib/components/core/banner/CtaCardBanner.svelte";
import NotificationBanner from "$lib/components/core/banner/NotificationBanner.svelte";

import PrivacyPolicyOrTermsOfUse from "./components/pages/privacy-policy-or-terms-of-use/PrivacyPolicyOrTermsOfUse.svelte";
import ProductDetails from "./components/pages/product-details/ProductDetails.svelte";
import ProfileUser from "./components/pages/profile-user/ProfileUser.svelte";
import PageOtpVerification from "./components/pages/security/otp-verification/PageOtpVerification.svelte";
import PageForgetPassword from "./components/pages/security/forget-password/PageForgetPassword.svelte";
import PageResetPassword from "./components/pages/security/reset-password/PageResetPassword.svelte";
import TabUnderline from "$lib/components/core/tabs/ui/tab-underline.svelte";
import CarouselGridPromotion from "$lib/components/core/carousel/grid/promotion/ui/CarouselGridPromotion.svelte";
import CarouselGridProduct from "$lib/components/core/carousel/grid/product/ui/CarouselGridProduct.svelte";
import CarouselGridProfile from "$lib/components/core/carousel/grid/profile/ui/CarouselGridProfile.svelte";
import CarouselHighlights from "$lib/components/core/carousel/highlights/ui/CarouselHighlights.svelte";
import CarouselGridMedia from "$lib/components/core/carousel/grid/media/ui/CarouselGridMedia.svelte";
import CarouselPromotion from "$lib/components/core/carousel/promotion/ui/CarouselPromotion.svelte";
import CarouselBadge from "$lib/components/core/carousel/badge/ui/CarouselBadge.svelte";
import CarouselHero from "$lib/components/core/carousel/hero/CarouselHero.svelte";
import PageLogin from "./components/pages/security/login/PageLogin.svelte";
import SearchInput from "$lib/components/core/search/SearchInput.svelte";
import NavMenu from "./components/core/nav/ui/nav-menu.svelte";
import NegoDesign from "./components/NegoDesign.svelte";
import Footer from "$lib/components/core/footer/ui/Footer.svelte";

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
    /**
     * Componente raiz do Negodesign.
     * Configura o tema, idioma e traduções da aplicação.
     * @property {Record<string, Record<string, string>>} translations - Traduções customizadas
     * @property {Snippet} children - Conteúdo da aplicação
     */
    NegoDesign,

    /**
     * Barra de navegação principal com logo, links, ações (login/registo),
     * language switcher e light switch integrados.
     * @see NavMenuProps
     */
    NavMenu,

    /**
     * Banner de anúncio com faixa lateral colorida, título destacado e botão CTA.
     * Ideal para publicidade, chamadas de atenção ou ofertas especiais.
     * @see AdCardBannerProps
     */
    AdCardBanner,

    /**
     * Banner CTA "Vamos entrar em contacto" com título bold, descrição de apoio
     * e até 2 botões em formato de pílula com decoração de anéis concêntricos.
     * @see CtaCardBannerProps
     */
    CtaCardBanner,

    /**
     * Banner de notificação com texto em destaque, descrição, CTA e botão dismiss.
     * Usado para comunicar novidades, promoções ou mensagens importantes.
     * @see NotificationBannerProps
     */
    NotificationBanner,

    /**
     * Campo de input de busca com 2 variantes visuais (borda completa ou underline).
     * Inclui botão de submissão e callback onSubmit.
     * @see SearchInputProps
     */
    SearchInput,

    /**
     * Carousel de badges/categorias com orientação horizontal ou vertical.
     * Cada item pode ter ícone, imagem, label e callback de clique.
     * @see CarouselBadgeProps
     */
    CarouselBadge,

    /**
     * Carousel hero em fullscreen com slides de imagem, título, descrição
     * e menu de navegação sobreposto. Ideal para páginas de login.
     * @see CarouselHeroProps
     */
    CarouselHero,

    /**
     * Rodapé completo com múltiplas colunas de links, logo, ícones de redes sociais
     * e formulário de newsletter opcional.
     * @see FooterProps
     */
    Footer,

    /**
     * Carousel de cards de promoção com preços antigo/novo, botão de comprar,
     * favoritar e adicionar ao carrinho.
     * @see CarouselPromotionProps
     */
    CarouselPromotion,

    /**
     * Carousel de cards de destaque para organizações, serviços ou locais em evidência.
     * Suporta duas variantes visuais.
     * @see CarouselHighlightsProps
     */
    CarouselHighlights,

    /**
     * Layout em grid responsivo de cards de mídia (imagens ou vídeos).
     * Em telas mobile transforma-se num carousel com swipe.
     * @see CarouselMediaProps
     */
    CarouselGridMedia,

    /**
     * Layout em grid responsivo de cards de perfil (guias, intérpretes, organizações).
     * Em telas mobile transforma-se num carousel com swipe.
     * @see CarouselProfileProps
     */
    CarouselGridProfile,

    /**
     * Layout em grid responsivo de cards de produto (imagens ou vídeos).
     * Em telas mobile transforma-se num carousel com swipe.
     * @see CarouselProductProps
     */
    CarouselGridProduct,

    /**
    * Layout em grid responsivo de cards de produto in promotion (imagens ou vídeos).
     * Em telas mobile transforma-se num carousel com swipe.
     * @see CarouselGridPromotion
     */
    CarouselGridPromotion,

    /**
     * Componente de abas com estilo underline. Troca o conteúdo (Snippet)
     * conforme a aba selecionada.
     * @see TabUnderlineProps
     */
    TabUnderline,

    /**
     * Página de login completa com carousel hero ao fundo e card de autenticação
     * com múltiplas variantes (email, username, telefone) e formulário de registo.
     * @see PageLoginProps
     */
    PageLogin,

    /**
     * Página de recuperação de senha com hero carousel e card de solicitação
     * de link de recuperação por email.
     * @see PageForgetPasswordProps
     */
    PageForgetPassword,

    /**
     * Página de redefinição de senha com hero carousel e card para introduzir
     * e confirmar a nova palavra-passe.
     * @see PageResetPasswordProps
     */
    PageResetPassword,

    /**
     * Página de política de privacidade ou termos de utilização com sidebar,
     * tabela de conteúdos e blocos de conteúdo navegáveis.
     * @see PrivacyPolicyOrTermsOfUseProps
     */
    PrivacyPolicyOrTermsOfUse,

    /**
     * Página de detalhes do produto com 4 variantes de layout, galeria de imagens,
     * avaliações, mapa, ficheiros, tabs e painel de compra.
     * @see ProductDetailsProps
     */
    ProductDetails,

    /**
     * Página de perfil de utilizador com 3 variantes de layout.
     * Inclui informação básica, alterar senha, preferências e experiência.
     * - varient=1: Header colorido com dados admin, tabs e painel de detalhes.
     * - varient=2: Banner com avatar sobreposto, formulário alterar senha (Security).
     * - varient=3: Header roxo com tabs de experiência e timeline.
     * @see ProfileUserProps
     */
    ProfileUser,

    /**
     * Página de verificação OTP com hero carousel e card de input de código
     * de 6 dígitos para validação de login ou recuperação.
     * @see PageOtpVerificationProps
     */
    PageOtpVerification,

    /**
     * Tabela de dados genérica construída sobre o TanStack Table.
     * Inclui paginação, ordenação, filtros, badges, coluna de seleção,
     * drag handle e ações personalizadas por linha.
     * @template T Tipo genérico dos itens/linhas
     * @see DataTableCoreProps
     */
    DataTableCore,

    /**
     * Sidebar de navegação administrativa com menu colapsável, cabeçalho customizável,
     * lista de menus/submenus, botões do rodapé e bloco de utilizador logado.
     * @see MenuBarSidebarProps
     */
    MenuBarSidebar,

    /**
     * Layout principal da área administrativa. Composto por provider de sidebar,
     * header com trigger da sidebar, breadcrumb, language switcher, light switch
     * e área de conteúdo principal.
     * @property {Snippet} appsidebar - Snippet com a sidebar da aplicação
     * @property {Snippet} content - Snippet com o conteúdo principal
     * @property {Snippet} breadcrumb - Snippet com a navegação breadcrumb
     */
    AdminPanel,

    /**
     * Wrapper de conteúdo para páginas administrativas.
     * Aplica padding, layout flex colunar e gaps consistentes entre secções.
     * @property {Snippet} children - Snippet com o conteúdo interno da página
     */
    AdminContent,

    /**
     * Campo de input para email com validação, ícone e label integrados.
     * Suporta two-way binding via prop `value`.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     */
    InputEmail,

    /**
     * Campo de input para número de telefone com seletor de país (código + bandeira)
     * e validação do formato.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     */
    InputPhone,

    /**
     * Campo de input híbrido que aceita tanto email como número de telefone.
     * Detecta automaticamente o tipo com base no valor introduzido.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     */
    InputEmailOrPhone,

    /**
     * Campo de input para código OTP (One-Time Password) com N caixas de dígitos separadas.
     * Suporta separador visual entre grupos de dígitos.
     * @property {number} length - Quantidade de caixas de dígitos (padrão: 6)
     * @property {boolean} separator - Exibir separador visual entre grupos
     */
    InputCodeOtp,

    /**
     * Campo de input para senha com toggle de visibilidade (ícone de olho).
     * Suporta two-way binding e validações customizadas.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     */
    InputPassword,

    /**
     * Campo de input para nome de utilizador com ícone e label integrados.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     */
    InputUsername,

    /**
     * Campo de input para confirmação de senha. Integra-se com InputPassword
     * para validar correspondência entre os dois campos.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     */
    InputPasswordConfirm
}
