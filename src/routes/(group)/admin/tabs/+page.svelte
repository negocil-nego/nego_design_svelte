<script lang="ts">
    import { AdminTabs } from "$lib";

    let isProfileLoading = $state(false);
    let isAddressLoading = $state(false);
    let isSocialLoading = $state(false);

    let isPasswordLoading = $state(false);
    let isEmailLoading = $state(false);
    let isPhoneLoading = $state(false);
    let isDangerLoading = $state(false);

    const profileValues = {
        firstName: "Sedrac",
        lastName: "SLC",
        email: "slcsedrac@gmail.com",
        phone: "+244 923 456 789",
        birthDate: "1995-06-15",
        bio: "Desenvolvedor e entusiasta de turismo.",
    };

    const addressValues = {
        streetNumber: "12",
        neighborhood: "Maculusso",
        state: "Luanda",
        latitude: "-8.839988",
        longitude: "13.289437",
    };

    const socialValues = {
        whatsapp: "https://wa.me/244923456789",
        facebook: "https://facebook.com/sedrac.slc",
        linkedin: "https://linkedin.com/in/sedrac-slc",
        tiktok: "https://tiktok.com/@sedrac.slc",
        instagram: "https://instagram.com/sedrac.slc",
    };
</script>

<svelte:head>
    <title>Admin Tabs | NegoDesign</title>
    <meta
        name="description"
        content="Live demo of AdminTabs, AdminProfileTab and AdminSecurityTab."
    />
</svelte:head>

<div class="mx-auto w-full max-w-4xl space-y-6 p-4">
    <header class="px-1">
        <h1 class="text-2xl font-bold text-foreground md:text-3xl">
            Admin Tabs
        </h1>
        <p class="mt-2 text-sm text-muted-foreground">
            Página de exemplo que demonstra a utilização do componente
            AdminTabs com as abas Perfil (dados pessoais, morada e redes
            sociais) e Segurança. Abre a consola do navegador para veres os
            dados submetidos em cada formulário.
        </p>
    </header>

    <AdminTabs
        profileTab={{
            isLoadingUser: isProfileLoading,
            isLoadingAddress: isAddressLoading,
            isLoadingSocial: isSocialLoading,
            valuesUser: profileValues,
            valuesAddress: addressValues,
            valuesSocial: socialValues,
            onSubmitUser: (data) => {
                isProfileLoading = true;
                console.log("profile.user", data);
                setTimeout(() => (isProfileLoading = false), 800);
            },
            onSubmitAddress: (data) => {
                isAddressLoading = true;
                console.log("profile.address", data);
                setTimeout(() => (isAddressLoading = false), 800);
            },
            onSubmitSocial: (data) => {
                isSocialLoading = true;
                console.log("profile.social", data);
                setTimeout(() => (isSocialLoading = false), 800);
            },
        }}
        securityTab={{
            isLoadingPassword: isPasswordLoading,
            isLoadingEmail: isEmailLoading,
            isLoadingPhone: isPhoneLoading,
            isLoadingDanger: isDangerLoading,
            onSubmitPassword: (data) => {
                isPasswordLoading = true;
                console.log("security.password", data);
                setTimeout(() => (isPasswordLoading = false), 800);
            },
            onSubmitEmail: (data) => {
                isEmailLoading = true;
                console.log("security.email", data);
                setTimeout(() => (isEmailLoading = false), 800);
            },
            onSubmitPhone: (data) => {
                isPhoneLoading = true;
                console.log("security.phone", data);
                setTimeout(() => (isPhoneLoading = false), 800);
            },
            onSubmitDanger: (data) => {
                isDangerLoading = true;
                console.log("security.danger", data);
                setTimeout(() => (isDangerLoading = false), 800);
            },
        }}
    />
</div>