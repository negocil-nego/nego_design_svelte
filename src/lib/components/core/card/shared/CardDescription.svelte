<script lang="ts">
    import { Message01Icon } from "@hugeicons/core-free-icons";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import TruncatableText from "./TruncatableText.svelte";
    import { t } from "$lib/i18n";
    
    type CardDescriptionProps = {
        content?: string;
    };

    let { content }: CardDescriptionProps = $props();
</script>

{#if content}
    <div class="mb-1 text-[14px] flex items-center gap-1">
        <HugeiconsIcon icon={Message01Icon} class="h-4 w-4" />
        <div>{$t("label.description")}</div>
    </div>
    <TruncatableText
        text={content}
        class="text-justify text-[13px] text-gray-800  dark:text-gray-50 mt-3 my-4"
    />
{/if}
