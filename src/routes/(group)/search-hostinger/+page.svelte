<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import SearchHostingerInput from "$lib/components/ui/search/varients/SearchHostingerInput.svelte";
  import { ThemeSwitch } from "$lib/components/ui/theme-switch";

  let searchValue = $state("");
  let lastSubmitted = $state("");
</script>

<svelte:head>
  <title>SearchHostingerInput Demo | NegoDesign</title>
</svelte:head>

<div class="flex gap-2 justify-end p-2">
  <ThemeSwitch />
  <LanguageSwitcher />
</div>

<div class="mx-auto max-w-3xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">SearchHostingerInput</h1>
  <p class="mt-2 text-muted-foreground">
    Campo de busca estilo Hostinger com input de texto, seletor de datas
    (InputCalendarInterval), seletor de hóspedes/quartos (PopoverGuestsAndRooms)
    e botão de pesquisa. Responsivo — no mobile esconde os seletores de data e
    hóspedes.
  </p>

  <div class="mt-8 space-y-6">
    <section class="">
      <div class="mt-4">
        <SearchHostingerInput
          bind:value={searchValue}
          onchange={(v) => console.log("changed", v)}
          onSubmit={(v) => {
            lastSubmitted = v;
            console.log("submitted", v);
          }}
        />
      </div>
    </section>
  </div>
</div>
