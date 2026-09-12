<script lang="ts">
  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "$lib/components/ui/sidebar";
  import {
    AppWindowIcon,
    DocumentCodeIcon,
    FormIcon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { page } from "$app/state";
  import { categories, components } from "$lib/docs/components";

  function componentList(category: string) {
    return components.filter((c) => c.category === category);
  }

  const path = $derived(page.url.pathname);
</script>

<Sidebar collapsible="icon">
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <a href="/docs" class="flex items-center gap-2 px-3 py-1">
          <span class="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HugeiconsIcon icon={DocumentCodeIcon} class="size-4" />
          </span>
          <span class="text-sm font-semibold">NegoDesign</span>
        </a>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>

  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/docs"}>
              {#snippet child({ props })}
                <a href="/docs" {...props}><span>Getting Started</span></a>
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/docs/installation"}>
              {#snippet child({ props })}
                <a href="/docs/installation" {...props}><span>Installation</span></a>
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/docs/components"}>
              {#snippet child({ props })}
                <a href="/docs/components" {...props}><span>Components</span></a>
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>

    <SidebarGroup>
      <SidebarGroupLabel class="uppercase tracking-wider text-muted-foreground/70">
        Live Demos
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/modal"}>
              {#snippet child({ props })}
                <a href="/modal" {...props} class="flex items-center gap-2">
                  <HugeiconsIcon icon={AppWindowIcon} class="size-4" />
                  <span>Modals</span>
                </a>
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/form"}>
              {#snippet child({ props })}
                <a href="/form" {...props} class="flex items-center gap-2">
                  <HugeiconsIcon icon={FormIcon} class="size-4" />
                  <span>Form</span>
                </a>
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>

    {#each categories as category (category)}
      {@const list = componentList(category)}
      {#if list.length > 0}
        <SidebarGroup>
          <SidebarGroupLabel class="uppercase tracking-wider text-muted-foreground/70">
            {category}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {#each list as comp (comp.slug)}
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={path === `/docs/${comp.slug}`}>
                    {#snippet child({ props })}
                      <a href={`/docs/${comp.slug}`} {...props}><span>{comp.name}</span></a>
                    {/snippet}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              {/each}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      {/if}
    {/each}
  </SidebarContent>

  <SidebarFooter>
    <div class="border-t border-border px-4 py-3 text-xs text-muted-foreground">
      Licensed under MIT
    </div>
  </SidebarFooter>
</Sidebar>