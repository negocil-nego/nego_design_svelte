<script lang="ts">
  import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import { languageFlagMap } from "$lib/components/ui/image/flag-map";
  import {
    languageStore,
    languagesStore,
    languageFlagStore,
    setLanguage,
  } from "$lib/stores";
  import { themeStore, isDarkStore, toggleTheme, setTheme } from "$lib/stores";

  const sampleCountries = ["br", "pt", "us", "gb", "fr", "de", "es", "it", "jp", "cn", "ao", "mz", "cv"];

  let selectedLang = $state($languageStore);
  let selectedTheme = $state($themeStore);

  function handleLangChange(lang: string) {
    selectedLang = lang;
    setLanguage(lang);
  }

  function handleThemeChange(t: string) {
    selectedTheme = t as "light" | "dark";
    setTheme(selectedTheme);
  }
</script>

<svelte:head>
  <title>Components Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">New Components & Stores</h1>
  <p class="mt-2 text-muted-foreground">
    Demo of the new <code class="rounded bg-muted px-1 py-0.5">ImageFlag</code>,
    <code class="rounded bg-muted px-1 py-0.5">languageStore</code> and
    <code class="rounded bg-muted px-1 py-0.5">themeStore</code>.
  </p>

  <!-- ImageFlag -->
  <div class="mt-8 rounded-xl border border-border bg-card p-5">
    <h2 class="text-lg font-bold">ImageFlag</h2>
    <p class="mt-1 text-sm text-muted-foreground">
      Renders a country flag from an ISO code. Pass a language code and it resolves
      to the representative country flag via <code class="rounded bg-muted px-0.5">languageFlagMap</code>.
    </p>
    <div class="mt-4 flex flex-wrap gap-4">
      {#each sampleCountries as code}
        <div class="flex flex-col items-center gap-1">
          <ImageFlag country={code} class="size-12 rounded-md shadow-sm" />
          <span class="text-xs text-muted-foreground">{code.toUpperCase()}</span>
        </div>
      {/each}
    </div>

    <h3 class="mt-6 text-sm font-semibold">Dimension 1x1</h3>
    <div class="mt-2 flex flex-wrap gap-3">
      {#each sampleCountries as code}
        <ImageFlag country={code} class="size-8 rounded-full" />
      {/each}
    </div>

    <h3 class="mt-6 text-sm font-semibold">Language → Flag</h3>
    <div class="mt-2 flex flex-wrap gap-3">
      {#each Object.entries(languageFlagMap) as [lang, flag]}
        <div class="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5">
          <ImageFlag country={flag} class="size-5 rounded-sm" />
          <span class="text-sm">{lang} → {flag.toUpperCase()}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- languageStore -->
  <div class="mt-6 rounded-xl border border-border bg-card p-5">
    <h2 class="text-lg font-bold">languageStore</h2>
    <p class="mt-1 text-sm text-muted-foreground">
      Reactive language store. Current:
      <code class="rounded bg-muted px-0.5">{$languageStore}</code> —
      Flag:
      <ImageFlag country={$languageFlagStore} class="inline size-4 rounded-sm" />
    </p>
    <div class="mt-4 flex flex-wrap gap-2">
      {#each $languagesStore as lang}
        <button
          onclick={() => handleLangChange(lang)}
          class="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition
            {selectedLang === lang ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background hover:border-primary/50'}"
        >
          <ImageFlag country={languageFlagMap[lang] ?? "gb"} class="size-4 rounded-sm" />
          {lang.toUpperCase()}
        </button>
      {/each}
    </div>
  </div>

  <!-- themeStore -->
  <div class="mt-6 rounded-xl border border-border bg-card p-5">
    <h2 class="text-lg font-bold">themeStore</h2>
    <p class="mt-1 text-sm text-muted-foreground">
      Reactive theme store. Current:
      <code class="rounded bg-muted px-0.5">{$themeStore}</code> —
      isDark: <code class="rounded bg-muted px-0.5">{$isDarkStore}</code>
    </p>
    <div class="mt-4 flex gap-2">
      <button
        onclick={() => handleThemeChange("light")}
        class="rounded-lg border px-4 py-2 text-sm font-semibold transition
          {selectedTheme === 'light' ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background hover:border-primary/50'}"
      >
        Light
      </button>
      <button
        onclick={() => handleThemeChange("dark")}
        class="rounded-lg border px-4 py-2 text-sm font-semibold transition
          {selectedTheme === 'dark' ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background hover:border-primary/50'}"
      >
        Dark
      </button>
      <button
        onclick={toggleTheme}
        class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
      >
        Toggle
      </button>
    </div>
  </div>
</div>
