<script lang="ts">
    import { Menu, openLogin } from "$lib";
    import {
        clearUser,
        isLoggedIn,
        setUser,
        updateUser,
        userStore,
    } from "$lib/stores";
    import type { User } from "$lib/stores";
    import SimpleMenu from "$lib/components/ui/nav/ui/SimpleMenu.svelte";
    import ComplexMenu from "$lib/components/ui/nav/ui/ComplexMenu.svelte";
    import SimpleMenuMobile from "$lib/components/ui/nav/ui/mobile/SimpleMenuMobile.svelte";
    import ComplexMenuMobile from "$lib/components/ui/nav/ui/mobile/ComplexMenuMobile.svelte";
    import type { NavMenuLinksProps } from "$lib/components/ui/nav/data/nav-menu";

    const demoUser: User = {
        id: "usr_01",
        name: "Sedrac SLC",
        email: "slcsedrac@gmail.com",
        avatarUrl: "https://github.com/octocat.png",
        onProfile: () => console.log("profile"),
        onSettings: () => console.log("settings"),
        onLogout: () => clearUser(),
    };

    const links: NavMenuLinksProps[] = [
        { label: "Hospedagem", href: "/admin/tabs/menu", icon: "BedDoubleIcon" },
        { label: "Voos", href: "/admin/tabs/menu", icon: "Rocket01Icon" },
        { label: "Tradutores", href: "/admin/tabs/menu", icon: "Message01Icon" },
    ];

    const menus = [
        {
            label: "Serviços",
            items: [
                { title: "Hospedagem", href: "/admin/tabs/menu" },
                { title: "Voos", href: "/admin/tabs/menu" },
                { title: "Tradutores", href: "/admin/tabs/menu" },
            ],
        },
        {
            label: "Explorar",
            list: [
                {
                    title: "Promoções",
                    href: "/admin/tabs/menu",
                    content: "Descontos exclusivos para a tua viagem.",
                },
                {
                    title: "Destinos",
                    href: "/admin/tabs/menu",
                    content: "Descobre os melhores destinos.",
                },
            ],
        },
    ];

    const demoUserNoActions: User = {
        id: "usr_02",
        name: "Ana Tourist",
        email: "ana@exemplo.ao",
    };

    function login() {
        setUser(demoUser);
    }

    function loginNoActions() {
        setUser(demoUserNoActions);
    }

    function rename() {
        updateUser({ name: "Sedrac" });
    }

    function logout() {
        clearUser();
    }
</script>

<svelte:head>
    <title>Menu + userStore Demo | NegoDesign</title>
    <meta
        name="description"
        content="Live demo of SimpleMenu, ComplexMenu, SimpleMenuMobile and ComplexMenuMobile reacting to the userStore."
    />
</svelte:head>

