<script lang="ts">
    import Card01 from "$lib/components/core/card/01/Card01.svelte";
    import items from "$lib/components/core/card/data";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
    <section
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 md:mx-4"
    >
        {#each items as item, i (i)}
            <Card01 
                {...item} 
                onFavoriteClick={(id) => console.log(id)}
                onButtonProfile={(id) => console.log(id)}
                onButtonDetails={(id) => console.log(id)}
                isImageButtonMaximized 
                isVideoButtonMaximized
                buttonProfileClass="bg-transparent text-[#1a2420] dark:text-white border border-[#1a2420] dark:border-gray-600 cursor-pointer"
                buttonDetailsClass="bg-gradient-left cursor-pointer"
            />
        {/each}
    </section>
</div>
