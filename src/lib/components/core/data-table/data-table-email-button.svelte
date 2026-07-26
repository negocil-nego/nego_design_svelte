<script lang="ts">
    import type { ComponentProps } from "svelte";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import { ArrowUpDownIcon } from "@hugeicons/core-free-icons";
    import { Button } from "$lib/components/ui/button/index.js";

    let { variant = "ghost", ...restProps }: ComponentProps<typeof Button> =
        $props();
</script>

<Button {variant} {...restProps}>
    Email
    <HugeiconsIcon icon={ArrowUpDownIcon} size={16} class="ms-2" />
</Button>
