<script lang="ts">
  import { setUserTranslations } from "../i18n/config";
  import type { NegoDesignProps } from "$lib/types";
  import { applyTheme, theme } from "$lib/theme.svelte";
  import ModalOtp from "$lib/components/ui/modal/otp/ui/ModalOtp.svelte";
  import ModalLogin from "$lib/components/ui/modal/login/ui/ModalLogin.svelte";
  import ModalStatus from "$lib/components/ui/modal/status/ui/ModalStatus.svelte";
  import NotificationBannerAuth from "$lib/components/ui/banner/NotificationBannerAuth.svelte";

  let { translations, children }: NegoDesignProps = $props();

  // svelte-ignore state_referenced_locally
  if (translations) {
    setUserTranslations(translations);
  }

  $effect(() => {
    if (translations) {
      setUserTranslations(translations);
    }
  });

  $effect(() => {
    if (typeof document !== "undefined") {
      applyTheme(theme.current);
    }
  });
</script>

<NotificationBannerAuth />

{@render children()}

<ModalOtp />
<ModalLogin />
<ModalStatus />
