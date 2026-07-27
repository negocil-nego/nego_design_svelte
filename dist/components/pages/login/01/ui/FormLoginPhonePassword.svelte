<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type { Credential } from "../data/page-props";

  /** Form de login com telefone e senha. Wrapper fino de FormLogin variant="PHONE". */
  type Props = {
    onSubmit?: (credential: Credential) => void;
  };

  let { onSubmit }: Props = $props();
</script>

<FormLogin variant="PHONE" {onSubmit} />
