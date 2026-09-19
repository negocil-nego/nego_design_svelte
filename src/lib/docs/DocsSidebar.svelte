<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
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
          <span
            class="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"
          >
            <ImageHugeicons icon="document-code" class="size-4" />
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
                <a href="/docs/installation" {...props}
                  ><span>Installation</span></a
                >
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/docs/components"}>
              {#snippet child({ props })}
                <a href="/docs/components" {...props}><span>Components</span></a
                >
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/docs/admin-section"}>
              {#snippet child({ props })}
                <a href="/docs/admin-section" {...props}><span>AdminSection</span></a
                >
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/docs#admin-tabs"}>
              {#snippet child({ props })}
                <a href="/docs#admin-tabs" {...props}><span>AdminTabs</span></a>
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/docs/admin-security-tab"}>
              {#snippet child({ props })}
                <a href="/docs/admin-security-tab" {...props}
                  ><span>AdminSecurityTab</span></a
                >
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={path === "/docs/page-status"}>
              {#snippet child({ props })}
                <a href="/docs/page-status" {...props}
                  ><span>PageStatus</span></a
                >
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
          <SidebarGroupLabel
            class="uppercase tracking-wider text-muted-foreground/70"
          >
            {category}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {#each list as comp (comp.slug)}
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={path === `/docs/${comp.slug}`}>
                    {#snippet child({ props })}
                      <a href={`/docs/${comp.slug}`} {...props}
                        ><span>{comp.name}</span></a
                      >
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
