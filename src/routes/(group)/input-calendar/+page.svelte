<script lang="ts">
  import { InputCalendar } from "$lib";

  let birthDate = $state("");
  let travelDate = $state("");
  let disabledDate = $state("2026-09-12");
  let compactDate = $state("");
</script>

<svelte:head>
  <title>InputCalendar Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">InputCalendar</h1>
  <p class="mt-2 text-muted-foreground">
    Date input with a reusable popover calendar. Click the field to open the
    calendar card and pick a day. Value is bound as an ISO
    <code class="rounded bg-muted px-1 py-0.5 text-xs">yyyy-mm-dd</code> string.
  </p>

  <div class="mt-8 space-y-6">
    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground">Basic</h2>
      <div class="mt-4">
        <InputCalendar
          label="Birth date"
          placeholder="dd/mm/yyyy"
          bind:value={birthDate}
        />
      </div>
      <p class="mt-4 text-xs text-muted-foreground">
        Bound value: <code class="rounded bg-muted px-1 py-0.5">{birthDate || "—"}</code>
      </p>
    </section>

    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground">
        With min / max range
      </h2>
      <div class="mt-4">
        <InputCalendar
          label="Travel date"
          placeholder="dd/mm/yyyy"
          min="2026-09-01"
          max="2026-12-31"
          bind:value={travelDate}
        />
      </div>
      <p class="mt-4 text-xs text-muted-foreground">
        Only dates between 01/09/2026 and 31/12/2026 are selectable.
        Bound value: <code class="rounded bg-muted px-1 py-0.5">{travelDate || "—"}</code>
      </p>
    </section>

    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground">Disabled</h2>
      <div class="mt-4">
        <InputCalendar
          label="Reserved date"
          placeholder="dd/mm/yyyy"
          disabled
          bind:value={disabledDate}
        />
      </div>
    </section>

    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground">
        Without label wrapper
      </h2>
      <div class="mt-4">
        <InputCalendar
          placeholder="Pick a date"
          isLabel={false}
          bind:value={compactDate}
        />
      </div>
    </section>
  </div>
</div>