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

export type SearchProductInputProps = {
  /** Texto de localização do input de busca (bindable) */
  value?: string;
  /** Preço mínimo do filtro (bindable) */
  priceMin?: number | null;
  /** Preço máximo do filtro (bindable) */
  priceMax?: number | null;
  /** Lista de organizações apresentadas no selector de organização */
  organizations?: { image: string; name: string }[];
  /** Organizações selecionadas no filtro (bindable) */
  organizationValues?: string[];
  /** Grupos de sugestões para o InputCommand */
  groups?: CommandGroup[];
  /** Callback ao alterar o valor do input */
  onchange?: (value: string) => void;
  /** Callback ao submeter a busca (Enter ou botão) */
  onSubmit?: (value: string) => void;
  /** Callback ao selecionar um item do InputCommand */
  onSelect?: (item: CommandItem) => void;
  /** Callback ao alterar o texto de localização */
  onLocationChange?: (value: string) => void;
  /** Callback ao alterar o preço mínimo ou máximo */
  onPriceChange?: (priceMin: number | null, priceMax: number | null) => void;
  /** Callback ao alterar as organizações selecionadas */
  onOrganizationChange?: (values: string[]) => void;
};

export type SearchTourismAreaInputProps = {
  /** Texto de localização do input de busca (bindable) */
  value?: string;
  /** Províncias disponíveis no filtro (padrão: províncias de Angola) */
  provinces?: { value: string; label: string }[];
  /** Províncias selecionadas no filtro (bindable) */
  provinceValues?: string[];
  /** Grupos de sugestões para o InputCommand */
  groups?: CommandGroup[];
  /** Callback ao alterar o valor do input */
  onchange?: (value: string) => void;
  /** Callback ao submeter a busca (Enter ou botão) */
  onSubmit?: (value: string) => void;
  /** Callback ao selecionar um item do InputCommand */
  onSelect?: (item: CommandItem) => void;
  /** Callback ao alterar o texto de localização */
  onLocationChange?: (value: string) => void;
  /** Callback ao alterar as províncias selecionadas */
  onProvinceChange?: (values: string[]) => void;
};
