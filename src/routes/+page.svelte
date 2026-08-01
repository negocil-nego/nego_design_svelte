<script lang="ts">
    import NavMenu from "$lib/components/core/nav/ui/nav-menu.svelte";
    import { AirplaneTakeOff02Icon, ConversationIcon, Hotel01Icon } from "@hugeicons/core-free-icons";
</script>
<NavMenu
    logo={{
        label: "Negoturismo",
    }}
    links={[
        { label: "Hospegadem", href: "#", icon: Hotel01Icon },
        { label: "Voos", href: "#", icon: AirplaneTakeOff02Icon },
        { label: "Tradutores", href: "#", icon: ConversationIcon },
    ]}
    onclickButtonLogin={() => console.log("login")}
    onclickButtonRegister={() => console.log("register")}
/>