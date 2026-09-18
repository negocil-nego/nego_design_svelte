<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import ThemeSwitch from "$lib/components/ui/theme-switch/theme-switch.svelte";
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import { t } from "$lib/i18n";
  import type { MenuTriggerMobileProps } from "./types";

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
      <Drawer.Header>
        <Drawer.Title>{$t("label.menu")}</Drawer.Title>
        <Drawer.Description>
          {$t("label.navigation.text")}
        </Drawer.Description>
      </Drawer.Header>
      <div class="no-scrollbar overflow-y-auto px-4">
        {@render children()}
      </div>
      <Drawer.Footer>
        <div class="flex justify-center gap-5 py-5">
          <ThemeSwitch />
          <LanguageSwitcher />
        </div>
        <Drawer.Close class={buttonVariants({ variant: "outline" })}>
          {$t("label.close")}
        </Drawer.Close>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Root>
</div>
