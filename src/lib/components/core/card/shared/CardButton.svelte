<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/svelte";

    type CardButtonProps = {
        id: string | number;
        icon: IconSvgElement;
        isFlex?: boolean;
        className?: string;
        text: string;
        onClick: (id: string | number) => void;
    };

    let { 
        id, 
        icon, 
        isFlex, 
        className, 
        text, 
        onClick 
    }: CardButtonProps = $props();
</script>

<Button
    class="{isFlex ? 'flex-1' : ''} {className}"
    onclick={() => onClick(id)}
>
    <HugeiconsIcon {icon} />
    <span>{text}</span>
</Button>
