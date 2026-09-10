<script lang="ts" module>
  /**
   * @component FormLoginPhonePassword03
   * Variant 03 form with phone and password. Wrapper of FormLogin03 variant="PHONE".
   *
   * @example svelte
   * <FormLoginPhonePassword03 onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import FormLogin03 from "./FormLogin03.svelte";
  import type { LoginRequestDto, LinkProps, SocialLoginItem } from "../../types";

  type Props = {
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
    socialLogins?: SocialLoginItem[];
  };

  let { onSubmit, forgetPassword, socialLogins = [] }: Props = $props();
</script>

<FormLogin03 variant="PHONE" {onSubmit} {forgetPassword} {socialLogins} />
