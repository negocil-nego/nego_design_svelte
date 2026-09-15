<script lang="ts" module>
  /**
   * @component FormLoginEmailPassword03
   * Variant 03 form with email and password. Wrapper of FormLogin03 variant="EMAIL".
   *
   * @example svelte
   * <FormLoginEmailPassword03 onSubmit={(cred) => login(cred)} />
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
    isLoading?: boolean;
  };

  let { onSubmit, forgetPassword, socialLogins = [], inputLabelClass, inputClass, isLoading }: Props = $props();
</script>

<FormLogin03 variant="EMAIL" {onSubmit} {forgetPassword} {socialLogins} {inputLabelClass} {inputClass} {isLoading} />
