
import type {
    ProductPromotionDetailsProps
} from "$lib/components/pages/product-details/types";

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

import type {
    NavMenuLinksProps,
    NavMenuLogoProps,
    NavMenuActionsProps,
    SimpleMenuProps
} from "$lib/components/core/nav/data/nav-menu";

import type {
    NavMenuSidebarProps,
    NavMenuAndSubmenuSidebarProps,
    GroupMenuSidebarProps,
    SubMenuSidebarProps,
    NavMenuItem
} from "$lib/components/core/sidebar/data/nav-menu-sidebar";

import type { NavUserSidebarProps } from "$lib/components/core/sidebar/data/nav-user-sidebar";

import type {
    CardMediaProps,
    CardProfileProps,
    CardPromotionProps,
    CardHighlightProps,
    CardTagsProps,
    CardProductProps
} from "$lib/components/core/card/types";

import type { CarouselGridMediaProps } from "$lib/components/core/carousel/grid/media/types";
import type { CarouselGridProfileProps } from "$lib/components/core/carousel/grid/profile/types";
import type { CarouselHighlightsProps } from "$lib/components/core/carousel/highlights/types";
import type { CarouselPromotionProps } from "$lib/components/core/carousel/promotion/types";

import type {
    ItemCarousel,
    CarouselHeaderProps,
    CarouselBadgeProps,
    CarouselHeroItem,
    CarouselHeroProps
} from "$lib/components/core/carousel/types";

import type { CarouselSlotProps } from "$lib/components/core/panel/type";

import type {
    BannerProps,
    AdCardBannerProps,
    CtaCardBannerProps,
    NotificationBannerProps
} from "$lib/components/core/banner/types";

import type {
    TabItem,
    TabProps
} from "$lib/components/core/tabs/data/TabModel";
import type { TabUnderlineProps } from "$lib/components/core/tabs/types";

import type {
    SearchItemProps,
    SearchInputProps
} from "$lib/components/core/search/types";

import type {
    FooterLinkItem,
    FooterSocialItem,
    FooterColumnProps,
    FooterProps
} from "$lib/components/core/footer/types";

import type { MenuBarSidebarProps } from "$lib/components/core/sidebar/types";

import type {
    DataTableItem,
    DataTableCoreProps
} from "$lib/components/core/datatable/data/data-table";

import type {
    AdminPanelProps,
    AdminContentProps
} from "$lib/components/pages/admin/01/ui/types";

import type {
    ProfileUserProps,
    ProfileUserData,
    ProfileUserVariant,
    ProfileUserAddress,
    ProfileUserNote,
    ProfileUserNotificationPref,
    ProfileUserMarketingPref,
    ProfileUserExperience,
} from "$lib/components/pages/profile-user/types";

import type {
    ProductDetailsProps,
    ProductDetailsData,
    ProductDetailsBreadcrumbItem,
    ProductDetailsTag,
    ProductDetailsImage,
    ProductDetailsLocation,
    ProductDetailsReviewProps,
    ProductDetailsTab
} from "$lib/components/pages/product-details/types";

import type {
    PrivacyPolicyOrTermsOfUseProps,
    DocSection,
    ContentBlock,
    BreadcrumbItem,
    TocItem
} from "$lib/components/pages/privacy-policy-or-terms-of-use/types";

import type { InputLabelProps } from "$lib/components/core/form/data/InputLabel.svelte";
import type { NegoDesignProps } from "$lib/components/types";
import type { CarouselGridPromotionProps } from "$lib/components/core/carousel/grid/promotion/types";
import type { CarouselGridProductProps } from "$lib/components/core/carousel/grid/product/types";
import type { CompanyProfileProps } from "$lib/components/pages/company-profile/types";
import type { ComplexMenuProps } from "$lib/components/core/nav/data/types";


