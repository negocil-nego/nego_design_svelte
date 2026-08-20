<script lang="ts">
  import type { NavMenuButtonProps } from "../../data/nav-menu";
  import { Login03Icon, User03Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/svelte";
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
    icon: User03Icon,
    onclick: onclickButtonRegister,
  })}
{/if}
{#if onclickButtonLogin}
  {@render actionButtons({
    text: textButtonLogin || $t("label.login"),
    icon: Login03Icon,
    onclick: onclickButtonLogin,
  })}
{/if}

{#snippet actionButtons({
  text,
  icon,
  onclick,
}: Readonly<{
  text: string;
  icon: IconSvgElement;
  onclick: () => void;
}>)}
  <Button
    {onclick}
    variant="outline"
    class="flex justify-between items-center gap-3 rounded-full border p-5 md:p-5 cursor-pointer md:text-md"
  >
    <div>{text}</div>
    <div class="border p-2 rounded-full bg-white dark:bg-background mr-0">
      <HugeiconsIcon {icon} />
    </div>
  </Button>
{/snippet}
