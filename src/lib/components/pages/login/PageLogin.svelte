<script lang="ts">
  import type { PageLoginProps } from "./01/data/page-props";
  import PageLogin01 from "./01/ui/PageLogin01.svelte";

  type Props = {
    varient?: "01";
  };

  let { ...props }: PageLoginProps & Props = $props();
</script>

<PageLogin01 {...props} />
