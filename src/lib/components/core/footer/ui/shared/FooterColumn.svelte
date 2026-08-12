<script lang="ts">
  import type { FooterColumnProps } from "../../types";

  let { title, items }: FooterColumnProps = $props();
</script>

<div class="min-w-27.5">
  <h3 class="mb-4 text-sm font-semibold">{title}</h3>
  <ul class="space-y-3">
    {#each items as item, i (i)}
      <li>
        <a href={item.href ?? "#"} class="text-sm transition-colors">
          {item.text}
        </a>
      </li>
    {/each}
  </ul>
</div>
