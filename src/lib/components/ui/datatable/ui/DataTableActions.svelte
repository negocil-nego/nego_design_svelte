<script lang="ts" generics="T">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
    import type { CellContext } from "$lib/components/ui/data-table";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
        
    let { row }: CellContext<T, unknown> = $props();
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        {#snippet child({ props })}
            <Button {...props} variant="ghost" class="size-8 p-0">
                <ImageHugeicons icon="more-horizontal" class="size-4" />
                <span class="sr-only">Open menu</span>
            </Button>
        {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
        <DropdownMenu.Item onclick={() => console.log(row.original)}
            >Copy</DropdownMenu.Item
        >
        <DropdownMenu.Item onclick={() => console.log(row.original)}
            >Delete</DropdownMenu.Item
        >
    </DropdownMenu.Content>
</DropdownMenu.Root>
