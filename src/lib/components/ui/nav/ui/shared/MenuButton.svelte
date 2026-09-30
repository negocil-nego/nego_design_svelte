<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { HugeiconsIconName } from "$lib/components/ui/image/icons";
  import type { NavMenuButtonProps } from "../../data/nav-menu";
  import { Button } from "$lib/components/ui/button/index.js";
  import { t } from "$lib/i18n";
  import { isLoggedIn } from "$lib/stores";
  import AdminUserSection from "$lib/components/pages/admin/shared/section/AdminUserSection.svelte";

  let {
    buttonClass,
    textButtonLogin,
    textButtonRegister,
    onclickButtonLogin,
    onclickButtonRegister,
  }: NavMenuButtonProps = $props();
</script>

{#if isLoggedIn()}
  <AdminUserSection />
{:else}
  {#if onclickButtonRegister}
    {@render actionButtons({
      text: textButtonRegister || $t("label.register"),
      icon: "UserIcon",
      type: "register",
      onclick: onclickButtonRegister,
    })}
  {/if}
  {#if onclickButtonLogin}
    {@render actionButtons({
      text: textButtonLogin || $t("label.login"),
      icon: "Login02Icon",
      type: "login",
      onclick: onclickButtonLogin,
    })}
  {/if}
{/if}

{#snippet actionButtons({
  text,
  type,
  icon,
  onclick,
}: Readonly<{
  text: string;
  type: "login" | "register";
  icon: HugeiconsIconName;
  onclick: () => void;
}>)}
  <Button
    {onclick}
    variant="outline"
    class={`flex justify-between items-center gap-3 rounded-full! p-5 cursor-pointer md:text-md relative hover:text-white
    ${buttonClass ?? ""}
    ${type === "login" ? "bg-gradient dark:bg-slate-900" : ""}
    ${type === "register" ? "bg-transparent! border-white dark:border-none dark:bg-slate-800!" : ""}
    `}
  >
    <div class="min-w-32.5">{text}</div>
    <div
      class="absolute right-1 inset-y-0 my-auto flex size-8 items-center justify-center rounded-full border"
    >
      <ImageHugeicons {icon} class="size-5" />
    </div>
  </Button>
{/snippet}
