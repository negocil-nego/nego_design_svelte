<script lang="ts">
  let { children } = $props();
</script>

<div
  class="container-fixed flex flex-col justify-center items-center gap-2 md:gap-5 md:h-125 lg:h-225"
></div>

{@render children()}
