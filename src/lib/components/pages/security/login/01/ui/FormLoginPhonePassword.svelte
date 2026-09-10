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
  import type { LoginRequestDto, LinkProps, SocialLoginItem } from "../../types";

  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
    socialLogins?: SocialLoginItem[];
  };

  let { onSubmit, forgetPassword, socialLogins = [] }: Props = $props();
</script>

<FormLogin variant="PHONE" {onSubmit} {forgetPassword} {socialLogins} />
