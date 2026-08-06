<script lang="ts">
    import items from "$lib/components/core/card/profile/data";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
    <section
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-2 md:mx-4"
    >
        {#each items as item, i (i)}
            <div>sss</div>
        {/each}
    </section>
</div>
