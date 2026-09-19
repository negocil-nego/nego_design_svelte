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
        { label: "Página inicial", url: "/", icon: "home-01" },
        {
          label: "Hospedagem",
          url: "/organization/accommodation",
          icon: "bed-double",
        },
        {
          label: "Restaurantes",
          url: "/organization/restaurants",
          icon: "rocket-01",
        },
        {
          label: "Turismo",
          url: "/organization/tourism",
          icon: "message-01",
        },
        {
          label: "Intérprete",
          url: "/interpreter",
          icon: "user",
        },
      ],
    }}
  />
</div>
