<script lang="ts" module>
  /**
   * Search input with full border (variant 1).
   * @component
   */
</script>

<script lang="ts">
  import type { SearchItemProps } from "../types";
  import SearchInputCore from "../shared/SearchInputCore.svelte";

  let { ...restProps }: SearchItemProps = $props();
</script>

<SearchInputCore {...restProps} variant={1} />
