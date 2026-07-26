export interface CarouselItem {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl?: string;
}
export interface CarouselProps {
    items: CarouselItem[];
    varient: 'NUMBER' | 'POINTER';
}
