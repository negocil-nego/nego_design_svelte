<script lang="ts">
  import Menu from "$lib/components/core/nav/ui/Menu.svelte";
  import {
    Home01Icon,
    Hotel01Icon,
    AirplaneTakeOff02Icon,
    ConversationIcon,
    User02Icon,
  } from "@hugeicons/core-free-icons";
</script>

<div class="mx-auto">
  <Menu
    isLightSwitch
    isLanguageSwitcher
    logo={{ label: "Negoturismo" }}
    navMenuButton={{
      textButtonLogin: "Entrar",
      textButtonRegister: "Registrar",
      onclickButtonLogin: () => {},
      onclickButtonRegister: () => {},
      buttonClass: "bg-primary text-white",
    }}
    navMenu={{
      links: [
        { label: "Página inicial", url: "/", icon: Home01Icon },
        {
          label: "Hospedagem",
          url: "/organization/accommodation",
          icon: Hotel01Icon,
        },
        {
          label: "Restaurantes",
          url: "/organization/restaurants",
          icon: AirplaneTakeOff02Icon,
        },
        {
          label: "Turismo",
          url: "/organization/tourism",
          icon: ConversationIcon,
        },
        {
          label: "Intérprete",
          url: "/interpreter",
          icon: User02Icon,
        },
      ],
    }}
  />
</div>
