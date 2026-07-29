<script lang="ts">
  import type { PageResetPasswordProps } from "./types";
  import PageResetPassword01 from "./01/ui/PageResetPassword01.svelte";

  /**
   * Página de redefinição de senha.
   * @property {"01"} varient - Variante do layout
   */
  type Props = {
    varient?: "01";
  };

  let { ...props }: PageResetPasswordProps & Props = $props();
</script>

<PageResetPassword01 {...props} />
