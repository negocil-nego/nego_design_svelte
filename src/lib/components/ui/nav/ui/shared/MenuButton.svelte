<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons";
  import type { NavMenuButtonProps } from "../../data/nav-menu";
  import { Button } from "$lib/components/ui/button/index.js";
  import { t } from "$lib/i18n";

  let {
    buttonClass,
    textButtonLogin,
    textButtonRegister,
    onclickButtonLogin,
    onclickButtonRegister,
  }: NavMenuButtonProps = $props();
</script>

{#if onclickButtonRegister}
  {@render actionButtons({
    text: textButtonRegister || $t("label.register"),
    icon: "user",
    type: "register",
    onclick: onclickButtonRegister,
  })}
{/if}
{#if onclickButtonLogin}
  {@render actionButtons({
    text: textButtonLogin || $t("label.login"),
    icon: "login-02",
    type: "login",
    onclick: onclickButtonLogin,
  })}
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
    class={`flex justify-between items-center gap-3 rounded-full! p-5 cursor-pointer md:text-md relative 
    ${type === "login" ? "bg-gradient text-white dark:bg-slate-900" : ""}
    ${type === "register" ? "bg-gray-300!  dark:bg-slate-800!" : ""}
    `}
  >
    <div class="min-w-32.5">{text}</div>
    <div class="border p-1.5 rounded-full bg-white absolute right-1">
      <ImageHugeicons {icon} width={20} height={20} />
    </div>
  </Button>
{/snippet}
