<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type { Credential } from "../data/page-props";

  /** Form de login com email e senha. Wrapper fino de FormLogin variant="EMAIL". */
  type Props = {
    onSubmit?: (credential: Credential) => void;
  };

  let { onSubmit }: Props = $props();
</script>

<FormLogin variant="EMAIL" {onSubmit} />
