<script lang="ts">
    import type { AdminItProps } from "./types";

    let { title, description, slotclass, className, children }: AdminItProps =
        $props();
</script>

<div
    class="flex flex-col md:flex-row md:justify-between bg-gray-50 dark:bg-background border p-3 md:p-5 rounded-lg {className}"
>
    <div class="space-y-2 md:space-y-5">
        {#if title}
            <div class="text-bold">{title}</div>
        {/if}
        {#if description}
            <div
                class="line-clamp-3 md:line-clamp-none md:w-100 text-gray-600 dark:text-white text-[12px]"
            >
                {description}
            </div>
        {/if}
    </div>
    <div class={slotclass}>
        {@render children()}
    </div>
</div>
