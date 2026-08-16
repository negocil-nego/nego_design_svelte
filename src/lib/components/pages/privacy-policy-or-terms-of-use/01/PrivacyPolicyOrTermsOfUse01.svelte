<script lang="ts" module>
  /**
   * Variant 01 of the Privacy Policy / Terms of Use page.
   * Three-column layout: navigation sidebar, main content, and TOC.
   * Includes scroll-spy with IntersectionObserver to highlight the active section.
   * @component
   * @example
   * ```svelte
   * <PrivacyPolicyOrTermsOfUse01 data={pageData} />
   * ```
   */
</script>

<script lang="ts">
  import { buildToc } from "../shared/toc";
  import PrivacyPolicyOrTermsOfUseBreadcrumb from "../shared/PrivacyPolicyOrTermsOfUseBreadcrumb.svelte";
  import DocSectionView from "../shared/DocSectionView.svelte";
  import DocsSidebar from "./DocsSidebar.svelte";
  import TableOfContents from "./TableOfContents.svelte";
  import type { PrivacyPolicyOrTermsOfUseProps } from "../types";

  let {
    breadcrumb,
    sections,
    title,
    lastUpdated,
    isVisibleMenuLeft = true,
    isVisibleMenuRight,
  }: PrivacyPolicyOrTermsOfUseProps = $props();

  const toc = $derived(buildToc(sections));

  /** Currently visible section, for highlighting in the TOC (simple scroll-spy). */
  let activeId = $state<string | undefined>(undefined);

  $effect(() => {
    const headingEls = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headingEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) activeId = visible.target.id;
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
</script>

<div class="mx-auto max-w-7xl px-6 py-10">
  <div class="flex gap-10">
    {#if isVisibleMenuLeft}
      <DocsSidebar {sections} {activeId} />
    {/if}

    <main class="min-w-0 flex-1 flex flex-col gap-8">
      <header class="flex flex-col gap-4">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">{title}</h1>
          <p class="mt-1 text-sm text-muted-foreground">
            Latest update: {lastUpdated}
          </p>
        </div>
        <PrivacyPolicyOrTermsOfUseBreadcrumb items={breadcrumb} />
      </header>

      <div class="flex flex-col gap-10">
        {#each sections as section (section.id)}
          <DocSectionView {section} />
        {/each}
      </div>
    </main>
    {#if isVisibleMenuRight}
      <TableOfContents items={toc} {activeId} />
    {/if}
  </div>
</div>
