/** Props do componente AdCardBanner — banner de anúncio com faixa lateral colorida e CTA. */
export type BannerProps = {
    /** Texto mostrado na faixa lateral colorida, ex: "Este anúncio pode ser seu." */
    tagText: string;
    /** Primeira parte do título (renderizada na cor de destaque âmbar) */
    titleHighlight: string;
    /** Segunda parte do título (renderizada na cor verde de destaque) */
    titleMain: string;
    /** Texto do botão CTA */
    buttonText?: string;
    /** Chamado quando o botão CTA é clicado */
    onClickButton?: () => void;
    /** href opcional — se fornecido, todo o card navega ao clicar */
    href?: string;
    /** Classe CSS adicional para o container */
    class?: string;
    /** Classe CSS para a parte highlight do título */
    titleHighlightClass?: string;
    /** Classe CSS para a parte principal do título */
    titleMainClass?: string;
    /** Classe CSS para o fundo do título */
    titleBgClass?: string;
    /** Classe CSS para o texto da tag lateral */
    tagTextClass?: string;
    /** Classe CSS para o botão */
    buttonClass?: string;
    /** Classe CSS para o fundo da tag lateral */
    tagBgClass?: string;
}

/** Alias para BannerProps — props do componente AdCardBanner. */
export type AdCardBannerProps = BannerProps;

export type NotificationBannerProps = {
    /** Strong text before the separator, e.g. "GeneriCon 2023" */
    strongText?: string;
    /** Main description text */
    description: string;
    /** CTA button label */
    ctaText?: string;
    /** CTA button href */
    ctaHref?: string;
    /** Called when the CTA button is clicked */
    onCtaClick?: () => void;
    /** Called when the dismiss button is clicked */
    onDismiss?: () => void;
    /** Background class, default: bg-gray-800/50 */
    bgClass?: string;
    /** Text class for the description */
    textClass?: string;
    /** CTA button class */
    ctaClass?: string;
    class?: string;
}

/**
 * "Let's get in touch" style CTA banner: bold title, supporting copy,
 * and up to two pill-shaped action buttons, with a concentric-ring
 * decoration bleeding off the right edge.
 * @component
 */
export type CtaCardBannerProps = {
    title: string;
    description?: string;
    primaryText: string;
    secondaryText?: string;
    onClickPrimary?: () => void;
    onClickSecondary?: () => void;
    primaryHref?: string;
    secondaryHref?: string;
    class?: string;
    rings?: Array<{ size: number, color: string }>;
}

/**
 * CTA banner com imagem de destaque em fundo gradiente.
 * Título, descrição e até dois CTAs (primário e secundário), cada um com
 * texto, href e/ou callback de clique, além da imagem e seus atributos.
 * Usa `bg-gradient` como fundo padrão (customizável via `containerClass`).
 * @component
 */
export type CtaCardImageBannerProps = {
    /** Título principal do banner. */
    title: string;
    /** Texto de apoio / descrição. */
    description?: string;
    /** Texto do CTA primário. */
    primaryText: string;
    /** href do CTA primário (link). */
    primaryHref?: string;
    /** Chamado ao clicar no CTA primário. */
    onClickPrimary?: () => void;
    /** Texto do CTA secundário. */
    secondaryText?: string;
    /** href do CTA secundário (link). */
    secondaryHref?: string;
    /** Chamado ao clicar no CTA secundário. */
    onClickSecondary?: () => void;
    /** URL da imagem de destaque. */
    imageSrc?: string;
    /** Texto alternativo da imagem. */
    imageAlt?: string;
    /** Largura da imagem (atributo width). */
    imageWidth?: number;
    /** Altura da imagem (atributo height). */
    imageHeight?: number;
    /** Classe CSS adicional para o artigo (fundo). */
    class?: string;
    /** Classe CSS do container da imagem. */
    imageContainerClass?: string;
} 