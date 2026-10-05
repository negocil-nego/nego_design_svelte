<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import ThemeSwitch from "$lib/components/ui/theme-switch/theme-switch.svelte";
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import { t } from "$lib/i18n";
  import type { MenuTriggerMobileProps } from "./types";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";

  const { triggerClass, trigger, children }: MenuTriggerMobileProps = $props();
</script>

<div class="flex flex-wrap gap-2">
  <Drawer.Root direction="right">
    <Drawer.Trigger
      class={cn(
        buttonVariants({ variant: "outline" }),
        "capitalize",
        triggerClass,
      )}
    >
      {@render trigger()}
    </Drawer.Trigger>
    <Drawer.Content
      class="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]"
    >
      <div class="flex justify-end items-center gap-5 py-5">
        <ThemeSwitch />
        <LanguageSwitcher />
        <Drawer.Footer class="p-0! m-0! rounded-full!">
          <Drawer.Close
            class={cn(
              buttonVariants({ variant: "ghost" }),
              "bg-red-700 rounded-full! text-white m-0 p-0",
            )}
          >
            <ImageHugeicons icon="Cancel01Icon" />
            <span class="hidden">{$t("label.close")}</span>
          </Drawer.Close>
        </Drawer.Footer>
      </div>
      <Drawer.Header>
        <Drawer.Title>{$t("label.menu")}</Drawer.Title>
        <Drawer.Description>
          {$t("label.navigation.text")}
        </Drawer.Description>
      </Drawer.Header>
      <div class="no-scrollbar overflow-y-auto px-4">
        {@render children()}
      </div>
    </Drawer.Content>
  </Drawer.Root>
</div>
