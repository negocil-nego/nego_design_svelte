<script lang="ts">
  import NavMenu from "$lib/components/core/nav/ui/SimpleMenu.svelte";
  import SearchInput from "$lib/components/core/search/SearchInput.svelte";
  import {
    AirplaneTakeOff02Icon,
    ConversationIcon,
    Hotel01Icon,
    UserSearch,
  } from "@hugeicons/core-free-icons";

  let { children } = $props();
</script>

<div
  class="flex flex-col justify-center items-center bg-gradient pb-5 border-b"
>
  <div
    class="container-fixed flex flex-col justify-center items-center gap-2 md:gap-5"
  >
    <NavMenu
      logo={{
        label: "Negoturismo",
        className: "text-white",
      }}
      linkClass="text-white"
      buttonClass="bg-white text-black dark:bg-black dark:text-white"
      links={[
        { label: "Hospegadem", url: "#", icon: Hotel01Icon },
        { label: "Voos", url: "#", icon: AirplaneTakeOff02Icon },
        { label: "Tradutores", url: "#", icon: ConversationIcon },
        { label: "Freelanchers", url: "#", icon: UserSearch },
      ]}
      onclickButtonLogin={() => alert("login")}
      onclickButtonRegister={() => alert("register")}
    />
    <SearchInput
      variant={1}
      buttonClass="bg-gradient"
      onSubmit={(q) => {
        alert(q);
      }}
    />
  </div>
</div>
{@render children()}
