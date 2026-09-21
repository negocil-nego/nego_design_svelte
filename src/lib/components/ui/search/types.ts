import type { CommandGroup, CommandItem } from "$lib/components/ui/form/ui/input-command.svelte";

export type SearchHostingerInputProps = {
  /** Valor do input de busca (bindable) */
  value?: string;
  /** Grupos de sugestões para o InputCommand */
  groups?: CommandGroup[];
  /** Callback ao alterar o valor do input */
  onchange?: (value: string) => void;
  /** Callback ao submeter a busca (Enter ou botão) */
  onSubmit?: (value: string) => void;
  /** Callback ao selecionar um item do InputCommand */
  onSelect?: (item: CommandItem) => void;
};