export type {
    /** Props de um link individual no menu de navegação. @see NavMenuLinksProps */
    NavMenuLinksProps,
    /** Props do logotipo no NavMenu. @see NavMenuLogoProps */
    NavMenuLogoProps,
    /** Props de um item de ação (botão ou link) no menu de navegação. @see NavMenuActionsProps */
    NavMenuActionsProps,
    /** Props do componente NavMenu — barra de navegação principal. @see SimpleMenuProps */
    SimpleMenuProps,
    /** Props do componente NavMenu — barra de navegação complexa. @see ComplexMenuProps */
    ComplexMenuProps,

    /** Item de menu principal da sidebar. @see NavMenuSidebarProps */
    NavMenuSidebarProps,
    /** Item de menu com submenus aninhados na sidebar. @see NavMenuAndSubmenuSidebarProps */
    NavMenuAndSubmenuSidebarProps,
    /** Grupo/categoria de menus na sidebar. @see GroupMenuSidebarProps */
    GroupMenuSidebarProps,
    /** Submenu de um item principal da sidebar. @see SubMenuSidebarProps */
    SubMenuSidebarProps,
    /** Tipo união para itens da barra lateral (simples ou com submenus). @see NavMenuItem */
    NavMenuItem,

    /** Props do bloco de usuário logado na sidebar. @see NavUserSidebarProps */
    NavUserSidebarProps,

    /** Props da página de perfil da empresa. @see CompanyProfileProps */
    CompanyProfileProps,

    /** Props de uma tag individual usada nos cards (CardMedia, CardProfile, etc). @see CardTagsProps */
    CardTagsProps,
    /** Props do CardMedia — card de mídia com imagem/vídeo, tags, rating. @see CardMediaProps */
    CardMediaProps,
    /** Props do CardProfile — card de perfil de organização/guia. @see CardProfileProps */
    CardProfileProps,
    /** Props do CardPromotion — card de promoção com preço antigo/novo e botão comprar. @see CardPromotionProps */
    CardPromotionProps,
    /** Props do CardHighlight — card de destaque/organização com botão de ação. @see CardHighlightProps */
    CardHighlightProps,
    /** Props do CardProduct — card de produto com preço antigo/novo e botão comprar. @see CardProductProps */
    CardProductProps,

    /** Props do cabeçalho de carousel (título, descrição, botão "Ver tudo"). @see CarouselHeaderProps */
    CarouselHeaderProps,
    /** Props do slot/container de carousel (botões navegação, plugins, bordas). @see CarouselSlotProps */
    CarouselSlotProps,
    /** Item individual do CarouselBadge — categoria/opção com ícone/imagem. @see ItemCarousel */
    ItemCarousel,
    /** Props do CarouselBadge — carousel de badges/categorias com orientação H/V. @see CarouselBadgeProps */
    CarouselBadgeProps,
    /** Item individual do CarouselHero — slide com imagem, título e descrição. @see CarouselHeroItem */
    CarouselHeroItem,
    /** Props do CarouselHero — carousel hero principal com menu sobreposto. @see CarouselHeroProps */
    CarouselHeroProps,

    /** Props do CarouselGridMedia — layout em grid de cards de mídia (img/vídeo). @see CarouselGridMediaProps */
    CarouselGridMediaProps,
    /** Props do CarouselGridProfile — grid de cards de perfil (guias, organizações). @see CarouselGridProfileProps */
    CarouselGridProfileProps,
    /** Props do CarouselHighlights — carousel de cards de destaque/organizações. @see CarouselHighlightsProps */
    CarouselHighlightsProps,
    /** Props do CarouselPromotion — carousel de cards de promoção com preços. @see CarouselPromotionProps */
    CarouselPromotionProps,
    /** Props do CarouselGridPromotion — grid de cards de produto em promoção. @see CarouselGridPromotionProps */
    CarouselGridPromotionProps,
    /** Props do CarouselGridProduct — grid de cards de produto @see CarouselGridProductProps */
    CarouselGridProductProps,

    /** Props base do banner de anúncio (AdCardBanner). @see BannerProps */
    BannerProps,
    /** Alias para BannerProps — props do componente AdCardBanner. @see AdCardBannerProps */
    AdCardBannerProps,
    /** Props do CtaCardBanner — banner CTA "Vamos entrar em contacto" com 2 botões. @see CtaCardBannerProps */
    CtaCardBannerProps,
    /** Props do NotificationBanner — banner de notificação com texto, CTA e dismiss. @see NotificationBannerProps */
    NotificationBannerProps,

    /** Item básico de uma aba — valor identificador e label visível. @see TabItem */
    TabItem,
    /** Props completas de uma aba no TabUnderline — item + conteúdo snippet. @see TabProps */
    TabProps,
    /** Props do componente TabUnderline — abas com estilo underline. @see TabUnderlineProps */
    TabUnderlineProps,

    /** Props base para o componente de input de busca. @see SearchItemProps */
    SearchItemProps,
    /** Props do SearchInput — input de busca com 2 variantes visuais. @see SearchInputProps */
    SearchInputProps,

    /** Item de link individual exibido numa coluna do footer. @see FooterLinkItem */
    FooterLinkItem,
    /** Item de rede social do footer com ícone, texto e link. @see FooterSocialItem */
    FooterSocialItem,
    /** Coluna do footer com título e lista de links. @see FooterColumnProps */
    FooterColumnProps,
    /** Props do componente Footer — rodapé completo com colunas, redes sociais, newsletter. @see FooterProps */
    FooterProps,

    /** Props do MenuBarSidebar — sidebar admin com menus, usuário e botões. @see MenuBarSidebarProps */
    MenuBarSidebarProps,

    /** Definição completa de uma tabela de dados genérica (colunas, filtros, ações). @template T Tipo dos itens. @see DataTableItem */
    DataTableItem,
    /** Alias de DataTableItem<T> — props do componente DataTableCore. @template T Tipo dos itens. @see DataTableCoreProps */
    DataTableCoreProps,

    /** Props do AdminPanel — layout principal de administração com sidebar/header/conteúdo. @see AdminPanelProps */
    AdminPanelProps,
    /** Props do AdminContent — wrapper de conteúdo para páginas admin. @see AdminContentProps */
    AdminContentProps,

    /** Dados necessários para autenticação de um utilizador. @see LoginRequestDto */
    LoginRequestDto,
    /** Tipo de formulário de login. @see LoginVariant */
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
    PageOtpVerificationProps,

    /** Variante do componente ProfileUser — 1 admin, 2 security, 3 experiência. @see ProfileUserVariant */
    ProfileUserVariant,
    /** Morada de envio associada ao perfil do utilizador. @see ProfileUserAddress */
    ProfileUserAddress,
    /** Nota/anotação associada ao perfil (admin). @see ProfileUserNote */
    ProfileUserNote,
    /** Preferências individuais de notificação (email/web/app). @see ProfileUserNotificationPref */
    ProfileUserNotificationPref,
    /** Preferência de marketing (newsletter, promoções) com toggles email/push. @see ProfileUserMarketingPref */
    ProfileUserMarketingPref,
    /** Item de experiência profissional/curricular apresentado no perfil público. @see ProfileUserExperience */
    ProfileUserExperience,
    /** Conjunto completo dos dados do utilizador apresentados no ProfileUser. @see ProfileUserData */
    ProfileUserData,
    /** Props do componente ProfileUser — página de perfil com 3 variantes. @see ProfileUserProps */
    ProfileUserProps,

    /** Props do NegoDesign — componente raiz do Negodesign. */
    NegoDesignProps,

    /** Props base para inputs de formulário com label. */
    InputLabelProps,

    /** Item individual do breadcrumb do ProductDetails. @see ProductDetailsBreadcrumbItem */
    ProductDetailsBreadcrumbItem,
    /** Tag/badge associada ao ProductDetails. @see ProductDetailsTag */
    ProductDetailsTag,
    /** Imagem da galeria do ProductDetails. @see ProductDetailsImage */
    ProductDetailsImage,
    /** Informações de localização do ProductDetails. @see ProductDetailsLocation */
    ProductDetailsLocation,
    /** Avaliação de um cliente sobre o ProductDetails. @see ProductDetailsReviewProps */
    ProductDetailsReviewProps,
    /** Aba de conteúdo adicional do ProductDetails. @see ProductDetailsTab */
    ProductDetailsTab,
    /** Dados completos apresentados na página ProductDetails. @see ProductDetailsData */
    ProductDetailsData,
    /** Props do componente ProductDetails. @see ProductDetailsProps */
    ProductDetailsProps,
    /** Props do componente ProductPromotionDetails. @see ProductPromotionDetailsProps */
    ProductPromotionDetailsProps,

    /** Item de breadcrumb do PrivacyPolicyOrTermsOfUse. @see BreadcrumbItem */
    BreadcrumbItem,
    /** Bloco de conteúdo do PrivacyPolicyOrTermsOfUse. @see ContentBlock */
    ContentBlock,
    /** Secção de conteúdo do PrivacyPolicyOrTermsOfUse. @see DocSection */
    DocSection,
    /** Item da tabela de conteúdos (TOC). @see TocItem */
    TocItem,
    /** Props do componente PrivacyPolicyOrTermsOfUse. @see PrivacyPolicyOrTermsOfUseProps */
    PrivacyPolicyOrTermsOfUseProps,
}
