<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import type { NavMenuLinksProps } from "../../data/nav-menu";
      import MenuLinks from "../shared/MenuLinks.svelte";
  import MenuMobile from "./MenuMobile.svelte";
  import { t } from "$lib/i18n";

  type Props = {
    links: NavMenuLinksProps[];
    onclickButtonLogin?: () => void;
    onclickButtonRegister?: () => void;
  };

  const { links, onclickButtonLogin, onclickButtonRegister }: Props = $props();
</script>

<MenuMobile>
  <nav>
    <div class="mt-5 mb-4 font-semibold">{$t("label.navigation")}</div>
    <MenuLinks {links} groupClass="space-y-3" orientation="vertical" />
  </nav>

  <div class="mt-5">
    <div class="mt-5 mb-4 font-semibold">{$t("label.action")}</div>
    <section>
      {#if onclickButtonRegister}
        <Button variant="outline" onclick={onclickButtonRegister}>
          <ImageHugeicons icon="user" />
          {$t("label.register")}
        </Button>
      {/if}
      {#if onclickButtonLogin}
        <Button variant="outline" onclick={onclickButtonLogin}>
          <ImageHugeicons icon="login-02" />
          {$t("label.login")}
        </Button>
      {/if}
    </section>
  </div>
</MenuMobile>
