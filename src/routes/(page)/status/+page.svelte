<script lang="ts">
    import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";

    const variants = [
        {
            href: "/status/pending",
            title: "Pending",
            description:
                "Estado pendente (âmbar): o pedido está a ser processado. Usa o wrapper PageStatusPending.",
            icon: "loader-pinwheel",
            titleClass: "text-amber-500",
            badgeClass: "bg-amber-500/10 border-amber-500/30",
        },
        {
            href: "/status/blocked",
            title: "Blocked",
            description:
                "Estado bloqueado (vermelho): o acesso foi restrito. Usa o wrapper PageStatusBlocked.",
            icon: "cancel-01",
            titleClass: "text-red-500",
            badgeClass: "bg-red-500/10 border-red-500/30",
        },
        {
            href: "/status/recovering",
            title: "Recovering",
            description:
                "Recuperação de senha (azul): estamos a processar a recuperação. Usa o wrapper PageStatusRecovering.",
            icon: "refresh",
            titleClass: "text-blue-500",
            badgeClass: "bg-blue-500/10 border-blue-500/30",
        },
        {
            href: "/status/custom",
            title: "Custom",
            description:
                "PageStatus base com textos, imagem, card de contactos e snippet children personalizados.",
            icon: "setting-07",
            titleClass: "text-primary",
            badgeClass: "bg-primary/10 border-primary/30",
        },
    ];
</script>

<svelte:head>
    <title>Status Pages | NegoDesign</title>
    <meta
        name="description"
        content="Demos das páginas de estado do NegoDesign: pending, blocked, recovering e custom."
    />
</svelte:head>

<div class="mx-auto w-full max-w-4xl space-y-8 p-4">
    <header class="px-1">
        <h1 class="text-2xl font-bold text-foreground md:text-3xl">
            Status Pages
        </h1>
        <p class="mt-2 text-sm text-muted-foreground">
            Páginas de estado completas (ocupam a altura do ecrã) com ícone,
            título, subtítulo, descrição e botão de ação. Cada cartão abre uma
            demo em página inteira. Presencialmente abres a consola do navegador
            para veres o callback do botão.
        </p>
    </header>

    <div class="grid gap-4 sm:grid-cols-2">
        {#each variants as variant (variant.href)}
            <a
                href={variant.href}
                class="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 hover:bg-muted/40"
            >
                <span
                    class="inline-flex size-10 items-center justify-center rounded-lg {variant.badgeClass}"
                >
                    <ImageHugeicons
                        icon={variant.icon}
                        class="size-5 {variant.titleClass}"
                    />
                </span>
                <h2 class="mt-3 font-semibold {variant.titleClass}">
                    {variant.title}
                </h2>
                <p class="mt-1 text-sm text-muted-foreground">
                    {variant.description}
                </p>
                <span
                    class="mt-4 inline-flex items-center gap-1 text-sm font-medium {variant.titleClass}"
                >
                    Ver demo
                    <ImageHugeicons
                        icon="arrow-right-01"
                        class="size-4 transition group-hover:translate-x-1"
                    />
                </span>
            </a>
        {/each}
    </div>
</div>