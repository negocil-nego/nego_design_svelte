<script lang="ts">
  import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import { languageFlagMap } from "$lib/components/ui/image/flag-map";
  import {
    languageStore,
    languagesStore,
    languageFlagStore,
    setLanguage,
  } from "$lib/stores";
  import { theme, toggleMode } from "$lib/theme.svelte";

  const sampleCountries = [
    "br", "pt", "us", "gb", "fr", "de", "es", "it", "jp", "cn", "ao", "mz", "cv",
  ];

  let selectedLang = $state($languageStore);

  function handleLangChange(lang: string) {
    selectedLang = lang;
    setLanguage(lang);
  }
</script>

<svelte:head>
  <title>Components Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">New Components & Stores</h1>
  <p class="mt-2 text-muted-foreground">
    Demo of the new <code class="rounded bg-muted px-1 py-0.5">ImageFlag</code> and
    <code class="rounded bg-muted px-1 py-0.5">languageStore</code>.
  </p>

  <!-- ImageFlag -->
  <div class="mt-8 rounded-xl border border-border bg-card p-5">
    <h2 class="text-lg font-bold">ImageFlag</h2>
    <p class="mt-1 text-sm text-muted-foreground">
      Renders a country flag from an ISO code.
    </p>
    <div class="mt-4 flex flex-wrap gap-4">
      {#each sampleCountries as code, i (i)}
        <div class="flex flex-col items-center gap-1">
          <ImageFlag country={code} class="size-12 rounded-md shadow-sm" />
          <span class="text-xs text-muted-foreground">{code.toUpperCase()}</span>
        </div>
      {/each}
    </div>

    <h3 class="mt-6 text-sm font-semibold">Language → Flag</h3>
    <div class="mt-2 flex flex-wrap gap-3">
      {#each Object.entries(languageFlagMap) as [lang, flag], i (i)}
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
      <code class="rounded bg-muted px-0.5">{$languageStore}</code> — Flag:
      <ImageFlag country={$languageFlagStore} class="inline size-4 rounded-sm" />
    </p>
    <div class="mt-4 flex flex-wrap gap-2">
      {#each $languagesStore as lang, i (i)}
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

  <!-- theme -->
  <div class="mt-6 rounded-xl border border-border bg-card p-5">
    <h2 class="text-lg font-bold">theme</h2>
    <p class="mt-1 text-sm text-muted-foreground">
      Current theme:
      <code class="rounded bg-muted px-0.5">{theme.current}</code>
    </p>
    <div class="mt-4 flex gap-2">
      <button
        onclick={() => { theme.current = "light"; }}
        class="rounded-lg border px-4 py-2 text-sm font-semibold transition
          {theme.current === 'light' ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background hover:border-primary/50'}"
      >
        Light
      </button>
      <button
        onclick={() => { theme.current = "dark"; }}
        class="rounded-lg border px-4 py-2 text-sm font-semibold transition
          {theme.current === 'dark' ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background hover:border-primary/50'}"
      >
        Dark
      </button>
      <button
        onclick={toggleMode}
        class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
      >
        Toggle
      </button>
    </div>
  </div>
</div>
