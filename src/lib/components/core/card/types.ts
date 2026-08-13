import type { IconSvgElement } from "@hugeicons/svelte";

/**
 * Props de uma tag individual usada nos cards.
 * Usada em CardMedia, CardProfile, CardPromotion e CardHighlight.
 */
export interface CardTagsProps {
    /** Ícone opcional exibido antes do texto da tag */
    icon?: IconSvgElement
    /** Texto exibido na tag */
    text: string
}

/**
 * Props do CardMedia — card de mídia com imagem ou vídeo,
 * tags, rating, botões de perfil e detalhes.
 */
export interface CardMediaProps {
    /** Identificador único do item */
    id: string | number;
    /** URL do logotipo da empresa/organização */
    logo?: string;
    /** Título do card (nome do produto, serviço, etc.) */
    title?: string;
    /** Descrição/conteúdo do card */
    content?: string;
    /** Valor máximo da classificação por estrelas (ex: 5) */
    startMax?: number;
    /** URL da imagem de capa */
    imageUrl?: string;
    /** URL do vídeo (substitui a imagem quando fornecido) */
    videoUrl?: string;
    /** Classe CSS adicional para o container */
    className?: string;
    /** Lista de tags exibidas no card */
    tags?: CardTagsProps[];
    /** Indica se o item está marcado como favorito */
    isFavorite?: boolean;
    /** Indica estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Valor atual da classificação por estrelas (ex: 4.5) */
    startNumber?: number;
    /** Exibe borda inferior nas tags */
    isTagBorderBottom?: boolean;
    /** Classe CSS personalizada para o botão de perfil */
    buttonProfileClass?: string;
    /** Classe CSS personalizada para o botão de detalhes */
    buttonDetailsClass?: string;
    /** Exibe o botão de maximizar no vídeo */
    isVideoButtonMaximized?: boolean;
    /** Exibe o botão de maximizar na imagem */
    isImageButtonMaximized?: boolean;
    /** Callback acionado ao clicar no botão de favorito */
    onFavoriteClick?: (id: string | number) => void;
    /** Callback acionado ao clicar no botão de perfil */
    onButtonProfile?: (id: string | number) => void;
    /** Callback acionado ao clicar no botão de detalhes */
    onButtonDetails?: (id: string | number) => void;
    /** Comportamento do vídeo: iniciar reprodução automática ou no hover */
    videoAction?: 'START_REPRODUCTION' | 'HOVER_REPRODUCTION'
}

/**
 * Props do CardProfile — card de perfil de organização/guia
 * com logo, descrição, tags, rating e botões.
 */
export interface CardProfileProps {
    /** Identificador único do perfil */
    id: string | number;
    /** URL do logotipo/avatar */
    logo?: string;
    /** Nome/título do perfil */
    title?: string;
    /** Descrição do perfil */
    content?: string;
    /** Valor máximo da classificação por estrelas */
    startMax?: number;
    /** Classe CSS adicional */
    className?: string;
    /** Lista de tags do perfil */
    tags?: CardTagsProps[];
    /** Indica se está marcado como favorito */
    isFavorite?: boolean;
    /** Valor da classificação por estrelas */
    startNumber?: number;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Exibe borda inferior nas tags */
    isTagBorderBottom?: boolean;
    /** Classe CSS personalizada para botão de perfil */
    buttonProfileClass?: string;
    /** Classe CSS personalizada para botão de detalhes */
    buttonDetailsClass?: string;
    /** Callback ao clicar no botão favorito */
    onFavoriteClick?: (id: string | number) => void;
    /** Callback ao clicar no botão perfil */
    onButtonProfile?: (id: string | number) => void;
    /** Callback ao clicar no botão detalhes */
    onButtonDetails?: (id: string | number) => void;
}

/**
 * Props do CardPromotion — card de promoção com preço antigo/novo,
 * botão de comprar, favoritar e adicionar ao carrinho.
 */
export interface CardPromotionProps {
    /** Identificador único da promoção */
    id: string | number;
    /** URL do logotipo */
    logo?: string;
    /** URL da imagem do produto em promoção */
    imageUrl?: string;
    /** Nome/título da promoção */
    title?: string;
    /** Descrição da promoção */
    content?: string
    /** Classe CSS adicional */
    className?: string;
    /** Indica se o botão de carrinho está ativo */
    isCart?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Indica se está marcado como favorito */
    isFavorite?: boolean;
    /** Lista de tags */
    tags?: CardTagsProps[]
    /** Preço original (antes do desconto) */
    oldPrice?: string | number;
    /** Preço promocional */
    newPrice?: string | number;
    /** Texto do botão de compra (padrão: "Comprar") */
    buttonBuyText?: string;
    /** Classe CSS personalizada para o botão comprar */
    buttonBuyClass?: string;
    /** Exibe ícone antes da descrição */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição */
    isDescriptionLabel?: boolean;
    /** Callback ao clicar no botão comprar */
    onClickBuy?: (id: string | number) => void;
    /** Callback ao clicar no botão carrinho */
    onClickShop?: (id: string | number) => void;
    /** Callback ao clicar no botão favorito */
    onClickFavorite?: (id: string | number) => void;
}

/**
 * Props do CardHighlight — card de destaque/organização
 * com imagem, logo, botão de ação expandida.
 */
export interface CardHighlightProps {
    /** Identificador único do destaque */
    id: string | number;
    /** URL do logotipo */
    logo?: string;
    /** URL da imagem de destaque */
    imageUrl?: string;
    /** Título/nome do destaque */
    title?: string;
    /** Classe CSS adicional */
    className?: string;
    /** Indica se está marcado como favorito */
    isFavorite?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Exibe botão expandir/ver mais */
    isExpandButton?: boolean;
    /** Descrição do destaque */
    content?: string;
    /** Texto do botão de ação principal */
    buttonText?: string;
    /** Classe CSS personalizada para o botão */
    buttonClass?: string;
    /** Exibe ícone antes da descrição */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição */
    isDescriptionLabel?: boolean;
    /** Lista de tags */
    tags?: CardTagsProps[]
    /** Callback ao clicar no botão favorito */
    onClickFavorite?: (id: string | number) => void;
    /** Callback ao clicar no botão principal */
    onClickBtn?: (id: string | number) => void;
}
