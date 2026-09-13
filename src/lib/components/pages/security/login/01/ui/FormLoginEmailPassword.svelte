<script lang="ts" module>
  /**
   * @component FormLoginEmailPassword
   * Form de login com email e senha. Wrapper fino de FormLogin variant="EMAIL".
   *
   * @example svelte
   * <FormLoginEmailPassword onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import FormLogin from "./FormLogin.svelte";
  import type {
    LoginRequestDto,
    LinkProps,
    SocialLoginItem,
  } from "../../types";

  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
    socialLogins?: SocialLoginItem[];
    inputLabelClass?: string;
    inputClass?: string;
    textClass?: string;
  };

  let {
    onSubmit,
    forgetPassword,
    socialLogins = [],
    inputLabelClass,
    inputClass,
    textClass,
  }: Props = $props();
</script>

<FormLogin
  variant="EMAIL"
  {onSubmit}
  {forgetPassword}
  {socialLogins}
  {inputLabelClass}
  {inputClass}
  {textClass}
/>
