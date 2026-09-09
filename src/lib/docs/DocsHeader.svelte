<script lang="ts">
  import { SidebarTrigger, useSidebar } from "$lib/components/ui/sidebar";
  import { Separator } from "$lib/components/ui/separator";
  import { LanguageSwitcher } from "$lib/components/ui/language-switcher";
  import { LightSwitch } from "$lib/components/ui/light-switch";

  let { title = "Components" }: { title?: string } = $props();
</script>

<header class="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background/95 px-4 backdrop-blur">
  <SidebarTrigger class="-ms-1" />
  <Separator orientation="vertical" class="mr-2 h-4" />
  <nav class="hidden items-center gap-1 text-sm md:flex">
    <a href="/docs" class="font-medium text-foreground">Docs</a>
    <span class="text-muted-foreground">/</span>
    <span class="font-medium text-foreground">{title}</span>
  </nav>
  <div class="ms-auto flex items-center gap-2">
    <a href="/" class="rounded-md px-2 py-1 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground">
      Demos
    </a>
    <LightSwitch />
    <LanguageSwitcher />
  </div>
</header>
