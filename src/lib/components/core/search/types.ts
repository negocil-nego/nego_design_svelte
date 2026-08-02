/** Props for the search input component. */
export interface SearchItemProps {
    /** Callback fired when the user submits the search. */
    onSubmit?: (q: string) => void;
    /** Placeholder text for the input field. */
    buttonClass?: string;
    placeholder?: string;
    inputClass?: string;
    iconClass?: string;
}

/** Extended search input props with a visual variant option. */
export interface SearchInputProps extends SearchItemProps {
    /** Visual variant: 1 = full border, 2 = bottom border only. */
    variant?: 1 | 2;
}