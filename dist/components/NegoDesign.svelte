<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import { setUserTranslations } from "../i18n/config";

  type Translations = Record<string, Record<string, string>>;

  let {
    translations,
    children,
  }: {
    /** Traduções customizadas por idioma. São mergeadas com as traduções base da lib. */
    translations?: Translations;
    children: any;
  } = $props();

  $effect(() => {
    if (translations) {
      setUserTranslations(translations);
    }
  });
</script>

<ModeWatcher />
{@render children()}
