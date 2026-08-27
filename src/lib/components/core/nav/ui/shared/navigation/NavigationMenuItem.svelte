<script lang="ts">
  import type { NavigationMenuItemProps } from "../../../data/types";

  let { label, href, textClass }: NavigationMenuItemProps = $props();
</script>

<li>
  <a
    {href}
    class="inline-flex h-9 w-max items-center justify-center rounded-2xl px-4.5 py-2.5 text-sm font-medium transition-all outline-none select-none hover:bg-muted focus:bg-muted focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 {textClass}"
  >
    {label}
  </a>
</li>
