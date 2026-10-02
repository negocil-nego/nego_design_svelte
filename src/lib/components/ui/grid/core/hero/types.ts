import type { SimpleMenuProps } from "$lib/types"
import type { ComplexMenuProps, MenuProps } from "$lib/components/ui/nav/data/types"

/**
 * Item individual do GridHero — bloco com imagem, título e descrição.
 */
export interface GridHeroItem {
    /** Título do bloco hero */
    title: string,
    /** URL da imagem de fundo do bloco */
    image: string,
    /** Descrição do bloco */
    description: string,
}

/**
 * Props do GridHero — versão em grid do hero principal,
 * apresenta os itens em grade em vez de slides rotativos.
 */
export interface GridHeroProps {
    /** Lista de itens do hero */
    items: GridHeroItem[],
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
    /** Classe CSS adicional para o container do grid */
    gridClass?: string
}
