<script lang="ts">
    import {
        PageStatus,
        PageStatusPending,
        PageStatusBlocked,
        PageStatusRecovering,
    } from "$lib";

    let activeDemo = $state<"pending" | "blocked" | "recovering" | "custom">("pending");

    function handleDone() {
        console.log("action clicked");
        alert("Action clicked! Check the console.");
    }
</script>

<svelte:head>
    <title>Status Page Demo | NegoDesign</title>
    <meta
        name="description"
        content="Live demo of PageStatus, PageStatusPending, PageStatusBlocked and PageStatusRecovering components."
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
            <code class="rounded bg-muted px-1 py-0.5">PageStatusRecovering</code>
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
            onclick={() => (activeDemo = "custom")}
            class="rounded-lg px-4 py-2 text-sm font-medium transition {activeDemo ===
            'custom'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'}"
        >
            Custom
        </button>
    </div>

    <div class="rounded-xl border border-border bg-card">
        {#if activeDemo === "pending"}
            <PageStatusPending onAction={handleDone} />
        {:else if activeDemo === "blocked"}
            <PageStatusBlocked onAction={handleDone} />
        {:else if activeDemo === "recovering"}
            <PageStatusRecovering onAction={handleDone} />
        {:else}
            <PageStatus
                title="Processing"
                subtitle="Your payment is being verified"
                description="This may take a few minutes. You will be notified once the process is complete."
                buttonText="Continue"
                titleColor="text-amber-500"
                bgColor="bg-amber-500/10"
                iconBg="bg-amber-500"
                iconColor="text-white"
                buttonBg="bg-primary"
                buttonTextColor="text-primary-foreground"
                onAction={handleDone}
            />
        {/if}
    </div>
</div>
