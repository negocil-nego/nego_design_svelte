<script lang="ts">
  import Menu from "$lib/components/ui/nav/ui/Menu.svelte";
  </script>

<div class="mx-auto">
  <Menu
    isThemeSwitch
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
        { label: "Página inicial", url: "/", icon: "Home01Icon" },
        {
          label: "Hospedagem",
          url: "/organization/accommodation",
          icon: "BedDoubleIcon",
        },
        {
          label: "Restaurantes",
          url: "/organization/restaurants",
          icon: "Rocket01Icon",
        },
        {
          label: "Turismo",
          url: "/organization/tourism",
          icon: "Message01Icon",
        },
        {
          label: "Intérprete",
          url: "/interpreter",
          icon: "UserIcon",
        },
      ],
    }}
  />
</div>
