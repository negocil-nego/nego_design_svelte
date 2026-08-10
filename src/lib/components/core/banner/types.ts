/**
 * Ad promo banner card. Left strip highlights the tag/label text,
 * main area shows a two-tone headline plus a CTA button.
 * @component
 */
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
}