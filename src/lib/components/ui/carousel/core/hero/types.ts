import type { SimpleMenuProps } from "$lib/types"
import type { ComplexMenuProps, MenuProps, MenuVarientProps } from "$lib/components/ui/nav/data/types"



/**
 * Item individual do CarouselHero — slide com imagem,
 * título e descrição.
 */
export interface CarouselHeroItem {
    /** Título do slide hero */
    title: string,
    /** URL da imagem de fundo do slide */
    image: string,
    /** Descrição do slide */
    description: string,
}

/**
 * Props do CarouselHero — carousel hero principal (ex: página de login)
 * com slides em fullscreen e menu de navegação sobreposto.
 */
export interface CarouselHeroProps {
    /** Lista de slides do hero */
    items: CarouselHeroItem[],
    /** Configuração do menu de navegação sobreposto */
    complexMenu?: ComplexMenuProps,
    simpleMenu?: SimpleMenuProps,
    menusProps?: MenuProps,
    /** Classe CSS adicional para o container */
    className?: string
    /** Classe CSS personalizada para o título */
    titleClass?: string
    /** Classe CSS personalizada para a descrição */
    descriptionClass?: string
    sectionClass?: string
}
