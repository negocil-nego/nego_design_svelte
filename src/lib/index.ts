import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";

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
import AdCardBanner from "$lib/components/ui/banner/AdCardBanner.svelte";
import CtaCardBanner from "$lib/components/ui/banner/CtaCardBanner.svelte";
import CtaCardImageBanner from "$lib/components/ui/banner/CtaCardImageBanner.svelte";
import NotificationBanner from "$lib/components/ui/banner/NotificationBanner.svelte";

import PrivacyPolicyOrTermsOfUse from "./components/pages/privacy-policy-or-terms-of-use/PrivacyPolicyOrTermsOfUse.svelte";
import ProductDetails from "./components/pages/product-details/ProductDetails.svelte";
import ProfileUser from "./components/pages/profile-user/ProfileUser.svelte";
import PageOtpVerification from "./components/pages/security/otp-verification/PageOtpVerification.svelte";
import PageForgetPassword from "./components/pages/security/forget-password/PageForgetPassword.svelte";
import PageResetPassword from "./components/pages/security/reset-password/PageResetPassword.svelte";
import TabUnderline from "$lib/components/ui/tabs/ui/tab-underline.svelte";
import CarouselGridPromotion from "$lib/components/ui/carousel/core/grid/promotion/ui/CarouselGridPromotion.svelte";
import CarouselGridProduct from "$lib/components/ui/carousel/core/grid/product/ui/CarouselGridProduct.svelte";
import CarouselGridProfile from "$lib/components/ui/carousel/core/grid/profile/ui/CarouselGridProfile.svelte";
import CarouselHighlights from "$lib/components/ui/carousel/core/highlights/ui/CarouselHighlights.svelte";
import CarouselGridMedia from "$lib/components/ui/carousel/core/grid/media/ui/CarouselGridMedia.svelte";
import CarouselPromotion from "$lib/components/ui/carousel/core/promotion/ui/CarouselPromotion.svelte";
import CarouselBadge from "$lib/components/ui/carousel/core/badge/ui/CarouselBadge.svelte";
import CarouselHero from "$lib/components/ui/carousel/core/hero/ui/CarouselHero.svelte";

import CompanyProfile from "$lib/components/pages/company-profile/CompanyProfile.svelte";
import Menu from "$lib/components/ui/nav/ui/Menu.svelte";

import PageLogin from "./components/pages/security/login/PageLogin.svelte";
import SearchInput from "$lib/components/ui/search/SearchInput.svelte";
import Footer from "$lib/components/ui/footer/ui/Footer.svelte";
import NegoDesign from "./components/NegoDesign.svelte";

