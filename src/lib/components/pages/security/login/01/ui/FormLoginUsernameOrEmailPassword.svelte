<script lang="ts" module>
  /**
   * @component FormLoginUsernameOrEmailPassword
   * Form de login com username ou email e senha. Wrapper fino de FormLogin variant="USERNAME_OR_EMAIL".
   *
   * @example svelte
   * <FormLoginUsernameOrEmailPassword onSubmit={(cred) => login(cred)} />
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
    isLoading?: boolean;
  };

  let {
    onSubmit,
    forgetPassword,
    socialLogins = [],
    inputLabelClass,
    inputClass,
    textClass,
    isLoading,
  }: Props = $props();
</script>

<FormLogin
  variant="USERNAME_OR_EMAIL"
  {onSubmit}
  {forgetPassword}
  {socialLogins}
  {isLoading}
  {inputLabelClass}
  {inputClass}
  {textClass}
/>
