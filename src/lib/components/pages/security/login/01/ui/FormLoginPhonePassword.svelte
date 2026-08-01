<script lang="ts" module>
  /**
   * @component FormLoginPhonePassword
   * Form de login com telefone e senha. Wrapper fino de FormLogin variant="PHONE".
   *
   * @example svelte
   * <FormLoginPhonePassword onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type { LoginRequestDto, LinkProps } from "../../types";

  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
  };

  let { onSubmit, forgetPassword }: Props = $props();
</script>

<FormLogin variant="PHONE" {onSubmit} {forgetPassword} />
