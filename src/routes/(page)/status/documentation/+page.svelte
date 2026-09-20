<script lang="ts">
    import CodeBlock from "$lib/docs/CodeBlock.svelte";
    import { PageLoading } from "$lib";
    import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";

    let progress = $state(40);

    const codeBasic = `<script lang="ts">
  import { PageLoading } from "negodesign";
${"</" + "script>"}

<PageLoading />`;

    const codeProgress = `<script lang="ts">
  import { PageLoading } from "negodesign";
${"</" + "script>"}

<PageLoading
  progress={35}
  onAction={() => console.log("done")}
/>`;

    const codeCustom = `<script lang="ts">
  import { PageLoading } from "negodesign";
${"</" + "script>"}

<PageLoading
  progress={60}
  title="A carregar os seus dados"
  subtitle="Estamos a preparar tudo"
  description="Isto pode demorar alguns segundos."
  buttonText="Atualizar"
  titleColor="text-primary"
  buttonBg="bg-primary"
  buttonTextColor="text-primary-foreground"
  actionHref="/dashboard"
  onAction={() => console.log("refresh")}
>
  {#snippet imgSlot()}
    <img src="/media/load.png" alt="" class="size-16 sm:size-32" />
  {/snippet}
</PageLoading>`;

    const props = [
        {
            name: "progress",
            type: "number (0-100)",
            description:
                "Porcentagem de progresso. Quando definido, renderiza uma barra de progresso e a percentagem abaixo do ícone.",
        },
        {
            name: "title",
            type: "string",
            description: 'Sobrescreve o título internacionalizado ("status.loading.title").',
        },
        {
            name: "subtitle",
            type: "string",
            description: 'Sobrescreve o subtítulo internacionalizado ("status.loading.subtitle").',
        },
        {
            name: "description",
            type: "string",
            description: 'Sobrescreve a descrição internacionalizada ("status.loading.description").',
        },
        {
            name: "buttonText",
            type: "string",
            description: 'Label do botão de ação (padrão "status.loading.button").',
        },
        {
            name: "onAction",
            type: "() => void",
            description: "Callback ao clicar no botão de ação.",
        },
        {
            name: "actionHref",
            type: "string",
            description: "URL do botão de ação (renderiza um link em vez do callback onclick).",
        },
        {
            name: "imgSlot",
            type: "Snippet",
            description: "Snippet renderizado na área da imagem. Substitui o spinner padrão.",
        },
        {
            name: "titleColor",
            type: "string",
            description: 'Classe CSS da cor do título (ex.: "text-primary", "text-blue-600").',
        },
        {
            name: "buttonBg",
            type: "string",
            description: 'Classe CSS de fundo do botão (ex.: "bg-primary").',
        },
        {
            name: "buttonTextColor",
            type: "string",
            description: "Classe CSS da cor do texto do botão.",
        },
        {
            name: "emailPhoneWhatsapp",
            type: "CardEmailPhoneWhatsappProps",
            description: "Card de contactos CardEmailPhoneWhatsapp abaixo da descrição.",
        },
        {
            name: "children",
            type: "Snippet",
            description: "Conteúdo personalizado entre a descrição e o card de contactos.",
        },
        {
            name: "className",
            type: "string",
            description: "Classe CSS adicional para o container.",
        },
    ];

    const variants = [
        {
            href: "/status/pending",
            title: "Pending",
            badgeClass: "bg-amber-500/10 border-amber-500/30",
            textClass: "text-amber-500",
            icon: "loader-pinwheel",
        },
        {
            href: "/status/blocked",
            title: "Blocked",
            badgeClass: "bg-red-500/10 border-red-500/30",
            textClass: "text-red-500",
            icon: "cancel-01",
        },
        {
            href: "/status/recovering",
            title: "Recovering",
            badgeClass: "bg-blue-500/10 border-blue-500/30",
            textClass: "text-blue-500",
            icon: "refresh",
        },
        {
            href: "/status/custom",
            title: "Custom",
            badgeClass: "bg-primary/10 border-primary/30",
            textClass: "text-primary",
            icon: "setting-07",
        },
    ];
</script>

<svelte:head>
    <title>PageLoading Documentation | NegoDesign</title>
    <meta
        name="description"
        content="Documentação do PageLoading: demo interativa, exemplos de código e tabela de props."
    />
</svelte:head>

<a
    href="/status"
    class="fixed left-4 top-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
>
    <ImageHugeicons icon="arrow-left-01" class="size-3" />
    Status
</a>

