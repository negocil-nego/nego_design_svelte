<script lang="ts">
    import { AdminUserProfile } from "$lib";
</script>

<svelte:head>
    <title>Admin User Profile | NegoDesign</title>
    <meta
        name="description"
        content="Live demo of AdminUserProfile component."
    />
</svelte:head>

<div class="mx-auto w-full max-w-4xl space-y-6 p-4">
    <header class="px-1">
        <h1 class="text-2xl font-bold text-foreground md:text-3xl">
            Admin User Profile
        </h1>
        <p class="mt-2 text-sm text-muted-foreground">
            Pagina de exemplo que demonstra a utilizacao do componente
            AdminUserProfile com avatar, badge, estatisticas, badges
            coloridos e botoes de accao.
        </p>
    </header>

    <AdminUserProfile
        name="Sedrac SLC"
        description="Developer and travel enthusiast."
        avatarUrl="https://github.com/octocat.png"
        badge="Pro"
        stats={[
            { label: "Posts", value: 124 },
            { label: "Followers", value: "4.2k" },
            { label: "Following", value: 312 },
        ]}
        badges={[
            { value: 1, color: "#3b82f6" },
            { value: 2, color: "#ef4444" },
            { value: 3, color: "#10b981" },
        ]}
        followLabel="Follow"
        contactLabel="Get in touch"
        onFollow={() => alert("Follow clicked")}
        onContact={() => alert("Contact clicked")}
    />

    <AdminUserProfile
        name="Ana Silva"
        description="Designer e fotografa."
        badge="Admin"
    />

    <AdminUserProfile
        name="Carlos Mendes"
        description="Manager de projetos turisticos."
        badge="Editor"
        stats={[
            { label: "Projects", value: 18 },
            { label: "Reviews", value: 256 },
        ]}
        onFollow={() => alert("Follow Carlos")}
        onContact={() => alert("Contact Carlos")}
    />
</div>
