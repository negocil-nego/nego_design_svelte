<script lang="ts">
    import {
        PageStatus,
        PageStatusPending,
        PageStatusBlocked,
        PageStatusRecovering,
        PageLoading,
    } from "$lib";
    import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";

    let progress = $state(32);

    let activeDemo = $state<
        "pending" | "blocked" | "recovering" | "loading" | "custom"
    >("pending");

    function handleDone() {
        console.log("action clicked");
        alert("Action clicked! Check the console.");
    }
</script>

<svelte:head>
    <title>Status Page Demo | NegoDesign</title>
    <meta
        name="description"
        content="Live demo of PageStatus, PageStatusPending, PageStatusBlocked, PageStatusRecovering and PageLoading components."
    />
</svelte:head>

<div class="mx-auto w-full max-w-4xl space-y-6 p-4">
    <header class="px-1">
        <h1 class="text-2xl font-bold text-foreground md:text-3xl">
            PageStatus Demo
        </h1>
        <p class="mt-2 text-sm text-muted-foreground">
            Demonstração dos componentes
            <code class="rounded bg-muted px-1 py-0.5">PageStatusPending</code>,
            <code class="rounded bg-muted px-1 py-0.5">PageStatusBlocked</code>,
            <code class="rounded bg-muted px-1 py-0.5">PageStatusRecovering</code>,
            <code class="rounded bg-muted px-1 py-0.5">PageLoading</code>
            e
            <code class="rounded bg-muted px-1 py-0.5">PageStatus</code>
            com variantes personalizadas. Clique no botão para ver o callback
            na consola.
        </p>
    </header>

    <div class="flex flex-wrap gap-2 px-1">
        <button
            type="button"
            onclick={() => (activeDemo = "pending")}
            class="rounded-lg px-4 py-2 text-sm font-medium transition {activeDemo ===
            'pending'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'}"
        >
            Pending
        </button>
        <button
            type="button"
            onclick={() => (activeDemo = "blocked")}
            class="rounded-lg px-4 py-2 text-sm font-medium transition {activeDemo ===
            'blocked'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'}"
        >
            Blocked
        </button>
        <button
            type="button"
            onclick={() => (activeDemo = "recovering")}
            class="rounded-lg px-4 py-2 text-sm font-medium transition {activeDemo ===
            'recovering'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'}"
        >
            Recovering
        </button>
        <button
            type="button"
            onclick={() => (activeDemo = "loading")}
            class="rounded-lg px-4 py-2 text-sm font-medium transition {activeDemo ===
            'loading'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'}"
        >
            Loading
        </button>
        <button
            type="button"
            onclick={() => (activeDemo = "custom")}
            class="rounded-lg px-4 py-2 text-sm font-medium transition {activeDemo ===
            'custom'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'}"
        >
            Custom
        </button>
    </div>

    <div class="rounded-xl border border-border bg-card p-4">
        {#if activeDemo === "pending"}
            <PageStatusPending onAction={handleDone} />
        {:else if activeDemo === "blocked"}
            <PageStatusBlocked onAction={handleDone} />
        {:else if activeDemo === "recovering"}
            <PageStatusRecovering onAction={handleDone} />
        {:else if activeDemo === "loading"}
            <div class="space-y-4 pb-4">
                <label class="flex items-center gap-2 px-1 text-sm text-muted-foreground">
                    Progresso
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        oninput={(e) =>
                            (progress = Number((e.currentTarget as HTMLInputElement).value))}
                        class="w-40"
                    />
                    <span class="w-10 font-semibold text-foreground">{progress}%</span>
                </label>
                <div class="rounded-xl border border-border bg-muted/30">
                    <PageLoading progress={progress} onAction={handleDone} />
                </div>
            </div>
        {:else}
            <PageStatus
                title="Processing"
                subtitle="Your payment is being verified"
                description="This may take a few minutes. You will be notified once the process is complete."
                buttonText="Continue"
                titleColor="text-amber-500"
                buttonBg="bg-primary"
                buttonTextColor="text-primary-foreground"
                onAction={handleDone}
            >
                {#snippet imgSlot()}
                    <span
                        class="flex size-16 items-center justify-center rounded-full bg-amber-500/10 sm:size-32"
                    >
                        <ImageHugeicons
                            icon="wallet-01"
                            class="size-8 text-amber-500 sm:size-12"
                        />
                    </span>
                {/snippet}
            </PageStatus>
        {/if}
    </div>
</div>