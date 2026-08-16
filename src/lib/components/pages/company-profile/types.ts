import type { IconSvgElement } from "@hugeicons/svelte";

/**
 * Item de estatística exibido na faixa de dados do banner
 * (ex: "Setor de atuação", "Anos de Atuação", "Localização").
 */
export interface ProfileStatItem {
  /** Rótulo da estatística (ex: "Setor de atuação"). */
  label: string;
  /** Valor exibido (ex: "Papel", "8", "Benguela"). */
  value: string;
}

/**
 * Imagem usada na galeria ou na capa do perfil.
 */
export interface ProfileImage {
  /** Caminho ou URL completa da imagem (obrigatório). */
  src: string;
  /** Texto alternativo para acessibilidade. */
  alt?: string;
  type?: "image" | "video";
}

/**
 * Item de navegação usado pela Sidebar e pelo menu de badges (mobile).
 * O `id` deve corresponder ao `id` da secção (elemento âncora) na página.
 */
export interface ProfileNavItem {
  /** Identificador único da secção (usado como âncora de scroll). */
  id: string;
  /** Rótulo visível do item de navegação. */
  label: string;
}

/**
 * Dados do banner/apresentação da empresa: capa, logótipo, nome,
 * país, botão de contacto e faixa de estatísticas.
 */
export interface ProfileBannerData {
  /** Imagem(ns) de capa exibidas no topo do banner. */
  coverImages: ProfileImage[];
  /** URL do logótipo da empresa. */
  logo?: string;
  /** Nome da empresa/fábrica. */
  name: string;
  /** Nome do país (ex: "Angola"). */
  countryLabel?: string;
  /** Emoji ou URL da bandeira do país. */
  countryFlag?: string;
  /** Texto do botão de contacto (padrão: "Contactar fábrica"). */
  contactLabel?: string;
  /** Estatísticas rápidas exibidas por baixo do nome (sector, anos, etc). */
  stats?: ProfileStatItem[];
}

/**
 * Dados da secção "Sobre a Empresa".
 */
export interface ProfileAboutData {
  /** Imagem ilustrativa da empresa (ex: fachada, fábrica). */
  image?: string;
  /** Texto alternativo da imagem. */
  imageAlt?: string;
  /** Título da secção (padrão: "Sobre a Empresa"). */
  title?: string;
  /** Parágrafos de texto descritivo da empresa. */
  paragraphs: string[];
}

/**
 * Dados da secção "Galeria".
 */
export interface ProfileGalleryData {
  /** Título da secção (padrão: "Galeria da {name}"). */
  title?: string;
  /** Lista de imagens/vídeos da galeria. */
  images: ProfileImage[];
}

/**
 * Dados completos apresentados na página de perfil da empresa/fábrica.
 */
export interface CompanyProfileData {
  /** Identificador único do perfil. */
  id: string | number;
  /** Dados do banner (capa, nome, estatísticas). */
  banner: ProfileBannerData;
  /** Dados da secção "Sobre a Empresa". */
  about: ProfileAboutData;
  /** Dados da secção "Galeria". */
  gallery: ProfileGalleryData;
}

/**
 * Propriedades do componente principal CompanyProfile.
 */
export interface CompanyProfileProps {
  /** Dados completos do perfil a serem exibidos. */
  data?: CompanyProfileData;
  /**
   * Estado de carregamento.
   * Quando true, todos os blocos exibem Skeletons no lugar do conteúdo.
   * @default false
   */
  isLoading?: boolean;
  onWhatsapp?: (id: string | number) => void;
  onEmail?: (id: string | number) => void;  /** Callback executado quando o utilizador clica em copiar link. */
  onCopyLink?: (id: string | number) => void;
  /** Callback executado quando o utilizador clica em partilhar. */
  onShare?: (id: string | number) => void;
}

export interface ProfileBannerTag {
  label: string;
  value: string;
  icon?: string | IconSvgElement;
}