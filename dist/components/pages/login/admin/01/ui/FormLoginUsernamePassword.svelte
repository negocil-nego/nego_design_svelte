<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type { Credential } from "../data/page-props";

  type Props = {
    onSubmit?: (credential: Credential) => void;
  };

  let { onSubmit }: Props = $props();
</script>

<FormLogin variant="USERNAME" {onSubmit} />
