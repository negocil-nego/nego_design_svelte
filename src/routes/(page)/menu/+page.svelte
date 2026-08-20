<script lang="ts">
  import Menu from "$lib/components/core/nav/ui/Menu.svelte";
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
      menus: [
        {
          label: "Inicio",
          href: "/",
        },
        {
          label: "Novidade",
          header: {
            href: "/novidade",
            label: "Novidades",
            description: "Novidades em primeira mão",
          },
          cards: [
            {
              title: "Lorem",
              href: "/",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
            },
            {
              title: "Peasure",
              href: "/",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
            },
          ],
        },
        {
          label: "Lista",
          list: [
            {
              title: "Lorem",
              href: "/",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
            },
            {
              title: "Peasure",
              href: "/",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
            },
          ],
        },
        {
          label: "Grelha",
          grids: [
            {
              title: "Lorem",
              href: "/",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
            },
            {
              title: "Peasure",
              href: "/",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
            },
          ],
        },
        {
          label: "Ajuda",
          items: [
            {
              title: "Lorem",
              href: "/",
            },
            {
              title: "Peasure",
              href: "/",
            },
          ],
        },
      ],
    }}
  />
</div>
