<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import {
        CheckmarkCircle02Icon,
        Loading03Icon,
    } from "@hugeicons/core-free-icons";
    import type { Row } from "@tanstack/table-core";
    import type { Schema } from "./schemas.js";
    let { row }: { row: Row<Schema> } = $props();
</script>

<Badge variant="outline" class="text-muted-foreground px-1.5">
    {#if row.original.status === "Done"}
        <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            class="text-green-500 dark:text-green-400"
        />
    {:else}
        <HugeiconsIcon icon={Loading03Icon} />
    {/if}
    {row.original.status}
</Badge>
