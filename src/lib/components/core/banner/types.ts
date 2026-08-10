export type BannerProps = {
    /** Text shown stacked inside the amber side strip, e.g. "Este anúncio pode ser seu." */
    tagText: string;
    /** First part of the headline (rendered in the amber accent color) */
    titleHighlight: string;
    /** Second part of the headline (rendered in the green accent color) */
    titleMain: string;
    /** CTA button label */
    buttonText?: string;
    /** Called when the CTA button is clicked */
    onClickButton?: () => void;
    /** Optional href — if provided, the whole card navigates on click */
    href?: string;
    class?: string;

    titleHighlightClass?: string;
    titleMainClass?: string;
    titleBgClass?: string;
    tagTextClass?: string;
    buttonClass?: string;
    tagBgClass?: string;
}

export type BannerNotificationProps = {
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