<div class="mx-auto w-full max-w-4xl space-y-6 p-4">
    <header class="px-1">
        <h1 class="text-2xl font-bold text-foreground md:text-3xl">
            Menu + userStore
        </h1>
        <p class="mt-2 text-sm text-muted-foreground">
            Demonstração dos componentes
            <code class="rounded bg-muted px-1 py-0.5">SimpleMenu</code>,
            <code class="rounded bg-muted px-1 py-0.5">ComplexMenu</code>,
            <code class="rounded bg-muted px-1 py-0.5">SimpleMenuMobile</code> e
            <code class="rounded bg-muted px-1 py-0.5">ComplexMenuMobile</code> a
            escutar o store
            <code class="rounded bg-muted px-1 py-0.5">user-store.svelte.ts</code>.
            Quando existe utilizador logado, os botões Login/Registar desaparecem
            e o <code class="rounded bg-muted px-1 py-0.5">AdminUserSection</code>
            assume o lugar — no desktop e no mobile ao mesmo tempo.
        </p>
    </header>

    <section class="rounded-xl border border-border bg-card p-5">
        <h2 class="text-lg font-bold">Sessão</h2>
        <p class="mt-1 text-sm text-muted-foreground">
            Um único <code class="rounded bg-muted px-1 py-0.5">User</code> guarda
            os dados e os callbacks (<code class="rounded bg-muted px-1 py-0.5">onProfile</code>,
            <code class="rounded bg-muted px-1 py-0.5">onSettings</code>,
            <code class="rounded bg-muted px-1 py-0.5">onLogout</code>). As opções
            do dropdown só aparecem quando o callback está preenchido — tenta o
            segundo botão para veres o menu sem "Perfil" nem "Definições".
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
            <button
                class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
                onclick={login}
            >
                setUser(demoUser)
            </button>
            <button
                class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
                onclick={loginNoActions}
            >
                setUser(sem callbacks)
            </button>
            <button
                class="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
                onclick={rename}
            >
                updateUser(&#123; name: "Sedrac" &#125;)
            </button>
            <button
                class="rounded-lg border border-destructive/40 bg-background px-4 py-2 text-sm font-semibold text-destructive transition hover:border-destructive"
                onclick={logout}
            >
                clearUser()
            </button>
        </div>
        <div
            class="mt-4 grid gap-3 rounded-lg border border-border bg-muted/40 p-4 text-sm sm:grid-cols-3"
        >
            <div>
                <span class="font-semibold text-muted-foreground"
                    >isLoggedIn():</span
                >
                <code class="ms-2 rounded bg-muted px-1.5 py-0.5">
                    {String(isLoggedIn())}
                </code>
            </div>
            <div>
                <span class="font-semibold text-muted-foreground">userStore.user.id:</span>
                <code class="ms-2 rounded bg-muted px-1.5 py-0.5">
                    {userStore.user?.id ?? "null"}
                </code>
            </div>
            <div>
                <span class="font-semibold text-muted-foreground"
                    >userStore.user.name:</span
                >
                <code class="ms-2 rounded bg-muted px-1.5 py-0.5">
                    {userStore.user?.name ?? "null"}
                </code>
            </div>
        </div>
    </section>

    <section class="space-y-2">
        <h2 class="px-1 text-lg font-bold">
            Menu — variante simples (<code>SimpleMenu</code> /
            <code>SimpleMenuMobile</code>)
        </h2>
        <p class="px-1 text-sm text-muted-foreground">
            Redimensiona a janela (ou abre no telemóvel) para ver a alternância
            entre o menu de desktop e o drawer.
        </p>
        <div class="rounded-xl border border-border bg-card p-2">
            <Menu
                isBorder
                isThemeSwitch
                isLanguageSwitcher
                logo={{ label: "Negoturismo", className: "font-bold text-lg" }}
                navMenuButton={{
                    textButtonLogin: "Entrar",
                    textButtonRegister: "Criar conta",
                    onclickButtonLogin: () => openLogin(),
                    onclickButtonRegister: () => console.log("register"),
                }}
                navMenu={{ links, linkClass: "text-sm" }}
            />
        </div>
    </section>

    <section class="space-y-2">
        <h2 class="px-1 text-lg font-bold">
            Menu — variante complexa (<code>ComplexMenu</code> /
            <code>ComplexMenuMobile</code>)
        </h2>
        <div class="rounded-xl border border-border bg-card p-2">
            <Menu
                logo={{ label: "Negoturismo", className: "font-bold text-lg" }}
                navMenuButton={{
                    onclickButtonLogin: () => openLogin(),
                    onclickButtonRegister: () => console.log("register"),
                }}
                navMenu={{ menus }}
            />
        </div>
    </section>

    <section class="space-y-4">
        <h2 class="px-1 text-lg font-bold">Componentes isolados</h2>
        <p class="px-1 text-sm text-muted-foreground">
            Nenhum destes componentes recebe props do utilizador — todos lêem o
            <code class="rounded bg-muted px-1 py-0.5">userStore</code>.
        </p>

        <div class="rounded-xl border border-border bg-card p-4">
            <h3 class="text-sm font-semibold">SimpleMenu</h3>
            <div class="mt-3 flex flex-wrap items-center gap-4">
                <SimpleMenu
                    {links}
                    linkClass="text-sm"
                    onclickButtonLogin={() => console.log("login")}
                    onclickButtonRegister={() => console.log("register")}
                />
            </div>
        </div>

        <div class="rounded-xl border border-border bg-card p-4">
            <h3 class="text-sm font-semibold">ComplexMenu</h3>
            <div class="mt-3 flex flex-wrap items-center gap-4">
                <ComplexMenu {menus} />
            </div>
        </div>

        <div class="rounded-xl border border-border bg-card p-4">
            <h3 class="text-sm font-semibold">SimpleMenuMobile</h3>
            <div class="mt-3 flex flex-wrap items-center gap-4">
                <SimpleMenuMobile
                    {links}
                    onclickButtonLogin={() => console.log("login")}
                    onclickButtonRegister={() => console.log("register")}
                />
            </div>
        </div>

        <div class="rounded-xl border border-border bg-card p-4">
            <h3 class="text-sm font-semibold">ComplexMenuMobile</h3>
            <div class="mt-3 flex flex-wrap items-center gap-4">
                <ComplexMenuMobile {menus} />
            </div>
        </div>
    </section>
</div>
