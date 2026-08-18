import type { IconSvgElement } from "@hugeicons/svelte";

export interface ProductDetailsFeatureProps {
  icon?: IconSvgElement | string;
  label: string;
}

/**
 * Item individual do breadcrumb de navegação.
 * Representa um nível hierárquico na navegação da página
 * (ex: Home / Turismo / Hotel Baía Azul).
 */
export interface ProductDetailsBreadcrumbItem {
  /** Texto visível do item no breadcrumb. */
  label: string;
  /** URL de destino quando o item é clicável (último item geralmente não tem href). */
  href?: string;
}

/**
 * Tag/badge associada ao produto.
 * Usada para destacar categorias, localização ou características rápidas.
 */
export interface ProductDetailsTag {
  /** Ícone opcional exibido antes do texto da tag. */
  icon?: IconSvgElement;
  /** Texto principal da tag (ex: "Luanda", "5 Estrelas"). */
  text: string;
}

/**
 * Imagem da galeria do produto.
 * Cada imagem pode ter um texto alternativo para acessibilidade.
 */
export interface ProductDetailsImage {
  /** Caminho ou URL completa da imagem (obrigatório). */
  src: string;
  /** Texto alternativo para acessibilidade (recomendado). */
  alt?: string;
  type?: "image" | "video";
}

/**
 * Informações de localização do produto.
 * Usada para exibir o mapa embed e detalhes do endereço.
 */
export interface ProductDetailsLocation {
  /** Nome/título da localização (ex: "Morro da Luz"). */
  label?: string;
  /** Endereço completo ou parcial para exibição. */
  address?: string;
  /**
   * URL do embed do mapa.
   * Suporta OpenStreetMap, Google Maps e outros serviços de embed.
   * Se não for fornecido, usa um mapa padrão.
   */
  mapUrl?: string;

  latitude?: number;
  longitude?: number;
}

/**
 * Avaliação de um cliente sobre o produto.
 * Contém autor, classificação, data e comentário.
 */
export interface ProductDetailsReviewProps {
  /** Identificador único da avaliação (usado como key nos {#each}). */
  id: string | number;
  /** Nome do autor da avaliação. */
  author: string;
  /**
   * Classificação numérica (ex: 4.5 de 5).
   * Geralmente um valor entre 0 e 5.
   */
  rating: number;
  /** Data da avaliação (formato string, ex: "12/08/2024"). */
  date?: string;
  /** Comentário/texto completo da avaliação. */
  comment: string;
}

/**
 * Aba de conteúdo adicional no produto.
 * Usada para organizar descrição, avaliações, detalhes técnicos, etc.
 */
export interface ProductDetailsTab {
  /** Identificador único da aba (ex: "description", "reviews"). */
  id: string;
  /** Rótulo visível no botão da aba. */
  label: string;
}

/**
 * Dados completos apresentados na página de detalhes do produto.
 * Interface principal que agrega todas as informações necessárias
 * para renderizar qualquer variante do componente.
 */
export interface ProductDetailsData {
  /** Identificador único do produto. */
  id: string | number;
  /** Itens do breadcrumb de navegação. */
  breadcrumb: ProductDetailsBreadcrumbItem[];
  /** Título principal do produto (nome). */
  title: string;
  /** Subtítulo opcional (slogan ou descrição curta). */
  subtitle?: string;
  /** Descrição curta do produto. */
  description: string;
  /** Descrição longa/detalhada (opcional). */
  longDescription?: string;
  /** Lista de tags/categorias associadas ao produto. */
  tags?: ProductDetailsTag[];
  /** Galeria de imagens do produto. */
  gallery: ProductDetailsImage[];
  /** Informações de localização para exibir no mapa. */
  location?: ProductDetailsLocation;
  /**
   * Classificação média do produto.
   * Valor entre 0 e 5 (ex: 4.2).
   */
  rating?: number;
  /** Número total de avaliações recebidas. */
  reviewsCount?: number;
  /** Lista de avaliações individuais dos clientes. */
  reviews?: ProductDetailsReviewProps[];
  /** Preço atual/promocional do produto. */
  newPrice?: string | number;
  /** Preço original (antes do desconto). */
  oldPrice?: string | number;
  /** Símbolo da moeda (ex: "Kz", "€", "$"). */
  currency?: string;
  /** Quantidade disponível em stock. */
  quantityAvailable?: number;
  /** Lista de características/features do produto (strings). */
  features?: string[] | ProductDetailsFeatureProps[];
  /**
   * Abas de conteúdo personalizadas.
   * Se não for fornecido, usa padrão: Descrição + Avaliações.
   */
  tabs?: ProductDetailsTab[];
  /** Texto customizado para o botão de compra (padrão: "Comprar"). */
  buttonBuyText?: string;
  /** Estado inicial do produto no carrinho. */
  isCart?: boolean;
  /** Estado inicial do produto nos favoritos. */
  isFavorite?: boolean;
}

/**
 * Propriedades do componente principal ProductDetails.
 * Suporta quatro variantes de layout e callbacks de interação.
 */
export interface ProductPromotionDetailsProps {
  id: string | number;
  newPrice: string | number;
  oldPrice: string | number;
}

export interface ProductDetailsProps {
  /**
   * Variante do layout da página de detalhes.
   * - 1: Duas colunas (galeria à esquerda, info à direita)
   * - 2: Galeria em destaque com conteúdo centralizado
   * - 3: Painel de compra sticky no lado direito
   * - 4: Abas de conteúdo (descrição e avaliações) abaixo da info
   * @default 1
   */
  varient?: 1 | 2 | 3;
  /** Dados completos do produto a serem exibidos. */
  data: ProductDetailsData;
  /**
   * Estado de carregamento.
   * Quando true, todos os blocos exibem Skeletons no lugar do conteúdo.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Lista de promoções associadas ao produto.
   * Cada promoção contém um preço antigo e novo.
   */
  promotions?: ProductPromotionDetailsProps[];
  /**
   * Quando true, oculta o preço regular do produto
   * e apresenta apenas os preços das promoções.
   * @default false
   */
  showPriceWithPromotions?: boolean;
  /**
   * Callback executado quando o utilizador clica no botão de compra.
   * Recebe o id do produto como argumento.
   */
  onBuy?: (id: string | number) => void;
  /**
   * Callback executado quando o utilizador clica no botão de favorito.
   * Recebe o id do produto como argumento.
   */
  onFavorite?: (id: string | number) => void;
  /**
   * Callback executado quando o utilizador clica no botão de carrinho.
   * Recebe o id do produto como argumento.
   */
  onCart?: (id: string | number) => void;
}
