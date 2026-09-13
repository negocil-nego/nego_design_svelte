<script lang="ts" module>
  /**
   * @component FormLoginEmailPassword02
   * Variant 02 form with email and password. Wrapper of FormLogin02 variant="EMAIL".
   *
   * @example svelte
   * <FormLoginEmailPassword02 onSubmit={(cred) => login(cred)} />
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

<FormLogin02 variant="EMAIL" {onSubmit} {forgetPassword} {socialLogins} {inputLabelClass} {inputClass} />
