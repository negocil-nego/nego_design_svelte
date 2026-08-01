<script lang="ts">
    import SimpleCarousel from "$lib/components/core/carousel/ui/SimpleCarousel.svelte";
    import NavMenu from "$lib/components/core/nav/ui/nav-menu.svelte";
    import SearchInput from "$lib/components/core/search/SearchInput.svelte";
    import {
        AirplaneTakeOff02Icon,
        BedDoubleIcon,
        ConversationIcon,
        DashboardCircleIcon,
        Hotel01Icon,
        Hotel02Icon,
    } from "@hugeicons/core-free-icons";
</script>

<div
    class="flex flex-col justify-center items-center gap-2 md:gap-5 bg-linear-to-r from-[#007AFF] to-[#0056B3] dark:from-[#00448B] dark:to-[#0466ce] pb-5"
>
    <NavMenu
        logo={{
            label: "Negoturismo",
            className: "text-white",
        }}
        linkClass="text-white"
        links={[
            { label: "Hospegadem", href: "#", icon: Hotel01Icon },
            { label: "Voos", href: "#", icon: AirplaneTakeOff02Icon },
            { label: "Tradutores", href: "#", icon: ConversationIcon },
        ]}
        onclickButtonLogin={() => alert("login")}
        onclickButtonRegister={() => alert("register")}
    />
    <SearchInput
        variant={1}
        onSubmit={(q) => {
            alert(q);
        }}
    />
</div>
<div class="relative">
    <SimpleCarousel
        orientation="horizontal"
        items={[
            { label: "Todos", value: "hospegadem", icon: DashboardCircleIcon },
            { label: "Hotel", value: "hotel", icon: Hotel01Icon },
            { label: "Hospedaria", value: "hospedaria", icon: Hotel02Icon },
            { label: "Pensão", value: "pensao", icon: BedDoubleIcon },
        ]}
    />
</div>
