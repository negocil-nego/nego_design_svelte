<script lang="ts">
    import type { ItemGridProps } from "../../data/types";
    import DescriptionGrid from "../shared/DescriptionGrid.svelte";
    import IconRenderGrid from "../shared/IconRenderGrid.svelte";
    import TitleGrid from "../shared/TitleGrid.svelte";

    let {
        id,
        icon,
        title,
        isLoading,
        iconClass,
        titleClass,
        description,
        descriptionClass,
        onClick,
    }: ItemGridProps = $props();
</script>

<button
    onclick={() => {
        if (id && onClick) onClick(id);
    }}
    class="flex flex-col justify-center items-center gap-2 hover:bg-primary/30 rounded-xl"
>
    <IconRenderGrid {icon} {iconClass} {isLoading} />
    <TitleGrid {titleClass} {title} {isLoading} />
    <DescriptionGrid {descriptionClass} {description} {isLoading} />
</button>
