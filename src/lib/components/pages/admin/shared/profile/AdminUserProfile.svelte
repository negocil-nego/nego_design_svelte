<script lang="ts">
  import type { AdminUserProfileProps } from "./types";

  let {
    name,
    description,
    avatarUrl,
    badge,
    stats = [],
    badges = [],
    followLabel = "Follow",
    contactLabel = "Get in touch",
    onFollow,
    onContact,
    className = "",
  }: AdminUserProfileProps = $props();
</script>

<div
  class="relative overflow-hidden rounded-2xl border border-border bg-card {className}"
>
  <div class="absolute inset-x-0 top-0 h-28 bg-gradient opacity-80"></div>

  <div
    class="relative flex flex-col gap-6 p-6 pt-16 sm:flex-row sm:items-end sm:gap-8"
  >
    <div class="shrink-0 -mt-16 sm:-mt-20">
      {#if avatarUrl}
        <img
          src={avatarUrl}
          alt={name}
          class="h-28 w-28 rounded-3xl object-cover ring-4 ring-background sm:h-32 sm:w-32"
        />
      {:else}
        <div
          class="flex h-28 w-28 items-center justify-center rounded-3xl bg-muted ring-4 ring-background sm:h-32 sm:w-32"
        >
          <span class="text-3xl font-bold text-muted-foreground">
            {name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((p) => p[0]?.toUpperCase())
              .join("") || "ND"}
          </span>
        </div>
      {/if}
    </div>

    <div class="flex-1 min-w-0">
      <div class="flex flex-wrap items-center gap-2">
        <h2 class="text-xl font-bold tracking-tight text-foreground">{name}</h2>
        {#if badge}
          <span
            class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
          >
            {badge}
          </span>
        {/if}
      </div>

      {#if description}
        <p class="mt-1 text-sm text-muted-foreground">{description}</p>
      {/if}

      <div class="mt-3 flex flex-wrap items-center gap-2">
        {#if onFollow}
          <button
            type="button"
            onclick={onFollow}
            class="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
          >
            {followLabel}
          </button>
        {/if}
        {#if onContact}
          <button
            type="button"
            onclick={onContact}
            class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            {contactLabel}
          </button>
        {/if}
      </div>
    </div>

    <div class="flex flex-col items-end gap-3 sm:items-end">
      {#if badges.length > 0}
        <div class="flex gap-2">
          {#each badges as b, i (i)}
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
              style="background-color: {b.color}"
            >
              {b.value}
            </span>
          {/each}
        </div>
      {/if}

      {#if stats.length > 0}
        <div class="flex gap-6">
          {#each stats as stat, i (i)}
            <div class="text-right">
              <span class="block text-xs text-muted-foreground"
                >{stat.label}</span
              >
              <span
                class="block text-lg font-bold tracking-tight text-foreground"
                >{stat.value}</span
              >
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