<div class="mx-auto w-full max-w-4xl space-y-10 p-4 pt-16 md:pt-20">
    <header class="px-1">
        <div class="flex flex-wrap items-center gap-2">
            <h1 class="text-2xl font-bold text-foreground md:text-3xl">
                PageLoading
            </h1>
            <a
                href="/loading"
                class="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary transition hover:bg-primary/20"
            >
                Live demo
                <ImageHugeicons icon="arrow-right-01" class="size-3" />
            </a>
        </div>
        <p class="mt-2 text-sm text-muted-foreground">
            Página de carregamento completa (ocupa a altura do ecrã) com spinner
            animado, textos internacionalizados via i18n e barra de progresso
            opcional. É um wrapper do
            <code class="rounded bg-muted px-1 py-0.5">PageStatus</code>
            e herda todas as suas props. Inclui, no canto superior direito, o
            seletor de idioma e o interruptor de tema.
        </p>
    </header>

    <section class="space-y-4 px-1">
        <h2 class="text-lg font-semibold text-foreground">Demo interativa</h2>
        <div
            class="space-y-4 rounded-xl border border-border bg-card p-4 md:p-6"
        >
            <label
                class="flex items-center gap-2 text-sm text-muted-foreground"
            >
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
                <span class="w-10 font-semibold text-foreground"
                    >{progress}%</span
                >
            </label>
            <div class="rounded-xl border border-border bg-muted/30">
                <PageLoading progress={progress} />
            </div>
        </div>
    </section>

    <section class="space-y-4 px-1">
        <h2 class="text-lg font-semibold text-foreground">Instalação</h2>
        <CodeBlock
            code={`import { PageLoading } from "negodesign";`}
            title="Instalação"
        />
    </section>

    <section class="space-y-4 px-1">
        <h2 class="text-lg font-semibold text-foreground">Exemplos</h2>
        <div class="rounded-xl border border-border bg-card p-5">
            <h3 class="text-sm font-semibold">Uso básico</h3>
            <p class="mb-3 mt-1 text-sm text-muted-foreground">
                Renderiza o spinner com os textos de carregamento
                internacionalizados.
            </p>
            <CodeBlock code={codeBasic} title="PageLoading.svelte" />
        </div>
        <div class="rounded-xl border border-border bg-card p-5">
            <h3 class="text-sm font-semibold">Com progresso e ação</h3>
            <p class="mb-3 mt-1 text-sm text-muted-foreground">
                Adiciona uma barra de progresso e um botão de ação (ex.: durante
                um upload ou um checkout).
            </p>
            <CodeBlock code={codeProgress} title="PageLoading.svelte" />
        </div>
        <div class="rounded-xl border border-border bg-card p-5">
            <h3 class="text-sm font-semibold">Personalizado</h3>
            <p class="mb-3 mt-1 text-sm text-muted-foreground">
                Todos os textos, cores e a própria imagem podem ser
                sobrescritos via props e pelo snippet
                <code class="rounded bg-muted px-1 py-0.5">imgSlot</code>.
            </p>
            <CodeBlock code={codeCustom} title="PageLoading.svelte" />
        </div>
    </section>

    <section class="space-y-4 px-1">
        <h2 class="text-lg font-semibold text-foreground">Props</h2>
        <div class="overflow-x-auto rounded-xl border border-border bg-card">
            <table class="w-full text-left text-sm">
                <thead>
                    <tr
                        class="border-b border-border text-xs uppercase tracking-wider text-muted-foreground"
                    >
                        <th class="px-4 py-3 font-semibold">Nome</th>
                        <th class="px-4 py-3 font-semibold">Tipo</th>
                        <th class="px-4 py-3 font-semibold">Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {#each props as prop, i (prop.name)}
                        <tr
                            class="border-b border-border/60 last:border-b-0 {i % 2 === 1
                                ? 'bg-muted/30'
                                : ''}"
                        >
                            <td
                                class="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-primary"
                            >
                                {prop.name}
                            </td>
                            <td
                                class="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-muted-foreground"
                            >
                                {prop.type}
                            </td>
                            <td class="px-4 py-2.5 text-muted-foreground">
                                {prop.description}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </section>

    <section class="space-y-4 px-1">
        <h2 class="text-lg font-semibold text-foreground">Variantes</h2>
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
                            class="size-5 {variant.textClass}"
                        />
                    </span>
                    <h3 class="mt-3 font-semibold {variant.textClass}">
                        {variant.title}
                    </h3>
                    <span
                        class="mt-2 inline-flex items-center gap-1 text-sm font-medium {variant.textClass}"
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
    </section>
</div>