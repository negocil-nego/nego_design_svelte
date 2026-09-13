<script lang="ts">
  import { InputCalendarInterval } from "$lib";

  let period = $state({
    start: "",
    end: "",
  });
  let compactPeriod = $state({
    start: "",
    end: "",
  });
</script>

<svelte:head>
  <title>InputCalendarInterval Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">InputCalendarInterval</h1>
  <p class="mt-2 text-muted-foreground">
    Date range input reusing the same popover calendar card. The popover opens
    two calendars, start and end, side by side on desktop and stacked on mobile.
    The component guarantees the start date is always less than or equal to the
    end date.
  </p>

  <div class="mt-8 space-y-6">
    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground">Basic</h2>
      <div class="mt-4">
        <InputCalendarInterval
          label="Travel period"
          bind:startValue={period.start}
          bind:endValue={period.end}
        />
      </div>
      <p class="mt-4 text-xs text-muted-foreground">
        Start: <code class="rounded bg-muted px-1 py-0.5">{period.start || "—"}</code>
        &nbsp;·&nbsp; End: <code class="rounded bg-muted px-1 py-0.5">{period.end || "—"}</code>
      </p>
    </section>

    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground">
        Without label wrapper
      </h2>
      <div class="mt-4">
        <InputCalendarInterval
          isLabel={false}
          bind:startValue={compactPeriod.start}
          bind:endValue={compactPeriod.end}
        />
      </div>
      <p class="mt-4 text-xs text-muted-foreground">
        Start: <code class="rounded bg-muted px-1 py-0.5">{compactPeriod.start || "—"}</code>
        &nbsp;·&nbsp; End: <code class="rounded bg-muted px-1 py-0.5">{compactPeriod.end || "—"}</code>
      </p>
    </section>
  </div>
</div>