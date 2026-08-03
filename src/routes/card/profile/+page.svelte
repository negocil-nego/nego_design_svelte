<script lang="ts">
    import items from "$lib/components/core/card/profile/data";
    import CardProfile from "$lib/components/core/card/profile/CardProfile.svelte";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
    <section
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 md:mx-4"
    >
        {#each items as item, i (i)}
            <CardProfile 
                {...item} 
                variant={1}
                onFavoriteClick={(id) => console.log(id)}
                onButtonProfile={(id) => console.log(id)}
                onButtonDetails={(id) => console.log(id)}
                buttonProfileClass="bg-transparent text-[#1a2420] dark:text-white border border-[#1a2420] dark:border-gray-600 cursor-pointer"
                buttonDetailsClass="bg-gradient-left cursor-pointer"
            />
        {/each}
    </section>
</div>
