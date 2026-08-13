import type { IconSvgElement } from "@hugeicons/svelte";

/**
 * Props do bloco de usuário logado na sidebar.
 * Contém dados do usuário (nome, email, avatar), ações rápidas
 * e callback de logout.
 */
export interface NavUserSidebarProps {
    /** Dados do utilizador autenticado */
    user: {
        /** Nome completo do utilizador */
        name: string;
        /** Email do utilizador */
        email: string;
        /** URL da imagem de perfil/avatar (opcional) */
        avatar?: string
    }
    /** Lista de ações rápidas (ex: "Perfil", "Definições") */
    actions?: {
        /** Texto exibido na ação */
        label: string;
        /** Ícone SVG da ação */
        icon: IconSvgElement;
        /** Callback acionado ao clicar na ação */
        onclick?: () => void;
    }[];
    /** Callback acionado ao clicar no botão de terminar sessão */
    onLogout?: () => void
}
