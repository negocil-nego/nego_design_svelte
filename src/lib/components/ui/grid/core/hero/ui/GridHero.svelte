<script lang="ts">
  import type { Snippet } from "svelte";
  import Menu from "$lib/components/ui/nav/ui/Menu.svelte";
  import SimpleMenu from "$lib/components/ui/nav/ui/SimpleMenu.svelte";
  import ComplexMenu from "$lib/components/ui/nav/ui/ComplexMenu.svelte";
  import GridSlot from "../../shared/ui/GridSlot.svelte";
  import type { GridHeroProps } from "../types";

  let {
    items,
    menusProps,
    simpleMenu,
    complexMenu,
    children,
    className,
    titleClass,
    descriptionClass,
    gridClass,
    sectionClass,
  }: GridHeroProps & { children?: Snippet } = $props();
</script>

<header
  class="w-full relative z-10 flex flex-col justify-center items-center {className}"
>
  <div class="relative z-10 w-full flex flex-col items-center flex-1">
    {#if menusProps}
      {#if simpleMenu}
        <Menu navMenu={simpleMenu} {...menusProps} />
      {/if}
      {#if complexMenu}
        <Menu navMenu={complexMenu} {...menusProps} />
      {/if}
    {:else}
      {#if simpleMenu}
        <SimpleMenu {...simpleMenu} />
      {/if}
      {#if complexMenu}
        <ComplexMenu {...complexMenu} />
      {/if}
    {/if}

    <section
      class="flex flex-col justify-center items-center flex-1 w-full h-auto text-center px-4 {sectionClass}"
    >
      <GridSlot class={gridClass}>
        {#each items as item, i (`hero-${i}`)}
          <div
            class="relative overflow-hidden rounded-xl min-h-60 flex flex-col justify-end bg-gray-800 bg-cover bg-center bg-no-repeat"
            style={item.image ? `background-image: url('${item.image}')` : undefined}
          >
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="relative z-10 p-4 text-left w-full">
              <h2 class="text-white text-xl font-bold {titleClass}">
                {item.title}
              </h2>
              <p class="text-white/90 mt-2 {descriptionClass}">
                {item.description}
              </p>
            </div>
          </div>
        {/each}
      </GridSlot>

      {#if children}
        <div class="relative w-full flex justify-center items-center mt-4">
          {@render children()}
        </div>
      {/if}
    </section>
  </div>
</header>
