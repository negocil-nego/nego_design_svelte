<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
      import DocsHeader from "$lib/docs/DocsHeader.svelte";
  import CodeBlock from "$lib/docs/CodeBlock.svelte";

  const installCode = `npm install negodesign`;

  const cssCode = `// app.css or +layout.svelte
import "negodesign/styles.css"; // includes the default fonts

// Tailwind v4 is not required, but heavily recommended
import "@tailwindcss/vite";`;

  const adminSectionCode = `<script lang="ts">
  import { AdminSection } from "negodesign";
  import {
    DashboardSquare01Icon,
    Money01Icon,
    Analytics01Icon,
  } from "@hugeicons/" + "core-free-icons"; // npm i @hugeicons/core-free-icons

  let selectedKey = $state<string | number>("overview");${"</" + "script>"}

<AdminSection
  title="Dashboard"
  description="Monitor the key metrics of your business."
  bind:selectedKey
  onSelect={(id) => console.log("menu", id)}
  onCardClick={(id) => console.log("card", id)}
  menuItems={[
    { id: "overview", title: "Overview", icon: DashboardSquare01Icon },
    { id: "revenue", title: "Revenue", icon: Money01Icon },
    { id: "analytics", title: "Analytics", icon: Analytics01Icon },
  ]}
  cards={[
    {
      id: 1,
      menuId: "overview",
      icon: Money01Icon,
      value: "$84k",
      title: "Gross revenue",
      description: "Last 30 days",
    },
    {
      id: 2,
      menuId: "analytics",
      icon: Analytics01Icon,
      value: "12.4k",
      title: "Total visits",
      description: "+8% vs last week",
    },
  ]}
/>`;

  const adminUserSectionCode = `import { AdminUserSection } from "negodesign"

<AdminUserSection
  name="Sedrac"
  email="slcsedrac@gmail.com"
  avatarUrl="https://github.com/octocat.png"
  onProfile={() => console.log("profile")}
  onSettings={() => console.log("settings")}
/>`;

  const adminTabsCode = `<script lang="ts">
  import { AdminTabs } from "negodesign";

  const profileValues = {
    firstName: "Sedrac",
    lastName: "SLC",
    email: "slcsedrac@gmail.com",
    phone: "+244 923 456 789",
    birthDate: "1995-06-15",
    bio: "Developer and travel enthusiast.",
  };

  const addressValues = {
    streetNumber: "12",
    neighborhood: "Maculusso",
    state: "Luanda",
    latitude: "-8.839988",
    longitude: "13.289437",
  };

  const socialValues = {
    whatsapp: "https://wa.me/244923456789",
    facebook: "https://facebook.com/sedrac.slc",
    linkedin: "https://linkedin.com/in/sedrac-slc",
    tiktok: "https://tiktok.com/@sedrac.slc",
    instagram: "https://instagram.com/sedrac.slc",
  };
${"</" + "script>"}

<AdminTabs
  profileTab={{
    valuesUser: profileValues,
    valuesAddress: addressValues,
    valuesSocial: socialValues,
    onSubmitUser: (d) => console.log("user", d),
    onSubmitAddress: (d) => console.log("address", d),
    onSubmitSocial: (d) => console.log("social", d),
  }}
  securityTab={{
    onSubmitPassword: (d) => console.log("password", d),
    onSubmitEmail: (d) => console.log("email", d),
    onSubmitPhone: (d) => console.log("phone", d),
    onSubmitDanger: (d) => console.log("danger", d),
  }}
/>`;

  const adminSecurityTabCode = `<script lang="ts">
  import { AdminSecurityTab } from "negodesign";

  let isLoadingPassword = $state(false);
  let isLoadingEmail = $state(false);
  let isLoadingPhone = $state(false);
  let isLoadingDanger = $state(false);
${"</" + "script>"}

<AdminSecurityTab
  isLoadingPassword={isLoadingPassword}
  isLoadingEmail={isLoadingEmail}
  isLoadingPhone={isLoadingPhone}
  isLoadingDanger={isLoadingDanger}
  onSubmitPassword={(d) => { isLoadingPassword = true; console.log(d); }}
  onSubmitEmail={(d) => { isLoadingEmail = true; console.log(d); }}
  onSubmitPhone={(d) => { isLoadingPhone = true; console.log(d); }}
  onSubmitDanger={(d) => { isLoadingDanger = true; console.log(d); }}
/>`;

  const adminUserProfileCode = `<script lang="ts">
  import { AdminUserProfile } from "negodesign";
${"</" + "script>"}

<AdminUserProfile
  name="Sedrac SLC"
  description="Developer and travel enthusiast."
  avatarUrl="https://github.com/octocat.png"
  badge="Pro"
  stats={[
    { label: "Posts", value: 124 },
    { label: "Followers", value: "4.2k" },
    { label: "Following", value: 312 },
  ]}
  badges={[
    { value: 1, color: "#3b82f6" },
    { value: 2, color: "#ef4444" },
    { value: 3, color: "#10b981" },
  ]}
  followLabel="Follow"
  contactLabel="Get in touch"
  onFollow={() => console.log("follow")}
  onContact={() => console.log("contact")}
/>`;

  const adminUserProfileMinimalCode = `<script lang="ts">
  import { AdminUserProfile } from "negodesign";
${"</" + "script>"}

<AdminUserProfile
  name="Ana Silva"
  description="Designer e fotografa."
  badge="Admin"
/>`;

  const pageStatusPendingCode = `<script lang="ts">
  import { PageStatusPending } from "negodesign";
${"</" + "script>"}

<PageStatusPending
  onAction={() => console.log("done")}
/>`;

  const pageStatusBlockedCode = `<script lang="ts">
  import { PageStatusBlocked } from "negodesign";
${"</" + "script>"}

<PageStatusBlocked
  onAction={() => console.log("done")}
/>`;

  const pageStatusRecoveringCode = `<script lang="ts">
  import { PageStatusRecovering } from "negodesign";
${"</" + "script>"}

<PageStatusRecovering
  onAction={() => console.log("back to login")}
/>`;

  const pageStatusCode = `<script lang="ts">
  import { PageStatus } from "negodesign";
${"</" + "script>"}

<PageStatus
  title="Processing"
  subtitle="Your payment is being verified"
  description="This may take a few minutes."
  buttonText="Continue"
  titleColor="text-amber-500"
  buttonBg="bg-primary"
  buttonTextColor="text-primary-foreground"
  onAction={() => console.log("continue")}
>
  {#snippet imgSlot()}
    <img src="/media/payment.png" alt="" class="size-16 sm:size-32" />
  {/snippet}
</PageStatus>`;

  const pageStatusAdvancedCode = `<script lang="ts">
  import { PageStatus } from "negodesign";
${"</" + "script>"}

<PageStatus
  title="Pagamento em processamento"
  subtitle="Estamos a verificar o seu pagamento"
  description="Isto pode demorar alguns minutos."
  buttonText="Continuar"
  titleColor="text-amber-500"
  buttonBg="bg-primary"
  buttonTextColor="text-primary-foreground"
  actionHref="/dashboard"
  emailPhoneWhatsapp={{
    visible: ["email", "phone"],
    onSelect: (method) => console.log(method),
  }}
>
  {#snippet imgSlot()}
    <img src="/media/fx.png" alt="" class="size-16 sm:size-32" />
  {/snippet}
  {#snippet children()}
    <p class="mt-4 text-sm text-muted-foreground">
      Tens alguma dúvida? Fala connosco durante o horário útil.
    </p>
  {/snippet}
</PageStatus>`;

  const pageLoadingCode = `<script lang="ts">
  import { PageLoading } from "negodesign";
${"</" + "script>"}

<PageLoading progress={40} />`;

  const searchHostingerCode = `<script lang="ts">
  import SearchHostingerInput from "negodesign/search/varients/SearchHostingerInput";
${"</" + "script>"}

<SearchHostingerInput
  bind:value={searchValue}
  onchange={(v) => console.log("changed", v)}
  onSubmit={(v) => console.log("submitted", v)}
/>`;

  const cardHighlightCode = `<script lang="ts">
  import { CardHighlight } from "negodesign";
${"</" + "script>"}

<CardHighlight
  varient={1}
  id={1}
  title="Hotel Presidente"
  content="Hotel 5 estrelas no centro da cidade."
  imageUrl="/images/hotel.jpg"
  tags={[{ text: "Premium" }]}
  buttonText="Ver detalhes"
  onClickBtn={(id) => console.log(id)}
  onClickFavorite={(id) => console.log(id)}
/>`;

  const cardPromotionCode = `<script lang="ts">
  import { CardPromotion } from "negodesign";
${"</" + "script>"}

<CardPromotion
  id={1}
  title="Pacote Lua de Mel"
  content="7 noites em Fernando de Noronha."
  imageUrl="/images/resort.jpg"
  oldPrice="450.000 Kz"
  newPrice="320.000 Kz"
  buttonBuyText="Comprar agora"
  onClickBuy={(id) => console.log(id)}
  onClickFavorite={(id) => console.log(id)}
/>`;

  const cardProductCode = `<script lang="ts">
  import { CardProduct } from "negodesign";
${"</" + "script>"}

<CardProduct
  variant={1}
  id={1}
  title="Camiseta NegoDesign"
  content="Camiseta 100% algodão."
  imageUrl="/images/shirt.jpg"
  price="25.000 Kz"
  rating={4}
  buttonBuyText="Adicionar ao carrinho"
  onClickBuy={(id) => console.log(id)}
  onClickFavorite={(id) => console.log(id)}
/>`;

  const locationInputCode = `<Form
  onSubmit={(data) => console.log(data)}
  inputs={[
    { type: "text", name: "streetNumber", label: $t("label.streetNumber") },
    { type: "text", name: "neighborhood", label: $t("label.neighborhood") },
    { type: "text", name: "state", label: $t("label.state") },
    {
      type: "location",
      name: "location",
      label: $t("label.location"),
      latitudeName: "latitude",
      longitudeName: "longitude",
      locationText: $t("label.location.get"),
      locationLoadingText: $t("label.location.getting"),
      fill: true,
    },
    { type: "text", name: "latitude", label: $t("label.latitude") },
    { type: "text", name: "longitude", label: $t("label.longitude") },
  ]}
/>`;

  const storeOtpCode = `<script lang="ts">
  import { openOtp, closeOtp, otpStore } from "negodesign/store";
${"</" + "script>"}

<button onclick={() => openOtp({ minutes: 5, isOpenBanner: true })}>
  Verify OTP
</button>

<button onclick={() => closeOtp()}>Close</button>

{#if otpStore.open}
  <p>The OTP modal is open.</p>
{/if}`;

  const storeLoginCode = `<script lang="ts">
  import { openLogin, closeLogin, loginStore } from "negodesign/store";
${"</" + "script>"}

<button onclick={() => openLogin({ formType: "EMAIL_PASSWORD", isOpenBanner: true })}>
  Sign in
</button>

<button onclick={() => closeLogin()}>Close</button>

{#if loginStore.open}
  <p>The login modal is open.</p>
{/if}`;

  const storeBannerCode = `<script lang="ts">
  import { suppressBanner, releaseBanner } from "negodesign/store";
${"</" + "script>"}

// Hide the auth banner on this page only
onMount(() => {
  suppressBanner();
  return () => releaseBanner();
});

// Or force it directly
setBannerSuppressed(true);`;

  const notificationBannerAuthCode = `<script lang="ts">
  import { NotificationBannerAuth } from "negodesign";
${"</" + "script>"}

<NotificationBannerAuth />
<!-- Mounted once, globally — typically inside NegoDesign -->`;

  const authBannerStoreCode = `<script lang="ts">
  import {
    authBannerKind,
    authBannerVisible,
    authBannerCtaText,
    authBannerAction,
    authBannerDismiss,
  } from "negodesign/store";
${"</" + "script>"}

{#if authBannerVisible}
  <button onclick={() => authBannerAction()}>{authBannerCtaText}</button>
  <button onclick={() => authBannerDismiss()}>Dismiss</button>
{/if}

<!-- authBannerKind --> "otp" | "login" | null`;

  const features = [
    {
      icon: "sparkles",
      title: "Copy-paste components",
      description:
        "Reusable, dependency-free components under your control. Use them as a package or copy the source.",
    },
    {
      icon: "app-window",
      title: "Build on Svelte 5",
      description:
        "Runes-based components with snippets, bindable props and reactive state — no deprecated legacy APIs.",
    },
    {
      icon: "rocket-01",
      title: "Tailwind CSS ready",
      description:
        "Powered by Tailwind CSS v4 utilities and the shadcn design language, so it fits any brand instantly.",
    },
    {
      icon: "global",
      title: "i18n first",
      description:
        "Built-in language switcher and translation helpers for building truly multilingual products.",
    },
    {
      icon: "moon-02",
      title: "Dark mode",
      description:
        "Light switch and theme-aware classes out of the box, with CSS variables you can override.",
    },
    {
      icon: "lock-password",
      title: "Pages, not just widgets",
      description:
        "Complete, production-ready pages: login, admin panel, company profile, product details, and more.",
    },
  ];
