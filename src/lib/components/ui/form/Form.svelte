<script lang="ts">
  import { cn } from "$lib/utils";
  import InputBase from "./ui/input-base.svelte";
  import InputSelect from "./ui/input-select.svelte";
  import InputRadio from "./ui/input-radio.svelte";
  import InputCheckbox from "./ui/input-checkbox.svelte";
  import InputTextarea from "./ui/input-textarea.svelte";
  import InputToggle from "./ui/input-toggle.svelte";
  import InputBadges from "./ui/input-badges.svelte";
  import InputLocation from "./ui/input-location.svelte";
  import InputCodeOtp from "./ui/input-code-otp.svelte";
  import InputSubmit from "./ui/input-submit.svelte";
  import InputCalendar from "./ui/input-calendar.svelte";
  import InputCalendarInterval from "./ui/input-calendar-interval.svelte";
  import type { FormProps, FormInputConfig } from "./types";

  let {
    inputs = [],
    onSubmit,
    submitText = "Submit",
    submitLoadingText = "Submitting...",
    isLoading = false,
    isButton = true,
    columns = 2,
    gap = "gap-4",
    submitAlign = "end",
    class: className,
  }: FormProps = $props();

  let formValues =
    $state<Record<string, string | string[] | boolean>>(getInitialValues());

  function getInitialValues(): Record<string, string | string[] | boolean> {
    const values: Record<string, string | string[] | boolean> = {};
    for (const input of inputs) {
      if (input.type === "toggle") {
        values[input.name] = (input.value as boolean) ?? false;
      } else if (
        input.type === "checkbox" ||
        input.type === "badges" ||
        input.multiple
      ) {
        values[input.name] = (input.value as string[]) ?? [];
      } else if (input.type === "date-interval") {
        const startName = input.startName ?? `${input.name}Start`;
        const endName = input.endName ?? `${input.name}End`;
        const v = Array.isArray(input.value) ? input.value : [];
        values[startName] = v[0] ?? "";
        values[endName] = v[1] ?? "";
      } else {
        values[input.name] = (input.value as string) ?? "";
      }
    }
    return values;
  }

  function handleTextChange(name: string, e: Event) {
    const val = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
    formValues[name] = val;
    const config = inputs.find((i) => i.name === name);
    if (config?.onChange) {
      (config.onChange as (v: string | string[] | boolean) => void)(val);
    }
  }

  function handleSelectChange(name: string, val: string | string[]) {
    formValues[name] = val;
    const config = inputs.find((i) => i.name === name);
    if (config?.onChange) {
      (config.onChange as (v: string | string[] | boolean) => void)(val);
    }
  }

  function handleToggleChange(name: string, val: boolean) {
    formValues[name] = val;
    const config = inputs.find((i) => i.name === name);
    if (config?.onChange) {
      (config.onChange as (v: string | string[] | boolean) => void)(val);
    }
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (isLoading) return;
    onSubmit?.(formValues);
  }

  function getColSpan(input: FormInputConfig): string {
    if (input.fill) return "col-span-1 md:col-span-2";
    return "col-span-1";
  }
</script>

<form
  onsubmit={handleSubmit}
  class={cn(
    "grid w-full",
    columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1",
    gap,
    className,
  )}
