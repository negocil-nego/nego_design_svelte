<script lang="ts" module>
  /**
   * @component FormLoginUsernamePassword02
   * Variant 02 form with username and password. Wrapper of FormLogin02 variant="USERNAME".
   *
   * @example svelte
   * <FormLoginUsernamePassword02 onSubmit={(cred) => login(cred)} />
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

<FormLogin02 variant="USERNAME" {onSubmit} {forgetPassword} {socialLogins} {inputLabelClass} {inputClass} />
