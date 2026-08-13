import type { IconSvgElement } from "@hugeicons/svelte";

/** Item de breadcrumb (ex: Home / Turismo / Hotel Baía Azul). */
export interface ProductDetailsBreadcrumbItem {
  label: string;
  href?: string;
}

/** Tag/badge exibida no produto (ex: Localização, categoria). */
export interface ProductDetailsTag {
  icon?: IconSvgElement;
  text: string;
}

/** Imagem da galeria do produto. */
export interface ProductDetailsImage {
  src: string;
  alt?: string;
}

/** Localização exibida no mapa da página de detalhes. */
export interface ProductDetailsLocation {
  label?: string;
  address?: string;
  /** URL do embed do mapa (OpenStreetMap, Google Maps, etc). */
  mapUrl?: string;
}

/** Avaliação de um cliente sobre o produto. */
export interface ProductDetailsReview {
  id: string | number;
  author: string;
  rating: number;
  date?: string;
  comment: string;
}

/** Aba de informação adicional (descrição, avaliações, detalhes). */
export interface ProductDetailsTab {
  id: string;
  label: string;
}

/** Dados completos apresentados na página de detalhes do produto. */
export interface ProductDetailsData {
  id: string | number;
  breadcrumb: ProductDetailsBreadcrumbItem[];
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags?: ProductDetailsTag[];
  gallery: ProductDetailsImage[];
  location?: ProductDetailsLocation;
  rating?: number;
  reviewsCount?: number;
  reviews?: ProductDetailsReview[];
  newPrice?: string | number;
  oldPrice?: string | number;
  currency?: string;
  quantityAvailable?: number;
  features?: string[];
  tabs?: ProductDetailsTab[];
  buttonBuyText?: string;
  isCart?: boolean;
  isFavorite?: boolean;
}

/** Propriedades do componente principal. */
export interface ProductDetailsProps {
  /** Variante do layout: 1, 2, 3 ou 4. */
  varient?: 1 | 2 | 3 | 4;
  /** Dados completos do produto. */
  data: ProductDetailsData;
  /** Quando true, todos os blocos exibem Skeleton. */
  isLoading?: boolean;
  /** Callback do botão de compra. */
  onBuy?: (id: string | number) => void;
  /** Callback do botão de favorito. */
  onFavorite?: (id: string | number) => void;
  /** Callback do botão de carrinho. */
  onCart?: (id: string | number) => void;
}
