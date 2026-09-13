<script lang="ts" module>
  /**
   * @component FormLoginUsernamePassword
   * Form de login com username e senha. Wrapper fino de FormLogin variant="USERNAME".
   *
   * @example svelte
   * <FormLoginUsernamePassword onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type { LoginRequestDto, LinkProps, SocialLoginItem } from "../../types";

  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
    socialLogins?: SocialLoginItem[];
    inputLabelClass?: string;
    inputClass?: string;
  };

  let { onSubmit, forgetPassword, socialLogins = [], inputLabelClass, inputClass }: Props = $props();
</script>

<FormLogin variant="USERNAME" {onSubmit} {forgetPassword} {socialLogins} {inputLabelClass} {inputClass} />
