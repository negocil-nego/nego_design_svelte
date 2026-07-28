<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type { LoginRequestDto } from "../../types";

  /** Form de login com username e senha. Wrapper fino de FormLogin variant="USERNAME". */
  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
  };

  let { onSubmit }: Props = $props();
</script>

<FormLogin variant="USERNAME" {onSubmit} />
