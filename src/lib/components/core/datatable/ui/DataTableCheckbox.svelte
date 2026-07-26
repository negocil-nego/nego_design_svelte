<script lang="ts">
    import { Checkbox } from "$lib/components/ui/checkbox";

    let {
        checked = $bindable(false),
        indeterminate = $bindable(false),
        onCheckedChange,
        ...restProps
    }: {
        checked?: boolean;
        indeterminate?: boolean;
        onCheckedChange?: (value: boolean) => void;
        [key: string]: unknown;
    } = $props();
</script>

<Checkbox
    bind:checked
    bind:indeterminate
    onCheckedChange={(v) => onCheckedChange?.(!!v)}
    {...restProps}
/>
