<script lang="ts" module>
  import type { TelInputOptions } from "./types";

  export const defaultOptions: TelInputOptions = {
    spaces: true,
    autoPlaceholder: true,
  };
</script>

<script lang="ts">
  import CountrySelector from "./country-selector.svelte";
  import { COUNTRIES, type PhoneInputProps } from ".";
  import { cn } from "$lib/utils.js";

  let {
    class: className = undefined,
    defaultCountry = "ao",
    country = $bindable(defaultCountry),
    options = defaultOptions,
    placeholder,
    readonly = false,
    disabled = false,
    value = $bindable(""),
    valid = $bindable(true),
    // eslint-disable-next-line no-useless-assignment
    detailedValue = $bindable(null),
    order = undefined,
    name = undefined,
    ...rest
  }: PhoneInputProps = $props();

  let el: HTMLInputElement | undefined = $state();
  let dialCode = $state("");
  let number = $state("");
  let displayNumber = $state("");
  let lastEmitted = $state("");

  const currentCountry = $derived(
    COUNTRIES.find((c) => c.iso2 === country) ?? null,
  );

  function nationalDigits(input: string): string {
    return input.replace(/\D/g, "");
  }

  function formatNational(input: string): string {
    const digits = nationalDigits(input);
    if (!options?.spaces) return digits;
    return digits.match(/.{1,3}/g)?.join(" ") ?? "";
  }

  function formatFull(code: string, input: string): string {
    const national = nationalDigits(input);
    if (!national) return "";
    return `(+${code})${national}`;
  }

  function parseValue(input: string): { code: string; number: string } | null {
    const match = input.match(/^\(\+(\d{1,3})\)(\d+)$/);
    if (match) return { code: match[1], number: match[2] };

    const digits = nationalDigits(input);
    if (!digits) return null;
    for (const c of COUNTRIES) {
      if (digits.startsWith(c.dialCode) && digits.length > c.dialCode.length) {
        return {
          code: c.dialCode,
          number: digits.slice(c.dialCode.length),
        };
      }
    }
    const exact = COUNTRIES.find((c) => digits === c.dialCode);
    if (exact) return { code: exact.dialCode, number: "" };
    return { code: "", number: digits };
  }

  function isValidNumber(input: string): boolean {
    const length = nationalDigits(input).length;
    if (!length) return true;
    return length >= 6 && length <= 15;
  }

  function handleNumberInput(e: Event) {
    const input = (e.currentTarget as HTMLInputElement).value;
    displayNumber = input;
    number = input.replace(/[^\d]/g, "");
  }

  function focus() {
    setTimeout(() => {
      el?.focus();
    }, 0);
  }

  $effect(() => {
    const full = formatFull(dialCode, number);
    if (value !== full) {
      value = full;
      lastEmitted = full;
    }
    valid = isValidNumber(number);
    detailedValue = {
      country: currentCountry,
      code: dialCode,
      number: nationalDigits(number),
    };
  });

  $effect(() => {
    const incoming = value;
    if (incoming === lastEmitted) return;
    lastEmitted = incoming;
    const parsed = parseValue(incoming);
    if (!parsed) {
      if (!nationalDigits(incoming)) {
        number = "";
        displayNumber = "";
      }
      return;
    }
    if (parsed.code) {
      const matched = COUNTRIES.find((c) => c.dialCode === parsed.code);
      if (matched && matched.iso2 !== country) country = matched.iso2;
    }
    dialCode = parsed.code;
    number = parsed.number;
    displayNumber = formatNational(parsed.number);
  });
</script>

<div class={cn("flex h-9 w-full min-w-0 items-center")}>
  <div class="">
    <CountrySelector
      {order}
      {disabled}
      bind:selected={country}
      bind:dialCode
      onselect={focus}
    />
  </div>
  <input
    type="tel"
    {name}
    bind:this={el}
    bind:value={displayNumber}
    oninput={handleNumberInput}
    {placeholder}
    {readonly}
    {disabled}
    aria-invalid={!valid}
    class={cn(
      "border-input bg-transparent border-l-none selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground flex h-9 w-full min-w-0 flex-1 rounded-r-md rounded-l-none border-y border-r px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      className,
    )}
    {...rest}
  />
</div>
