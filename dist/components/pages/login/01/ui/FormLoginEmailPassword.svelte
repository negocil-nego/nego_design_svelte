<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type { LoginRequestDto, LinkProps } from "../../types";

  /** Form de login com email e senha. Wrapper fino de FormLogin variant="EMAIL". */
  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
  };

  let { onSubmit, forgetPassword }: Props = $props();
</script>

<FormLogin variant="EMAIL" {onSubmit} {forgetPassword} />
