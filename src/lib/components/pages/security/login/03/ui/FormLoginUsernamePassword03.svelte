<script lang="ts" module>
  /**
   * @component FormLoginUsernamePassword03
   * Variant 03 form with username and password. Wrapper of FormLogin03 variant="USERNAME".
   *
   * @example svelte
   * <FormLoginUsernamePassword03 onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import FormLogin03 from "./FormLogin03.svelte";
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

<FormLogin03 variant="USERNAME" {onSubmit} {forgetPassword} {socialLogins} {inputLabelClass} {inputClass} />
