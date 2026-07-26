<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import { DragDropVerticalIcon } from "@hugeicons/core-free-icons";
    import type { Attachment } from "svelte/attachments";
    let { attach }: { attach?: Attachment } = $props();
</script>

<Button
    {@attach attach}
    variant="ghost"
    size="icon"
    class="text-muted-foreground size-7 hover:bg-transparent"
>
    <HugeiconsIcon
        icon={DragDropVerticalIcon}
        size={12}
        class="text-muted-foreground"
    />
    <span class="sr-only">Drag to reorder</span>
</Button>
