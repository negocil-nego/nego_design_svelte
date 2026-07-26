type $$ComponentProps = {
    checked?: boolean;
    indeterminate?: boolean;
    onCheckedChange?: (value: boolean) => void;
    [key: string]: unknown;
};
declare const DataTableCheckbox: import("svelte").Component<$$ComponentProps, {}, "checked" | "indeterminate">;
type DataTableCheckbox = ReturnType<typeof DataTableCheckbox>;
export default DataTableCheckbox;
