
import type {
    ProductPromotionDetailsProps
} from "$lib/components/pages/product-details/types";

import type {
    LoginFormType,
    LoginVariant,
    LoginRequestDto,
    LinkProps,
    PageLoginProps,
} from "../components/pages/security/login/types";

import type {
    RegisterFormFields,
    RegisterRequestDto,
    PageRegisterProps
} from "../components/pages/security/register/types";

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
} from "$lib/components/ui/nav/data/nav-menu";

import type {
    NavMenuSidebarProps,
    NavMenuAndSubmenuSidebarProps,
    GroupMenuSidebarProps,
    SubMenuSidebarProps,
    NavMenuItem
} from "$lib/components/ui/sidebar/core/data/nav-menu-sidebar";

import type { NavUserSidebarProps } from "$lib/components/ui/sidebar/core/data/nav-user-sidebar";

import type {
    CardMediaProps,
    CardProfileProps,
    CardPromotionProps,
    CardHighlightProps,
    CardTagsProps,
    CardProductProps
} from "$lib/components/ui/card/core/types";

import type { CarouselGridMediaProps } from "$lib/components/ui/carousel/core/grid/media/types";
import type { CarouselGridProfileProps } from "$lib/components/ui/carousel/core/grid/profile/types";
import type { CarouselHighlightsProps } from "$lib/components/ui/carousel/core/highlights/types";
import type { CarouselPromotionProps } from "$lib/components/ui/carousel/core/promotion/types";

import type {
    ItemCarousel,
    CarouselHeaderProps,
    CarouselBadgeProps,
    CarouselHeroItem,
    CarouselHeroProps
} from "$lib/components/ui/carousel/core/types";

import type {
    CarouselSlotProps,
    NotFoundEmptyProps
} from "$lib/components/ui/panel/type";

import type {
    BannerProps,
    AdCardBannerProps,
    CtaCardBannerProps,
    CtaCardImageBannerProps,
    NotificationBannerProps
} from "$lib/components/ui/banner/types";

import type {
    TabItem,
    TabProps
} from "$lib/components/ui/tabs/data/TabModel";
import type { TabUnderlineProps } from "$lib/components/ui/tabs/types";

import type {
    SearchItemProps,
    SearchInputProps
} from "$lib/components/ui/search/types";

import type {
    FooterLinkItem,
    FooterSocialItem,
    FooterColumnProps,
    FooterProps
} from "$lib/components/ui/footer/types";

import type { MenuBarSidebarProps } from "$lib/components/ui/sidebar/core/types";

import type {
    DataTableItem,
    DataTableCoreProps
} from "$lib/components/ui/datatable/data/data-table";

import type {
    AdminPanelProps,
    AdminContentProps
} from "$lib/components/pages/admin/shared/types";

import type {
    AdminSectionProps,
    AdminSectionMenuItem,
    AdminSectionCardProps
} from "$lib/components/pages/admin/shared/section/types";

import type {
    AdminUserSectionProps
} from "$lib/components/pages/admin/shared/section/types";

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

import type {
    PageStatusProps,
} from "$lib/components/pages/status/types";

import type { InputLabelProps } from "$lib/components/ui/form/data/InputLabel.svelte";
import type { NegoDesignProps } from "$lib/components/types";
import type { CarouselGridPromotionProps } from "$lib/components/ui/carousel/core/grid/promotion/types";
import type { CarouselGridProductProps } from "$lib/components/ui/carousel/core/grid/product/types";
import type { CompanyProfileProps } from "$lib/components/pages/company-profile/types";
import type {
    MenuProps,
    MenuVarientProps,
    ComplexMenuProps
} from "$lib/components/ui/nav/data/types";
import type {
    GridProps,
    ItemGridProps
} from "$lib/components/ui/grid/core/data/types";

import type {
    ModelGridCard,
    ModelGridCategory,
    ModalGridSelectionProps
} from "$lib/components/ui/modal/grid/types";

import type {
    ModelBadge,
    ModalBadgeSelectionProps
} from "$lib/components/ui/modal/badge/types";

import type {
    ModelSocialShare,
    ModalShareSelectionProps
} from "$lib/components/ui/modal/share/types";

import type {
    ModalNotificationProps
} from "$lib/components/ui/modal/notification/types";

import type {
    ModalFeedbackProps
} from "$lib/components/ui/modal/feedback/types";

import type {
    ModalMapProps
} from "$lib/components/ui/modal/map/types";

import type {
    ModalCoreProps,
    ModelGridCardProps
} from "$lib/components/ui/modal/core/types";

import type {
    FormProps,
    FormInputConfig,
    FormOption
} from "$lib/components/ui/form/types";

import type {
    ModalFormProps,
    ModalFormEmailOrPhoneProps,
    ModalFormEmailOrPhoneSubmitData,
    ModalFormEmailOrPhoneType
} from "$lib/components/ui/modal/form/types";

import type {
    ModalUploadProps,
    UploadFile,
    UploadFileStatus
} from "$lib/components/ui/modal/upload/types";
import type { AdminSidebarProps } from "$lib/components/pages/admin/sidebar/types";

