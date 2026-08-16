<script lang="ts" module>
  /**
   * Página de perfil da empresa/fábrica.
   * Combina o banner de apresentação, navegação entre secções
   * (Sidebar em desktop, badges em mobile) e as secções
   * "Sobre a Empresa" e "Galeria".
   *
   * @component
   * @example
   * ```svelte
   * <CompanyProfile data={companyData} />
   *
   * <CompanyProfile
   *   data={companyData}
   *   onContact={(id) => openWhatsapp(id)}
   *   onShare={(id) => navigator.share?.({ url: shareUrl(id) })}
   * />
   * ```
   */
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import ProfileBanner from "./shared/ProfileBanner.svelte";
  import ProfileSidebar from "./shared/ProfileSidebar.svelte";
  import ProfileMenuBadge from "./shared/ProfileMenuBadge.svelte";
  import ProfileAboutCompany from "./shared/ProfileAboutCompany.svelte";
  import ProfileGallery from "./shared/ProfileGallery.svelte";
  import { defaultCompanyProfileData } from "./data";
  import type { CompanyProfileProps, ProfileNavItem } from "./types";

  let {
    data = defaultCompanyProfileData,
    isLoading = false,
    yearFounded,
    category,
    address,
    website,
    onEmail,
    onWhatsapp,
    onCopyLink,
    onShare,
  }: CompanyProfileProps = $props();

  const responsive = useDevice();

  const sections: ProfileNavItem[] = [
    { id: "banner", label: "Apresentação" },
    { id: "sobre-empresa", label: "Sobre a empresa" },
    { id: "galeria-empresa", label: "Galeria da empresa" },
  ];

  let activeSection = $state(sections[0]?.id);
  let sectionEls: Record<string, HTMLElement> = {};

  function scrollToSection(id: string) {
    activeSection = id;
    sectionEls[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (
          visible[0]?.target instanceof HTMLElement &&
          visible[0].target.dataset.sectionId
        ) {
          activeSection = visible[0].target.dataset.sectionId;
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    Object.values(sectionEls).forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<div class="">
  {#if responsive.isMobile}
    <ProfileMenuBadge
      items={sections}
      active={activeSection}
      onSelect={scrollToSection}
      className="mt-6"
    />
  {/if}

  <div class="flex gap-6">
    {#if !responsive.isMobile}
      <ProfileSidebar
        items={sections}
        active={activeSection}
        onSelect={scrollToSection}
      />
    {/if}

    <div class="flex min-w-0 flex-1 flex-col gap-6 md:px-5 md:pl-10 lg:pl-12">
      <div
        id="banner"
        bind:this={sectionEls["banner"]}
        data-section-id="banner"
        class="p-3"
      >
        <ProfileBanner
          id={data.id}
          data={data.banner}
          {isLoading}
          {onEmail}
          {onWhatsapp}
          {onCopyLink}
          {onShare}
        />
      </div>

      <div
        id="sobre-empresa"
        bind:this={sectionEls["sobre-empresa"]}
        data-section-id="sobre-empresa"
      >
        <ProfileAboutCompany data={data.about} {isLoading} />
      </div>

      <hr />

      <div
        id="galeria-empresa"
        bind:this={sectionEls["galeria-empresa"]}
        data-section-id="galeria-empresa"
      >
        <ProfileGallery data={data.gallery} {isLoading} />
      </div>
    </div>
  </div>
</div>
