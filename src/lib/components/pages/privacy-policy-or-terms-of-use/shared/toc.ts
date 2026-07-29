/**
 * Constrói a tabela de conteúdos (TOC) a partir das secções do documento.
 * Achata a árvore de secções (com subsections) numa lista plana.
 * @param sections - Secções do documento
 * @returns Lista de itens para a TOC
 */
import type { DocSection, TocItem } from "../types";

export function buildToc(sections: DocSection[]): TocItem[] {
    const result: TocItem[] = [];

    for (const section of sections) {
        result.push({
            id: section.id,
            label: section.number ? `${section.number}. ${section.title}` : section.title,
            level: section.level ?? 1,
        });

        if (section.subsections) {
            result.push(...buildToc(section.subsections));
        }
    }

    return result;
}
