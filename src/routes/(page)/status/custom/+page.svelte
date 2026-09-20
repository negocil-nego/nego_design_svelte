<script lang="ts">
    import { PageStatus } from "$lib";
    import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
</script>

<svelte:head>
    <title>Custom | Status | NegoDesign</title>
    <meta
        name="description"
        content="Demo do PageStatus com textos, imagem, card de contactos e conteúdo personalizados."
    />
</svelte:head>

<a
    href="/status"
    class="fixed left-4 top-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
>
    <ImageHugeicons icon="arrow-left-01" class="size-3" />
    Status
</a>

<PageStatus
    title="Pagamento em processamento"
    subtitle="Estamos a verificar o seu pagamento"
    description="Isto pode demorar alguns minutos. Será notificado assim que o processo terminar."
    buttonText="Continuar"
    imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop"
    titleColor="text-amber-500"
    bgColor="bg-amber-500/10"
    iconBg="bg-amber-500"
    iconColor="text-white"
    buttonBg="bg-primary"
    buttonTextColor="text-primary-foreground"
    actionHref="/status"
    emailPhoneWhatsapp={{
        visible: ["email", "phone"],
        onSelect: (method) => console.log("contact", method),
    }}
    onAction={() => console.log("continue")}
>
    {#snippet children()}
        <p class="mt-2 max-w-md text-xs text-muted-foreground">
            Tens alguma dúvida? Fala connosco pelo email ou telefone durante o
            horário útil.
        </p>
    {/snippet}
</PageStatus>