<script lang="ts">
    import Card01 from "$lib/components/core/card/01/Card01.svelte";
    import items from "$lib/components/core/card/data";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 md:mx-4">
        {#each items as item, i (i)}
            <Card01 {...item} isImageButtonMaximized isVideoButtonMaximized/>
        {/each}
    </section>
</div>
