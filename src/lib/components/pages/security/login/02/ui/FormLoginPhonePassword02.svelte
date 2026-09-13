<script lang="ts" module>
  /**
   * @component FormLoginPhonePassword02
   * Variant 02 form with phone and password. Wrapper of FormLogin02 variant="PHONE".
   *
   * @example svelte
   * <FormLoginPhonePassword02 onSubmit={(cred) => login(cred)} />
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
  };

  let { onSubmit, forgetPassword, socialLogins = [], inputLabelClass, inputClass }: Props = $props();
</script>

<FormLogin02 variant="PHONE" {onSubmit} {forgetPassword} {socialLogins} {inputLabelClass} {inputClass} />
