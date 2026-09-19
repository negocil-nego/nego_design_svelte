export type CardMethod = "email" | "phone" | "whatsapp";

export type CardEmailPhoneWhatsappItem = {
    id: CardMethod;
    title: string;
    subtitle?: string;
    value?: string;
    imageUrl?: string;
};

export type CardEmailPhoneWhatsappProps = {
    /** Lista de opções disponíveis. */
    items?: CardEmailPhoneWhatsappItem[];
    /** Opções visíveis (IDs). Se omitido, mostra todas. */
    visible?: CardMethod[];
    /** Item seleccionado (bindable). */
    selected?: CardMethod;
    /** Callback ao seleccionar uma opção. */
    onSelect?: (method: CardMethod) => void;
    /** Classe CSS adicional do container. */
    className?: string;
};
