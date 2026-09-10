/**
 * Props base para o componente de input de busca.
 */
export interface SearchItemProps {
    /** Callback acionado ao submeter a busca (enter ou clique no botão) */
    onSubmit?: (q: string) => void;
    /** Classe CSS personalizada para o botão de busca */
    buttonClass?: string;
    /** Placeholder exibido no campo de input */
    placeholder?: string;
    /** Classe CSS personalizada para o campo de input */
    inputClass?: string;
    /** Classe CSS personalizada para o ícone de busca */
    iconClass?: string;
}

/**
 * Props do SearchInput — input de busca completo com duas variantes visuais.
 * @extends SearchItemProps
 */
export interface SearchInputProps extends SearchItemProps {
    /**
     * Variante visual do input de busca.
     * 1 = borda completa ao redor;
     * 2 = apenas borda inferior (underline style).
     */
    variant?: 1 | 2;
}
