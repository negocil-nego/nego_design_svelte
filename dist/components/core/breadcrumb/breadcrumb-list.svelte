<script lang="ts">
  import * as Breadcrumb from "../../ui/breadcrumb/index.js";

  type Props = {
    items: {
      url?: string;
      label: string;
    }[];
  };

  let { items }: Props = $props();
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    {#each items as item, i (item.label)}
      {@const isLast = i === items.length - 1}

      <Breadcrumb.Item class={isLast ? "" : "hidden md:block"}>
        {#if isLast}
          <Breadcrumb.Page>{item.label}</Breadcrumb.Page>
        {:else}
          <Breadcrumb.Link href={item.url ?? "##"}>{item.label}</Breadcrumb.Link>
        {/if}
      </Breadcrumb.Item>

      {#if !isLast}
        <Breadcrumb.Separator class="hidden md:block" />
      {/if}
    {/each}
  </Breadcrumb.List>
</Breadcrumb.Root>