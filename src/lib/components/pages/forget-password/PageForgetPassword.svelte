<script lang="ts">
  import type { PageForgetPasswordProps } from "./types";
  import PageForgetPassword01 from "./01/ui/PageForgetPassword01.svelte";

  /**
   * Página de recuperação de senha.
   * @property {"01"} varient - Variante do layout
   * @property {CarouselItem[]} carousel - Itens do carousel hero
   * @property {string} title - Título do hero
   * @property {(req: ForgetPasswordRequestDto) => void} onSubmit - Callback ao submeter email
   */
  type Props = {
    varient?: "01";
  };

  let { ...props }: PageForgetPasswordProps & Props = $props();
</script>

<PageForgetPassword01 {...props} />