export type {
    AdminSidebarProps,

    GridProps,
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
    /** Props do componente Menu — barra de navegação com variantes (simples ou complexa), logo, botões, light switch e language switcher. @see MenuProps */
    MenuProps,
    /** Tipo união das variantes de navegação do Menu (Simples ou Complexa). @see MenuVarientProps */
    MenuVarientProps,
    /** Props de um item individual do grid (ItemsSimpleGrid/ItemsPanel). @see ItemGridProps */
    ItemGridProps,
    /** Props do NotFoundEmpty — estado vazio com ícone, título, descrição e ação. @see NotFoundEmptyProps */
    NotFoundEmptyProps,

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
    /** Props do CtaCardImageBanner — banner CTA com imagem de destaque em fundo gradiente. @see CtaCardImageBannerProps */
    CtaCardImageBannerProps,
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

    /** Props do AdminSection — secção admin com fundo, menu (tabs) e grade de cards. @see AdminSectionProps */
    AdminSectionProps,
    /** Item do menu de navegação da AdminSection. @see AdminSectionMenuItem */
    AdminSectionMenuItem,
    /** Card exibido na grade da AdminSection. @see AdminSectionCardProps */
    AdminSectionCardProps,

    /** Props do AdminUserSection — avatar do utilizador com dropdown de perfil no hover. @see AdminUserSectionProps */
    AdminUserSectionProps,

    /** Tipo de formulário de login no PageLogin. @see LoginFormType */
    LoginFormType,
    /** Dados necessários para autenticação de um utilizador. @see LoginRequestDto */
    LoginRequestDto,
    /** Tipo de formulário de login. @see LoginVariant */
    LoginVariant,
    /** Configuração de link externo. @see LinkProps */
    LinkProps,
    /** Props do componente PageLogin. @see PageLoginProps */
    PageLoginProps,

    /** Campos configuráveis do formulário de registo. @see RegisterFormFields */
    RegisterFormFields,
    /** Dados submetidos no formulário de registo. @see RegisterRequestDto */
    RegisterRequestDto,
    /** Props do componente PageRegister. @see PageRegisterProps */
    PageRegisterProps,

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

    /** Modelo de dados para um card seleccionável no ModalGridSelection. @see ModelGridCard */
    ModelGridCard,
    /** Modelo de dados para uma categoria no topo do ModalGridSelection (variante 2). @see ModelGridCategory */
    ModelGridCategory,
    /** Props do componente ModalGridSelection — modal de seleção em grid. @see ModalGridSelectionProps */
    ModalGridSelectionProps,

    /** Modelo de dados para um badge/pill seleccionável no ModalBadgeSelection. @see ModelBadge */
    ModelBadge,
    /** Props do componente ModalBadgeSelection — modal de seleção com badges/pills. @see ModalBadgeSelectionProps */
    ModalBadgeSelectionProps,

    /** Modelo de dados para uma rede social no ModalShareSelection. @see ModelSocialShare */
    ModelSocialShare,
    /** Props do componente ModalShareSelection — modal de partilha em redes sociais. @see ModalShareSelectionProps */
    ModalShareSelectionProps,

    /** Props do componente ModalNotification — modal de subscrição/notificação por email. @see ModalNotificationProps */
    ModalNotificationProps,

    /** Props do componente ModalFeedback — modal de feedback com editor de texto rico. @see ModalFeedbackProps */
    ModalFeedbackProps,

    /** Props do componente ModalMap — modal de seleção de localização com mapa. @see ModalMapProps */
    ModalMapProps,

    /** Props do componente grid — modelo de dados para um card seleccionável no ModalGridSelection. @see ModelGridCardProps */
    ModelGridCardProps,

    /** Props do componente Form — formulário com grid responsivo de 2 colunas. @see FormProps */
    FormProps,
    /** Configuração de um input dentro do Form. @see FormInputConfig */
    FormInputConfig,
    /** Opção para inputs do tipo select, radio ou checkbox. @see FormOption */
    FormOption,

    /** Props do componente ModalForm — formulário dentro de um modal. @see ModalFormProps */
    ModalFormProps,
    /** Props do componente ModalFormEmailOrPhone — formulário em modal para envio de OTP por email ou telefone. @see ModalFormEmailOrPhoneProps */
    ModalFormEmailOrPhoneProps,
    ModalFormEmailOrPhoneSubmitData,
    ModalFormEmailOrPhoneType,

    /** Props do componente ModalUpload — modal de upload de ficheiros. @see ModalUploadProps */
    ModalUploadProps,
    /** Modelo de dados para um ficheiro no modal de upload. @see UploadFile */
    UploadFile,
    /** Estado de um ficheiro no upload. @see UploadFileStatus */
    UploadFileStatus,

    /** Props do componente ModalCore — contentor base reutilizável para todos os modais. @see ModalCoreProps */
    ModalCoreProps,

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

    /** Props do componente PageStatus — página de estado com ícone, título e botão. @see PageStatusProps */
    PageStatusProps,
}
