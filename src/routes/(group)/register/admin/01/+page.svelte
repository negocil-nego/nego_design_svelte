<script lang="ts">
  import { PageRegister, t } from "$lib";

  let variant = $state<1 | 2 | 3>(1);

  const carousel = [
    {
      buttonText: $t("label.next"),
      title: "Create your account",
      description:
        "Join us today and start your journey. Fill in the details below to get started.",
    },
    {
      buttonText: $t("label.next"),
      title: "Explore our features",
      description:
        "Discover all the amazing features we offer. From secure transactions to real-time analytics.",
    },
    {
      buttonText: $t("label.next"),
      title: "Welcome aboard",
      description:
        "You're almost there! Complete your registration and unlock the full experience.",
    },
  ];
</script>

<div class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
  <button
    onclick={() => variant = 1}
    class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors {variant === 1 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}"
  >
    Variant 01
  </button>
  <button
    onclick={() => variant = 2}
    class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors {variant === 2 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}"
  >
    Variant 02
  </button>
  <button
    onclick={() => variant = 3}
    class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors {variant === 3 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}"
  >
    Variant 03
  </button>
</div>

<PageRegister
  {variant}
  title="Negodesign"
  fields={{
    isName: true,
    isEmail: true,
    isPassword: true,
    isConfirmPassword: true,
    isBirthday: true,
    isGender: true,
    isPhone: true,
  }}
  {carousel}
  onSubmit={(data) => console.log("Register:", data)}
/>
