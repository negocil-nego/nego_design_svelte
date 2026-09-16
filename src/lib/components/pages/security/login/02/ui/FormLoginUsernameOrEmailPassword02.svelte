<script lang="ts" module>
  /**
   * @component FormLoginUsernameOrEmailPassword02
   * Variant 02 form with username or email and password. Wrapper of FormLogin02 variant="USERNAME_OR_EMAIL".
   *
   * @example svelte
   * <FormLoginUsernameOrEmailPassword02 onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import FormLogin02 from "./FormLogin02.svelte";
  import type { LoginRequestDto, LinkProps, SocialLoginItem } from "../../types";

  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
    socialLogins?: SocialLoginItem[];
    inputLabelClass?: string;
    inputClass?: string;
    isLoading?: boolean;
  };

  let { onSubmit, forgetPassword, socialLogins = [], inputLabelClass, inputClass, isLoading }: Props = $props();
</script>

<FormLogin02 variant="USERNAME_OR_EMAIL" {onSubmit} {forgetPassword} {socialLogins} {inputLabelClass} {inputClass} {isLoading} />
