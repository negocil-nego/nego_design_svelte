<script lang="ts">
  import {
    openOtp,
    openLogin,
    closeOtp,
    closeLogin,
    otpStore,
    loginStore,
    getCountdownLabel,
    getIsBannerSuppressed,
    getAuthBannerKind,
    getAuthBannerVisible,
    suppressBanner,
    releaseBanner,
    setBannerSuppressed,
  } from "$lib/stores";
</script>

<svelte:head>
  <title>Stores Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">Stores (global state)</h1>
  <p class="mt-2 text-muted-foreground">
    Interactive demo of the global stores that control
    <code class="rounded bg-muted px-1 py-0.5">ModalOtp</code>,
    <code class="rounded bg-muted px-1 py-0.5">ModalLogin</code> and the
    <code class="rounded bg-muted px-1 py-0.5">NotificationBannerAuth</code>.
    These components are mounted once inside <code class="rounded bg-muted px-1 py-0.5">NegoDesign</code>
    (already active on this page), so clicking a button below opens them from anywhere.
  </p>

  <div class="mt-8 grid gap-6 md:grid-cols-2">
    <div class="rounded-xl border border-border bg-card p-5">
      <h2 class="text-lg font-bold">otpStore</h2>
      <p class="mt-1 text-sm text-muted-foreground">
        Open the OTP modal. <code class="rounded bg-muted px-0.5">minutes</code>
        starts a countdown; <code class="rounded bg-muted px-0.5">isOpenBanner</code>
        also shows the auth banner.
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <button
          class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
          onclick={() => openOtp({ minutes: 2 })}
        >
          OTP (2 min, no banner)
        </button>
        <button
          class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
          onclick={() => openOtp({ minutes: 5, isOpenBanner: true })}
        >
          OTP (5 min + banner)
        </button>
        <button
          class="rounded-lg border border-destructive/40 bg-background px-4 py-2 text-sm font-semibold text-destructive transition hover:border-destructive"
          onclick={() => closeOtp()}
        >
          Close
        </button>
      </div>
    </div>

    <div class="rounded-xl border border-border bg-card p-5">
      <h2 class="text-lg font-bold">loginStore</h2>
      <p class="mt-1 text-sm text-muted-foreground">
        Open the login modal. Pick a
        <code class="rounded bg-muted px-0.5">formType</code> and optionally
        enable the banner.
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <button
          class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
          onclick={() => openLogin({ formType: "EMAIL_PASSWORD", isOpenBanner: true })}
        >
          Email + banner
        </button>
        <button
          class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
          onclick={() => openLogin({ formType: "USERNAME_PASSWORD", title: "Welcome back" })}
        >
          Username
        </button>
        <button
          class="rounded-lg border border-destructive/40 bg-background px-4 py-2 text-sm font-semibold text-destructive transition hover:border-destructive"
          onclick={() => closeLogin()}
        >
          Close
        </button>
      </div>
    </div>
  </div>

  <div class="mt-6 rounded-xl border border-border bg-card p-5">
    <h2 class="text-lg font-bold">banner-store (suppression)</h2>
    <p class="mt-1 text-sm text-muted-foreground">
      Hide/show the auth banner on this page. Useful for screens that manage the
      OTP flow themselves (e.g. a confirmation page).
    </p>
    <div class="mt-4 flex flex-wrap gap-2">
      <button
        class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
        onclick={() => suppressBanner()}
      >
        suppressBanner()
      </button>
      <button
        class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
        onclick={() => releaseBanner()}
      >
        releaseBanner()
      </button>
      <button
        class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
        onclick={() => setBannerSuppressed(!getIsBannerSuppressed())}
      >
        setBannerSuppressed(!{getIsBannerSuppressed()})
      </button>
    </div>
  </div>

  <div class="mt-6 grid gap-3 rounded-xl border border-border bg-muted/40 p-5 text-sm sm:grid-cols-2">
    <div>
      <span class="font-semibold text-muted-foreground">otpStore.open:</span>
      <code class="ms-2 rounded bg-muted px-1.5 py-0.5">{String(otpStore.open)}</code>
    </div>
    <div>
      <span class="font-semibold text-muted-foreground">loginStore.open:</span>
      <code class="ms-2 rounded bg-muted px-1.5 py-0.5">{String(loginStore.open)}</code>
    </div>
    <div>
      <span class="font-semibold text-muted-foreground">getAuthBannerVisible():</span>
      <code class="ms-2 rounded bg-muted px-1.5 py-0.5">{String(getAuthBannerVisible())}</code>
    </div>
    <div>
      <span class="font-semibold text-muted-foreground">getAuthBannerKind():</span>
      <code class="ms-2 rounded bg-muted px-1.5 py-0.5">{getAuthBannerKind() ?? "null"}</code>
    </div>
    <div>
      <span class="font-semibold text-muted-foreground">getCountdownLabel():</span>
      <code class="ms-2 rounded bg-muted px-1.5 py-0.5">{getCountdownLabel()}</code>
    </div>
    <div>
      <span class="font-semibold text-muted-foreground">getIsBannerSuppressed():</span>
      <code class="ms-2 rounded bg-muted px-1.5 py-0.5">{String(getIsBannerSuppressed())}</code>
    </div>
  </div>
</div>