</script>

<svelte:head>
  <title>Getting Started | NegoDesign</title>
  <meta
    name="description"
    content="Get started with NegoDesign — a Svelte 5 component library of accessible, copy-paste friendly UI components for building modern web applications."
  />
</svelte:head>

<DocsHeader title="Getting Started" />

<div class="mx-auto w-full max-w-4xl px-4 py-10 md:px-8">
  <section>
    <span
      class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
    >
      <ImageHugeicons icon="sparkles" class="size-4" />
      NegoDesign
    </span>
    <h1 class="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
      Build beautiful interfaces faster
    </h1>
    <p class="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
      NegoDesign is an open-source Svelte 5 component library with the familiar
      <a class="font-medium text-primary underline underline-offset-4" href="/docs/components">shadcn</a>
      workflow. Components are built with Tailwind CSS, use the
      <code class="rounded bg-muted px-1.5 py-0.5 text-sm">cn()</code>
      utility, and ship as plain <code class="rounded bg-muted px-1.5 py-0.5 text-sm">.svelte</code>
      files you own — no lock-in.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
      <a
        href="/docs/installation"
        class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        <ImageHugeicons icon="rocket-01" class="size-4" />
        Get started
      </a>
      <a
        href="/docs/components"
        class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold transition hover:bg-muted"
      >
        Browse components
        <ImageHugeicons icon="arrow-right-01" class="size-4" />
      </a>
    </div>

    <div class="mt-16 grid gap-6 md:grid-cols-3">
      <div class="rounded-xl border border-border bg-card p-5">
        <h2 class="text-sm font-semibold">Install</h2>
        <CodeBlock code={installCode} title="npm" />
      </div>
      <div class="rounded-xl border border-border bg-card p-5 md:col-span-2">
        <h2 class="text-sm font-semibold">Import the styles</h2>
        <CodeBlock code={cssCode} title="global.css" />
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-5 md:col-span-3">
        <div class="flex items-center gap-2 text-sm font-medium">
          <ImageHugeicons icon="sparkles" class="size-4 text-primary" />
          Copy-paste friendly
        </div>
        <p class="mt-2 text-sm text-muted-foreground">
          Every component ships through the package exports (
          <code class="rounded bg-muted px-1 py-0.5">negodesign</code>,
          <code class="rounded bg-muted px-1 py-0.5">negodesign/types</code>,
          <code class="rounded bg-muted px-1 py-0.5">negodesign/i18n</code> and
          <code class="rounded bg-muted px-1 py-0.5">negodesign/styles.css</code>), so you can consume
          them exactly like any other library — or copy the source into your project and customize it.
        </p>
      </div>
    </div>
  </section>

  <section class="mt-16">
    <div class="flex items-end justify-between">
      <div>
        <h2 class="text-2xl font-bold">What ships with NegoDesign</h2>
        <p class="mt-2 text-sm text-muted-foreground">
          Low-level UI primitives and high-level, business-ready composite components.
        </p>
      </div>
      <a
        href="/docs/components"
        class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        View all
        <ImageHugeicons icon="arrow-right-01" class="size-4" />
      </a>
    </div>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each features as feature (feature.title)}
        <div class="rounded-xl border border-border bg-card p-5 transition hover:border-primary/40">
          <span class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ImageHugeicons icon={feature.icon} class="size-5" />
          </span>
          <h3 class="mt-4 text-sm font-semibold">{feature.title}</h3>
          <p class="mt-1 text-sm text-muted-foreground">{feature.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-16">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">New: AdminSection</h2>
      <a
        href="/docs/admin-section"
        class="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary hover:bg-primary/20"
      >
        Docs
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
      <a
        href="/admin/section"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      A section for admin areas with a background container, a top navigation bar
      (brand + menu tabs), a logged-in user avatar and a responsive grid of cards.
      Define the menu with
      <code class="rounded bg-muted px-1 py-0.5">menuItems</code> and the cards
      with <code class="rounded bg-muted px-1 py-0.5">cards</code>. Cards can be
      filtered per menu via <code class="rounded bg-muted px-1 py-0.5">menuId</code>.
      The avatar uses <a
        href="/docs/admin-user-section"
        class="font-medium text-primary underline underline-offset-4"
        >AdminUserSection</a
      >, which opens a profile dropdown on hover.
    </p>
    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">AdminSection</h3>
      <CodeBlock code={adminSectionCode} title="AdminSection.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">AdminUserSection</h3>
      <CodeBlock code={adminUserSectionCode} title="AdminUserSection.svelte" />
    </div>
  </section>

  <section id="admin-tabs" class="mt-16 scroll-mt-6">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">New: AdminTabs</h2>
      <a
        href="/admin/tabs"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      Sistema de abas (underline) para a área administrativa. Cada aba
      (<code class="rounded bg-muted px-1 py-0.5">AdminProfileTab</code> e
      <code class="rounded bg-muted px-1 py-0.5">AdminSecurityTab</code>)
      envolve o seu
      <a
        href="/docs/form"
        class="font-medium text-primary underline underline-offset-4"
        >Form</a
      >
      num <code class="rounded bg-muted px-1 py-0.5">AdminIt</code>. Passa as
      props da aba que queres exibir; as abas omitidas não são renderizadas.
    </p>
    <p class="mt-2 text-sm text-muted-foreground">
      O <code class="rounded bg-muted px-1 py-0.5">AdminProfileTab</code> agrupa
      3 secções
      <code class="rounded bg-muted px-1 py-0.5">AdminIt</code> (dados pessoais,
      morada e redes sociais); a secção de morada usa o novo tipo de input
      <code class="rounded bg-muted px-1 py-0.5">"location"</code> do
      <a
        href="/docs/form"
        class="font-medium text-primary underline underline-offset-4"
        >Form</a
      >: um botão que obtém a localização actual do navegador (geolocalização)
      e preenche automaticamente os campos
      <code class="rounded bg-muted px-1 py-0.5">latitude</code> /
      <code class="rounded bg-muted px-1 py-0.5">longitude</code> definidos por
      <code class="rounded bg-muted px-1 py-0.5">latitudeName</code> /
      <code class="rounded bg-muted px-1 py-0.5">longitudeName</code>.
      Todas as secções alinham o botão de submissão à esquerda através da prop
      <code class="rounded bg-muted px-1 py-0.5">submitAlign="start"</code> do
      <a
        href="/docs/form"
        class="font-medium text-primary underline underline-offset-4"
        >Form</a
      >.
    </p>
    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">AdminTabs</h3>
      <CodeBlock code={adminTabsCode} title="AdminTabs.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">Form — input "location"</h3>
      <CodeBlock code={locationInputCode} title="location" />
    </div>
  </section>

  <section id="admin-security-tab" class="mt-16 scroll-mt-6">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">New: AdminSecurityTab</h2>
      <a
        href="/admin/tabs"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      Aba de Segurança com <b>4 secções</b>, cada uma num
      <code class="rounded bg-muted px-1 py-0.5">AdminIt</code> independente:
    </p>
    <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
      <li>
        <b>Alterar a senha</b> — Form com senha actual, nova senha e confirmação
        de senha.
      </li>
      <li>
        <b>Alterar a email</b> — Form com senha actual e nova email, com
        <b>processo de verificação OTP</b> para confirmar a troca.
      </li>
      <li>
        <b>Alterar a telefone</b> — Form com senha actual e novo telefone, com
        <b>processo de verificação OTP</b> para confirmar a troca.
      </li>
      <li>
        <b>Secção de perigo</b> — dois
        <code class="rounded bg-muted px-1 py-0.5">AdminIt</code> independentes:
        <b>Desativar a conta</b> (acao reversivel) e
        <b>Eliminar a conta</b> (acao permanente); ambos exigem a senha actual.
      </li>
    </ul>
    <p class="mt-2 text-sm text-muted-foreground">
      As secções de email e telefone usam o novo tipo de input
      <code class="rounded bg-muted px-1 py-0.5">"otp"</code> do
      <a
        href="/docs/form"
        class="font-medium text-primary underline underline-offset-4"
        >Form</a
      >
      (caixas de código de verificação). Já a secção de perigo usa o novo tipo
      de input <code class="rounded bg-muted px-1 py-0.5">"submit"</code>: um
      botão de submissão (componente
      <code class="rounded bg-muted px-1 py-0.5">InputSubmit</code>) colocado
      dentro de <code class="rounded bg-muted px-1 py-0.5">inputs</code>, com
      o texto do botão definido por
      <code class="rounded bg-muted px-1 py-0.5">label</code>, com
      <code class="rounded bg-muted px-1 py-0.5">variant</code>
      (<code class="rounded bg-muted px-1 py-0.5">destructive</code> para
      eliminar) e <code class="rounded bg-muted px-1 py-0.5">loadingText</code>.
      Cada Form tem o seu próprio
      <code class="rounded bg-muted px-1 py-0.5">isLoading</code> e
      <code class="rounded bg-muted px-1 py-0.5">onSubmit</code>, e os demais
      botões de submit são alinhados à esquerda com
      <code class="rounded bg-muted px-1 py-0.5">submitAlign="start"</code>.
    </p>
    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">AdminSecurityTab</h3>
      <CodeBlock code={adminSecurityTabCode} title="AdminSecurityTab.svelte" />
    </div>
  </section>

  <section id="admin-user-profile" class="mt-16 scroll-mt-6">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">New: AdminUserProfile</h2>
      <a
        href="/admin/profile"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      Componente de perfil do utilizador para areas administrativas. Exibe
      avatar (imagem ou iniciais automaticas), nome, badge, descricao,
      estatisticas (posts, seguidores, etc.) e badges coloridos. Suporta
      botoes de acao <code class="rounded bg-muted px-1 py-0.5">onFollow</code> e
      <code class="rounded bg-muted px-1 py-0.5">onContact</code> com labels
      personalizaveis.
    </p>
    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">AdminUserProfile — Completo</h3>
      <CodeBlock code={adminUserProfileCode} title="AdminUserProfile.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">AdminUserProfile — Minimal</h3>
      <CodeBlock code={adminUserProfileMinimalCode} title="AdminUserProfile.svelte" />
    </div>
  </section>

  <section id="page-status" class="mt-16 scroll-mt-6">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">New: PageStatus</h2>
      <a
        href="/docs/page-status"
        class="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary hover:bg-primary/20"
      >
        Docs
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
      <a
        href="/status"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      Página de estado completa com imagem (estática ou animação via snippet
      <code class="rounded bg-muted px-1 py-0.5">imgSlot</code>), título,
      subtítulo, descrição, card de contactos opcional e botão de ação. Existem
      três variantes prontas a usar:
      <code class="rounded bg-muted px-1 py-0.5">PageStatusPending</code>
      (âmbar),
      <code class="rounded bg-muted px-1 py-0.5">PageStatusBlocked</code>
      (vermelho),
      <code class="rounded bg-muted px-1 py-0.5">PageStatusRecovering</code>
      (azul) e
      <code class="rounded bg-muted px-1 py-0.5">PageLoading</code>
      (carregamento, com barra de progresso opcional). Os textos de cada
      variante são internacionalizados via i18n e podem ser sobrescritos por
      props.
    </p>
    <p class="mt-2 text-sm text-muted-foreground">
      Usa os wrappers prontos a usar
      (<code class="rounded bg-muted px-1 py-0.5">PageStatusPending</code>,
      <code class="rounded bg-muted px-1 py-0.5">PageStatusBlocked</code>,
      <code class="rounded bg-muted px-1 py-0.5">PageStatusRecovering</code> e
      <code class="rounded bg-muted px-1 py-0.5">PageLoading</code>)
      ou o <code class="rounded bg-muted px-1 py-0.5">PageStatus</code> base
      para controlo total da variante. Todos aceitam o snippet
      <code class="rounded bg-muted px-1 py-0.5">imgSlot</code>
      (imagem, ícone ou animação que substitui o default),
      <code class="rounded bg-muted px-1 py-0.5">emailPhoneWhatsapp</code>
      (card de contactos
      <code class="rounded bg-muted px-1 py-0.5">CardEmailPhoneWhatsapp</code>),
      o snippet <code class="rounded bg-muted px-1 py-0.5">children</code>,
      <code class="rounded bg-muted px-1 py-0.5">actionHref</code> (botão
      renderizado como link) e <code class="rounded bg-muted px-1 py-0.5">onAction</code>
      (callback do botão).
    </p>
    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">PageStatusPending</h3>
      <CodeBlock code={pageStatusPendingCode} title="PageStatusPending.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">PageStatusBlocked</h3>
      <CodeBlock code={pageStatusBlockedCode} title="PageStatusBlocked.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">PageStatusRecovering</h3>
      <CodeBlock code={pageStatusRecoveringCode} title="PageStatusRecovering.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">PageStatus — Custom</h3>
      <CodeBlock code={pageStatusCode} title="PageStatus.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">PageStatus — Animation, contact & content</h3>
      <CodeBlock code={pageStatusAdvancedCode} title="PageStatus.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">PageLoading — loading page with progress</h3>
      <CodeBlock code={pageLoadingCode} title="PageLoading.svelte" />
    </div>
  </section>

  <section id="search-hostinger" class="mt-16 scroll-mt-6">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">SearchHostingerInput</h2>
      <a
        href="/search-hostinger"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      Campo de busca estilo Hostinger com input de texto, seletor de datas
      (<code class="rounded bg-muted px-1 py-0.5">InputCalendarInterval</code>),
      seletor de hóspedes/quartos
      (<code class="rounded bg-muted px-1 py-0.5">PopoverGuestsAndRooms</code>)
      e botão de pesquisa. No mobile, os seletores de data e hóspedes são
      ocultados automaticamente.
    </p>
    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">SearchHostingerInput</h3>
      <CodeBlock code={searchHostingerCode} title="SearchHostingerInput.svelte" />
    </div>
  </section>

  <section id="cards" class="mt-16 scroll-mt-6">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">Cards</h2>
      <a
        href="/card/highlight"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      Componentes de card para exibir organizações, produtos e promoções.
      Cada card suporta variantes visuais, estado de loading, tags e callbacks de ação.
    </p>

    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">CardHighlight</h3>
      <p class="mt-1 text-xs text-muted-foreground">
        Card de destaque com imagem, logo, tags e botão de ação. Variantes 1 e 2.
      </p>
      <CodeBlock code={cardHighlightCode} title="CardHighlight.svelte" />
    </div>

    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">CardPromotion</h3>
      <p class="mt-1 text-xs text-muted-foreground">
        Card de promoção com preço antigo/novo, botão de comprar, favoritar e carrinho.
      </p>
      <CodeBlock code={cardPromotionCode} title="CardPromotion.svelte" />
    </div>

    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">CardProduct</h3>
      <p class="mt-1 text-xs text-muted-foreground">
        Card de produto com preço, rating e botão de comprar. Variantes 1 e 2.
      </p>
      <CodeBlock code={cardProductCode} title="CardProduct.svelte" />
    </div>
  </section>

  <section id="stores" class="mt-16 scroll-mt-6">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">Stores (global state)</h2>
      <a
        href="/docs#stores"
        class="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary hover:bg-primary/20"
      >
        Docs
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
      <a
        href="/stores"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <ImageHugeicons icon="arrow-right-01" class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      The library ships reactive stores that control the global
      <code class="rounded bg-muted px-1 py-0.5">ModalOtp</code>,
      <code class="rounded bg-muted px-1 py-0.5">ModalLogin</code> and the
      <code class="rounded bg-muted px-1 py-0.5">NotificationBannerAuth</code>
      component. They are mounted once inside
      <code class="rounded bg-muted px-1 py-0.5">NegoDesign</code>, so any part
      of your app can open them by calling a helper — no component tree needed.
      Import them from the
      <code class="rounded bg-muted px-1 py-0.5">negodesign/store</code>
      package entry:
    </p>

    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">otpStore — openOtp / closeOtp</h3>
      <p class="mt-1 text-xs text-muted-foreground">
        Controls the OTP verification modal. Pass
        <code class="rounded bg-muted px-1 py-0.5">minutes</code> to start a
        countdown (the modal closes when it expires) and
        <code class="rounded bg-muted px-1 py-0.5">isOpenBanner: true</code> to
        also show the auth banner.
      </p>
      <CodeBlock code={storeOtpCode} title="otp-store.svelte.ts" />
    </div>

    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">loginStore — openLogin / closeLogin</h3>
      <p class="mt-1 text-xs text-muted-foreground">
        Controls the login modal. Supports every
        <code class="rounded bg-muted px-1 py-0.5">formType</code> of the login
        page variants and optional social logins / links.
      </p>
      <CodeBlock code={storeLoginCode} title="login-store.svelte.ts" />
    </div>

    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">banner-store — suppression & countdown</h3>
      <p class="mt-1 text-xs text-muted-foreground">
        Shared state used by the auth banner: a suppression counter (hide the
        banner on specific pages, e.g. an OTP confirm screen) and a generic
        countdown with a formatted
        <code class="rounded bg-muted px-1 py-0.5">countdownLabel</code>
        (mm:ss). Use
        <code class="rounded bg-muted px-1 py-0.5">suppressBanner()</code> /
        <code class="rounded bg-muted px-1 py-0.5">releaseBanner()</code> in
        <code class="rounded bg-muted px-1 py-0.5">onMount</code> /
        <code class="rounded bg-muted px-1 py-0.5">onDestroy</code> to scope the
        banner to one page.
      </p>
      <CodeBlock code={storeBannerCode} title="banner-store.svelte.ts" />
    </div>

    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">NotificationBannerAuth — plug & play banner</h3>
      <p class="mt-1 text-xs text-muted-foreground">
        Reads the otp/login stores automatically: when
        <code class="rounded bg-muted px-1 py-0.5">isOpenBanner</code> is
        <code class="rounded bg-muted px-1 py-0.5">true</code> (and its modal is
        closed, and the banner is not suppressed) it renders a
        <code class="rounded bg-muted px-1 py-0.5">NotificationBanner</code>
        with a CTA that opens the matching modal and an OTP countdown when
        applicable. Already mounted inside
        <code class="rounded bg-muted px-1 py-0.5">NegoDesign</code> – add it
        manually only if you are not using it.
      </p>
      <CodeBlock code={notificationBannerAuthCode} title="NotificationBannerAuth.svelte" />
    </div>

    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">notification-banner-store — derived state</h3>
      <p class="mt-1 text-xs text-muted-foreground">
        Exposes the derived state consumed by the banner component
        (<code class="rounded bg-muted px-1 py-0.5">authBannerKind</code>,
        <code class="rounded bg-muted px-1 py-0.5">authBannerVisible</code>,
        <code class="rounded bg-muted px-1 py-0.5">authBannerCtaText</code>,
        etc.), plus the actions
        <code class="rounded bg-muted px-1 py-0.5">authBannerAction()</code> and
        <code class="rounded bg-muted px-1 py-0.5">authBannerDismiss()</code>.
        This is useful when building a custom banner.
      </p>
      <CodeBlock code={authBannerStoreCode} title="notification-banner-store.svelte.ts" />
    </div>
  </section>

  <section class="mt-16">
    <h2 class="text-2xl font-bold">Next steps</h2>
    <ol class="mt-4 list-decimal space-y-3 pl-5 text-sm text-muted-foreground">
      <li><a class="font-medium text-primary hover:underline" href="/docs/installation">Install NegoDesign</a> and import the styles.</li>
      <li>Pick a component from the <a class="font-medium text-primary hover:underline" href="/docs/components">component index</a>.</li>
      <li>Copy its example and render it on the shared <a class="font-medium text-primary hover:underline" href="/">demo pages</a>.</li>
    </ol>
  </section>
</div>