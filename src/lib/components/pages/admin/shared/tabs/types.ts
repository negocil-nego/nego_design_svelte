export type AdminTabsProps = {
    profileTab?: AdminProfileTabProps
    securityTab?: AdminSecurityTabProps
}

export type AdminTabBaseProps = {
    onSubmit?: (data: Record<string, string | string[] | boolean>) => void;
    isLoading?: boolean
    slotclass?: string
    /** Valores padrão dos inputs do Form (chave = name do input). */
    values?: Record<string, string | string[] | boolean>
}

/** Handler de submissão de uma secção do AdminProfileTab. */
export type AdminProfileSubmitHandler = (
    data: Record<string, string | string[] | boolean>,
) => void;

/** Valores padrão dos inputs de uma secção do AdminProfileTab. */
export type AdminProfileValues = Record<string, string | string[] | boolean>;

/**
 * Props do AdminProfileTab — aba de Perfil com 3 secções AdminIt:
 * 1. Dados pessoais (primeiro nome, sobrenome, email, telefone, nascimento e bio).
 * 2. Morada (número da rua, bairro, estado e geolocalização).
 * 3. Redes sociais (WhatsApp, Facebook, LinkedIn, TikTok e Instagram).
 * Cada secção tem o seu próprio Form, isLoading e onSubmit independentes.
 */
export type AdminProfileTabProps = {
    /** Classe CSS da coluna do conteúdo em cada AdminIt. */
    slotclass?: string
    /** Estado de carregamento do formulário de dados pessoais. */
    isLoadingUser?: boolean
    /** Estado de carregamento do formulário de morada. */
    isLoadingAddress?: boolean
    /** Estado de carregamento do formulário de redes sociais. */
    isLoadingSocial?: boolean
    onSubmitUser?: AdminProfileSubmitHandler
    onSubmitAddress?: AdminProfileSubmitHandler
    onSubmitSocial?: AdminProfileSubmitHandler
    valuesUser?: AdminProfileValues
    valuesAddress?: AdminProfileValues
    valuesSocial?: AdminProfileValues
}

/** Handler de submissão de uma secção do AdminSecurityTab. */
export type AdminSecuritySubmitHandler = (
    data: Record<string, string | string[] | boolean>,
) => void;

/** Valores padrão dos inputs de uma secção do AdminSecurityTab. */
export type AdminSecurityValues = Record<string, string | string[] | boolean>;

/**
 * Props do AdminSecurityTab — aba de Segurança com 4 secções AdminIt.
 * Cada secção tem o seu próprio Form, isLoading e onSubmit independentes.
 */
export type AdminSecurityTabProps = {
    /** Classe CSS da coluna do conteúdo em cada AdminIt. */
    slotclass?: string
    /** Estado de carregamento do formulário de alterar a senha. */
    isLoadingPassword?: boolean
    /** Estado de carregamento do formulário de alterar a email. */
    isLoadingEmail?: boolean
    /** Estado de carregamento do formulário de alterar a telefone. */
    isLoadingPhone?: boolean
    /** Estado de carregamento do formulário da secção de perigo. */
    isLoadingDanger?: boolean
    onSubmitPassword?: AdminSecuritySubmitHandler
    onSubmitEmail?: AdminSecuritySubmitHandler
    onSubmitPhone?: AdminSecuritySubmitHandler
    onSubmitDanger?: AdminSecuritySubmitHandler
    valuesPassword?: AdminSecurityValues
    valuesEmail?: AdminSecurityValues
    valuesPhone?: AdminSecurityValues
    valuesDanger?: AdminSecurityValues
}