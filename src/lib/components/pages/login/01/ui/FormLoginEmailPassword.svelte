<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type { LoginRequestDto } from "../../types";

  /** Form de login com email e senha. Wrapper fino de FormLogin variant="EMAIL". */
  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
  };

  let { onSubmit }: Props = $props();
</script>

<FormLogin variant="EMAIL" {onSubmit} />