import ItemsSimpleGrid from "$lib/components/ui/grid/core/ui/ItemsSimpleGrid.svelte";
import ItemsPanel from "$lib/components/ui/grid/core/ui/ItemsPanel.svelte";

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
     * Barra de navegação responsiva que alterna entre as variantes Simples
     * (links) e Complexa (menus) consoante o dispositivo (mobile ou desktop).
     * Inclui logo, botões de ação, light switch e language switcher.
     * @property {NavMenuLogoProps} logo - Logotipo do menu
     * @property {MenuVarientProps} navMenu - Variante de navegação (Simples ou Complexa)
     * @property {NavMenuButtonProps} navMenuButton - Botão de ação (login/registo)
     * @property {boolean} isBorder - Exibe borda inferior no menu
     * @property {boolean} isLightSwitch - Exibe o interruptor de tema (claro/escuro)
     * @property {boolean} isLanguageSwitcher - Exibe o seletor de idioma
     * @see MenuProps
     */
    Menu,

    /**
     * Grid de itens (cards) com variantes visuais 1 e 2.
     * Em mobile vira uma lista de scroll horizontal; em desktop usa colunas
     * dinâmicas baseadas no número de itens. Suporta estado de carregamento.
     * @property {ItemGridProps[]} items - Lista de itens a exibir
     * @property {1|2} variant - Variante visual dos cards (padrão: 1)
     * @property {boolean} isLoading - Exibe skeletons de carregamento
     * @property {(id) => void} onClick - Callback ao clicar num item
     * @property {string} className - Classe CSS adicional do container
     * @see GridProps
     */
    ItemsSimpleGrid,

    /**
     * Contentor de itens que pode renderizar numa grade (grid) ou num carousel
     * (inline) com seleção ativa. Cada clique normaliza o id e dispara `onClick`.
     * @property {ItemGridProps[]} items - Lista de itens a exibir
     * @property {"grid"|"inline"} style - Estilo de exibição (padrão: "grid")
     * @property {(id) => void} onClick - Callback ao selecionar um item
     * @see GridProps
     */
    ItemsPanel,

    /**
     * Componente raiz do Negodesign.
     * Configura o tema, idioma e traduções da aplicação.
     * @property {Record<string, Record<string, string>>} translations - Traduções customizadas
     * @property {Snippet} children - Conteúdo da aplicação
     */
    NegoDesign,

    /**
     * Banner de anúncio com faixa lateral colorida, título destacado (duas cores)
     * e botão CTA. Ideal para publicidade, chamadas de atenção ou ofertas especiais.
     * @property {string} tagText - Texto da faixa lateral colorida
     * @property {string} titleHighlight - Primeira parte do título (cor âmbar)
     * @property {string} titleMain - Segunda parte do título (cor verde)
     * @property {string} buttonText - Texto do botão CTA
     * @property {() => void} onClickButton - Chamado ao clicar no CTA
     * @property {string} href - Link que torna todo o card clicável
     * @see AdCardBannerProps
     */
    AdCardBanner,

    /**
     * Banner CTA "Vamos entrar em contacto" com título bold, descrição de apoio
     * e até 2 botões em formato de pílula com decoração de anéis concêntricos.
     * @property {string} title - Título principal do banner
     * @property {string} description - Texto de apoio/descrição
     * @property {string} primaryText - Texto do botão primário
     * @property {string} secondaryText - Texto do botão secundário
     * @property {() => void} onClickPrimary - Callback do botão primário
     * @property {() => void} onClickSecondary - Callback do botão secundário
     * @property {string} primaryHref - Link do botão primário
     * @property {string} secondaryHref - Link do botão secundário
     * @see CtaCardBannerProps
     */
    CtaCardBanner,

    /**
     * Banner CTA com imagem de destaque em fundo gradiente (`bg-gradient`).
     * Título, descrição e até dois CTAs, cada um com link e/ou callback de clique,
     * além da imagem e seus atributos.
     * @property {string} title - Título principal do banner
     * @property {string} description - Texto de apoio/descrição
     * @property {string} primaryText - Texto do CTA primário
     * @property {string} primaryHref - Link do CTA primário
     * @property {() => void} onClickPrimary - Callback do CTA primário
     * @property {string} secondaryText - Texto do CTA secundário
     * @property {string} secondaryHref - Link do CTA secundário
     * @property {() => void} onClickSecondary - Callback do CTA secundário
     * @property {string} imageSrc - URL da imagem de destaque
     * @property {string} imageAlt - Texto alternativo da imagem
     * @property {number} imageWidth - Largura da imagem
     * @property {number} imageHeight - Altura da imagem
     * @see CtaCardImageBannerProps
     */
    CtaCardImageBanner,

    /**
     * Banner de notificação com texto em destaque, descrição, CTA e botão dismiss.
     * Usado para comunicar novidades, promoções ou mensagens importantes.
     * @property {string} strongText - Texto em destaque antes do separador
     * @property {string} description - Descrição principal
     * @property {string} ctaText - Texto do botão CTA
     * @property {string} ctaHref - Link do botão CTA
     * @property {() => void} onCtaClick - Chamado ao clicar no CTA
     * @property {() => void} onDismiss - Chamado ao clicar no dismiss
     * @see NotificationBannerProps
     */
    NotificationBanner,

    /**
     * Estado vazio (empty state) com ícone, título, descrição e uma ação
     * (link ou botão) para quando não há conteúdo a exibir.
     * @property {string} title - Título do estado vazio
     * @property {string} description - Descrição de apoio
     * @property {IconSvgElement} icon - Ícone exibido na área de media
     * @property {string} actionHref - URL de destino da ação (link)
     * @property {string} actionLabel - Texto da ação
     * @property {() => void} onAction - Callback ao clicar na ação (botão)
     * @property {boolean} showAction - Exibe a ação de suporte
     * @property {Snippet} children - Conteúdo customizado no lugar da ação padrão
     * @see NotFoundEmptyProps
     */
    NotFoundEmpty,

    /**
     * Campo de input de busca com 2 variantes visuais (borda completa ou underline).
     * Inclui botão de submissão e callback onSubmit.
     * @property {1|2} variant - Variante visual (1: borda completa, 2: underline)
     * @property {(value) => void} onSubmit - Chamado ao submeter a busca
     * @see SearchInputProps
     */
    SearchInput,

    /**
     * Página de perfil da empresa com informações detalhadas, descrição,
     * galeria, localização e contactos.
     * @see CompanyProfileProps
     */
    CompanyProfile,

    /**
     * Carousel de badges/categorias com orientação horizontal ou vertical.
     * Cada item pode ter ícone, imagem, label e callback de clique.
     * @property {ItemCarousel[]} items - Lista de itens/categorias
     * @property {boolean} isVertical - Orientação vertical
     * @property {(item) => void} onClick - Callback ao clicar num item
     * @see CarouselBadgeProps
     */
    CarouselBadge,

    /**
     * Carousel hero em fullscreen com slides de imagem, título, descrição
     * e menu de navegação sobreposto. Ideal para páginas de login.
     * @property {CarouselHeroItem[]} items - Lista de slides
     * @see CarouselHeroProps
     */
    CarouselHero,

    /**
     * Rodapé completo com múltiplas colunas de links, logo, ícones de redes sociais
     * e formulário de newsletter opcional.
     * @property {FooterColumnProps[]} columns - Colunas de links do rodapé
     * @property {FooterSocialItem[]} social - Redes sociais
     * @property {boolean} hasNewsletter - Exibe o formulário de newsletter
     * @see FooterProps
     */
    Footer,

    /**
     * Carousel de cards de promoção com preços antigo/novo, botão de comprar,
     * favoritar e adicionar ao carrinho.
     * @property {CardPromotionProps[]} items - Cards de promoção
     * @property {CarouselHeaderProps} header - Cabeçalho do carousel
     * @see CarouselPromotionProps
     */
    CarouselPromotion,

    /**
     * Carousel de cards de destaque para organizações, serviços ou locais em evidência.
     * Suporta duas variantes visuais.
     * @property {CardHighlightProps[]} items - Cards de destaque
     * @property {CarouselHeaderProps} header - Cabeçalho do carousel
     * @property {1|2} variant - Variante visual
     * @see CarouselHighlightsProps
     */
    CarouselHighlights,

    /**
     * Layout em grid responsivo de cards de mídia (imagens ou vídeos).
     * Em telas mobile transforma-se num carousel com swipe.
     * @property {CardMediaProps[]} items - Cards de mídia
     * @property {CarouselHeaderProps} header - Cabeçalho do carousel
     * @see CarouselGridMediaProps
     */
    CarouselGridMedia,

    /**
     * Layout em grid responsivo de cards de perfil (guias, intérpretes, organizações).
     * Em telas mobile transforma-se num carousel com swipe.
     * @property {CardProfileProps[]} items - Cards de perfil
     * @property {CarouselHeaderProps} header - Cabeçalho do carousel
     * @see CarouselGridProfileProps
     */
    CarouselGridProfile,

    /**
     * Layout em grid responsivo de cards de produto (imagens ou vídeos).
     * Em telas mobile transforma-se num carousel com swipe.
     * @property {CardProductProps[]} items - Cards de produto
     * @property {CarouselHeaderProps} header - Cabeçalho do carousel
     * @see CarouselGridProductProps
     */
    CarouselGridProduct,

    /**
     * Layout em grid responsivo de cards de produto em promoção (imagens ou vídeos).
     * Em telas mobile transforma-se num carousel com swipe.
     * @property {CardProductProps[]} items - Cards de produto em promoção
     * @property {CarouselHeaderProps} header - Cabeçalho do carousel
     * @see CarouselGridPromotionProps
     */
    CarouselGridPromotion,

    /**
     * Componente de abas com estilo underline. Troca o conteúdo (Snippet)
     * conforme a aba selecionada.
     * @property {TabItem[]} items - Lista de abas (valor identificador e label)
     * @property {Record<string, Snippet>} contents - Snippets de conteúdo por aba
     * @see TabUnderlineProps
     */
    TabUnderline,

    /**
     * Página de login completa com carousel hero ao fundo e card de autenticação
     * com múltiplas variantes (email, username, telefone) e formulário de registo.
     * @property {LoginVariant} variant - Variante do formulário de login
     * @property {LoginRequestDto} initialData - Valores iniciais do formulário
     * @see PageLoginProps
     */
    PageLogin,

    /**
     * Página de recuperação de senha com hero carousel e card de solicitação
     * de link de recuperação por email.
     * @property {ForgetPasswordVariant} variant - Variante do formulário
     * @property {(data) => Promise<void>} onSubmit - Chamado ao submeter
     * @see PageForgetPasswordProps
     */
    PageForgetPassword,

    /**
     * Página de redefinição de senha com hero carousel e card para introduzir
     * e confirmar a nova palavra-passe.
     * @property {(data) => Promise<void>} onSubmit - Chamado ao submeter
     * @see PageResetPasswordProps
     */
    PageResetPassword,

    /**
     * Página de política de privacidade ou termos de utilização com sidebar,
     * tabela de conteúdos e blocos de conteúdo navegáveis.
     * @property {DocSection[]} sections - Secções de conteúdo do documento
     * @property {BreadcrumbItem[]} breadcrumb - Navegação breadcrumb
     * @see PrivacyPolicyOrTermsOfUseProps
     */
    PrivacyPolicyOrTermsOfUse,

    /**
     * Página de detalhes do produto com 4 variantes de layout, galeria de imagens,
     * avaliações, mapa, ficheiros, tabs e painel de compra.
     * @property {ProductDetailsData} data - Dados completos do produto
     * @property {1|2|3} variant - Variante de layout
     * @see ProductDetailsProps
     */
    ProductDetails,

    /**
     * Página de perfil de utilizador com 3 variantes de layout.
     * Inclui informação básica, alterar senha, preferências e experiência.
     * - variant=1: Header colorido com dados admin, tabs e painel de detalhes.
     * - variant=2: Banner com avatar sobreposto, formulário alterar senha (Security).
     * - variant=3: Header roxo com tabs de experiência e timeline.
     * @property {ProfileUserData} data - Dados do utilizador
     * @property {ProfileUserVariant} variant - Variante de layout
     * @see ProfileUserProps
     */
    ProfileUser,

    /**
     * Página de verificação OTP com hero carousel e card de input de código
     * de 6 dígitos para validação de login ou recuperação.
     * @property {OtpVerificationRequestDto} initialData - Valores iniciais
     * @property {(data) => Promise<void>} onSubmit - Chamado ao validar o OTP
     * @see PageOtpVerificationProps
     */
    PageOtpVerification,

    /**
     * Tabela de dados genérica construída sobre o TanStack Table.
     * Inclui paginação, ordenação, filtros, badges, coluna de seleção,
     * drag handle e ações personalizadas por linha.
     * @template T - Tipo genérico dos itens/linhas
     * @property {DataTableItem<T>} item - Definição da tabela (colunas, filtros, ações)
     * @see DataTableCoreProps
     */
    DataTableCore,

    /**
     * Sidebar de navegação administrativa com menu colapsável, cabeçalho customizável,
     * lista de menus/submenus, botões do rodapé e bloco de utilizador logado.
     * @property {NavMenuItem[]} menus - Itens de navegação principal (com ou sem submenus)
     * @property {NavUserSidebarProps} user - Bloco de utilizador logado
     * @property {NavMenuSidebarProps[]} menusButtons - Botões do rodapé da sidebar (ex: logout)
     * @property {Snippet} header - Snippet customizado do cabeçalho da sidebar
     * @property {Snippet} footer - Snippet customizado do rodapé da sidebar
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
     * @see AdminPanelProps
     */
    AdminPanel,

    /**
     * Wrapper de conteúdo para páginas administrativas.
     * Aplica padding, layout flex colunar e gaps consistentes entre secções.
     * @property {Snippet} children - Snippet com o conteúdo interno da página
     * @see AdminContentProps
     */
    AdminContent,

    /**
     * Campo de input para email com validação, ícone e label integrados.
     * Suporta two-way binding via prop `value`.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     * @property {string} placeholder - Texto de exemplo do campo
     * @see InputLabelProps
     */
    InputEmail,

    /**
     * Campo de input para número de telefone com seletor de país (código + bandeira)
     * e validação do formato.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     * @property {string} placeholder - Texto de exemplo do campo
     * @see InputLabelProps
     */
    InputPhone,

    /**
     * Campo de input híbrido que aceita tanto email como número de telefone.
     * Detecta automaticamente o tipo com base no valor introduzido.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     * @property {string} placeholder - Texto de exemplo do campo
     * @see InputLabelProps
     */
    InputEmailOrPhone,

    /**
     * Campo de input para código OTP (One-Time Password) com N caixas de dígitos separadas.
     * Suporta separador visual entre grupos de dígitos.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo (opcional)
     * @property {number} length - Quantidade de caixas de dígitos (padrão: 6)
     * @property {boolean} separator - Exibir separador visual entre grupos
     * @property {string} placeholder - Texto de exemplo do campo
     * @see InputLabelProps
     */
    InputCodeOtp,

    /**
     * Campo de input para senha com toggle de visibilidade (ícone de olho).
     * Suporta two-way binding e validações customizadas.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     * @property {string} placeholder - Texto de exemplo do campo
     * @see InputLabelProps
     */
    InputPassword,

    /**
     * Campo de input para nome de utilizador com ícone e label integrados.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     * @property {string} placeholder - Texto de exemplo do campo
     * @see InputLabelProps
     */
    InputUsername,

    /**
     * Campo de input para confirmação de senha. Integra-se com InputPassword
     * para validar correspondência entre os dois campos.
     * @property {string} value - Valor vinculado do input
     * @property {string} label - Rótulo personalizado do campo
     * @property {string} placeholder - Texto de exemplo do campo
     * @see InputLabelProps
     */
    InputPasswordConfirm
}
