<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import { setUserTranslations } from "../i18n/config";

  type Translations = Record<string, Record<string, string>>;

  let {
    translations,
    children,
  }: {
    /** Custom translations per language. Merged with the library's base translations. */
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
