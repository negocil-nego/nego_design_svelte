<script lang="ts">
    import SimpleBadgeCarousel from "$lib/components/core/carousel/ui/SimpleBadgeCarousel.svelte";
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
    class="flex flex-col justify-center items-center gap-2 md:gap-5 bg-gradient-left pb-5 border-b"
>
    <NavMenu
        logo={{
            label: "Negoturismo",
            className: "text-white",
        }}
        linkClass="text-white"
        buttonClass="bg-white text-black dark:bg-black dark:text-white"
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
    <SimpleBadgeCarousel
        buttonPreviousAndNextClass="bg-[#00b627] text-white dark:bg-black dark:text-white"
        orientation="vertical"
        isBorderItem={false}
        iconClass="size-6"
        items={[
            { label: "Todos", value: "hospegadem", icon: DashboardCircleIcon },
            { label: "Hotel", value: "hotel", icon: Hotel01Icon },
            { label: "Hospedaria", value: "hospedaria", icon: Hotel02Icon },
            { label: "Pensão", value: "pensao", icon: BedDoubleIcon },
        ]}
    />
</div>
