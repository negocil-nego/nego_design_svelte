export type NegoDesignProps = {
    /** Custom translations per language. Merged with the library's base translations. */
    translations?: Record<string, Record<string, string>>;
    /** Conteúdo da aplicação */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: any;
}