>
  {#each inputs as input (input.name)}
    <div class={getColSpan(input)}>
      {#if input.type === "select"}
        <InputSelect
          label={input.label}
          isLabel
          placeholder={input.placeholder}
          options={input.options ?? []}
          multiple={input.multiple ?? false}
          disabled={input.disabled ?? false}
          required={input.required ?? false}
          bind:value={
            () => formValues[input.name] as string,
            (v) => handleSelectChange(input.name, v)
          }
        />
      {:else if input.type === "radio"}
        <InputRadio
          label={input.label}
          isLabel
          name={input.name}
          options={input.options ?? []}
          disabled={input.disabled ?? false}
          required={input.required ?? false}
          bind:value={
            () => formValues[input.name] as string,
            (v) => handleSelectChange(input.name, v)
          }
        />
      {:else if input.type === "checkbox"}
        <InputCheckbox
          label={input.label}
          isLabel
          name={input.name}
          options={input.options ?? []}
          disabled={input.disabled ?? false}
          required={input.required ?? false}
          bind:value={
            () => formValues[input.name] as string[],
            (v) => handleSelectChange(input.name, v)
          }
        />
      {:else if input.type === "textarea"}
        <InputTextarea
          label={input.label}
          isLabel
          placeholder={input.placeholder}
          disabled={input.disabled ?? false}
          required={input.required ?? false}
          rows={input.rows ?? 4}
          bind:value={
            () => formValues[input.name] as string,
            (v) => handleSelectChange(input.name, v)
          }
        />
      {:else if input.type === "toggle"}
        <InputToggle
          label={input.label}
          isLabel
          description={input.description}
          disabled={input.disabled ?? false}
          bind:value={
            () => formValues[input.name] as boolean,
            (v) => handleToggleChange(input.name, v)
          }
        />
      {:else if input.type === "badges"}
        <InputBadges
          label={input.label}
          isLabel
          placeholder={input.placeholder}
          suggestions={input.suggestions ?? []}
          maxTags={input.maxTags ?? 0}
          disabled={input.disabled ?? false}
          required={input.required ?? false}
          bind:value={
            () => formValues[input.name] as string[],
            (v) => handleSelectChange(input.name, v)
          }
        />
      {:else if input.type === "location"}
        <InputLocation
          label={input.label}
          isLabel
          description={input.description}
          disabled={input.disabled ?? false}
          locationText={input.locationText}
          locationLoadingText={input.locationLoadingText}
          onGetLocation={(coords) => {
            formValues[input.latitudeName ?? "latitude"] =
              coords.latitude.toFixed(6);
            formValues[input.longitudeName ?? "longitude"] =
              coords.longitude.toFixed(6);
          }}
        />
      {:else if input.type === "otp"}
        <InputCodeOtp
          label={input.label}
          isLabel
          placeholder={input.placeholder}
          length={input.length ?? 6}
          separator={input.separator ?? true}
          bind:value={
            () => formValues[input.name] as string,
            (v) => handleSelectChange(input.name, v)
          }
        />
      {:else if input.type === "submit"}
        <InputSubmit
          label={input.label ?? "Submit"}
          isLoading={isLoading}
          loadingText={input.loadingText}
          disabled={input.disabled ?? false}
          variant={input.variant}
        />
      {:else if input.type === "date"}
        <InputCalendar
          label={input.label}
          isLabel
          placeholder={input.placeholder}
          min={input.min}
          max={input.max}
          disabled={input.disabled ?? false}
          bind:value={
            () => formValues[input.name] as string,
            (v) => handleSelectChange(input.name, v)
          }
        />
      {:else if input.type === "date-interval"}
        <InputCalendarInterval
          label={input.label}
          isLabel
          placeholder={input.placeholder}
          disabled={input.disabled ?? false}
          bind:startValue={
            () => formValues[input.startName ?? `${input.name}Start`] as string,
            (v) =>
              handleSelectChange(input.startName ?? `${input.name}Start`, v)
          }
          bind:endValue={
            () => formValues[input.endName ?? `${input.name}End`] as string,
            (v) => handleSelectChange(input.endName ?? `${input.name}End`, v)
          }
        />
      {:else}
        <InputBase
          type={input.type === "phone" ? "tel" : input.type}
          label={input.label}
          isLabel
          isIcon
          placeholder={input.placeholder}
          disabled={input.disabled ?? false}
          required={input.required ?? false}
          bind:value={
            () => formValues[input.name] as string,
            (v) => handleSelectChange(input.name, v)
          }
        />
      {/if}
    </div>
  {/each}

  {#if isButton}
    <div
      class={cn(
        "flex",
        submitAlign === "start" ? "justify-start" : "justify-end",
        columns === 2 ? "col-span-1 md:col-span-2" : "col-span-1",
      )}
    >
      <button
        type="submit"
        disabled={isLoading}
        class="inline-flex items-center gap-2 rounded-lg bg-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? submitLoadingText : submitText}
      </button>
    </div>
  {/if}
</form>
