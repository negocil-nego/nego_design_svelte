export interface HeroButtonProps {
    label: string;
    href: string;
    variant?: "primary" | "outline" | "ghost";
    className?: string;
    onClick?: () => void;
}

export interface HeroSimpleProps {
    title?: string;
    subTitle?: string;
    description?: string;
    image?: string;
    buttons?: HeroButtonProps[];

    titleClass?: string;
    subTitleClass?: string;
    descriptionClass?: string;
    imageClass?: string;
}