import type { CarouselItem, CarouselItemType } from "../../../../../core/carousel/data/CarouselModel";
import type { Snippet } from "svelte";
import type { AuthFormType, LinkProps } from "../data/page-props";
type Props = {
    carousel?: CarouselItem[];
    varient?: CarouselItemType;
    title?: string;
    children?: Snippet;
    formType?: AuthFormType;
    privacyPolicy?: LinkProps;
    termsOfService?: LinkProps;
};
declare const PageLogin: import("svelte").Component<Props, {}, "">;
type PageLogin = ReturnType<typeof PageLogin>;
export default PageLogin;
