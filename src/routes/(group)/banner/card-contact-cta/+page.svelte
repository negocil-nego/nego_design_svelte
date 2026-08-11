<script lang="ts">
  import CardContactCta from "$lib/components/core/banner/CardContactCta.svelte";
  import { goto } from "$app/navigation";
</script>

<CardContactCta
  title="Let's Get In Touch."
  description="Your laboratory instruments should serve you, not the other way around. We're happy to help you."
  primaryText="Book a discovery call"
  secondaryText="Test Your Samples"
  onClickPrimary={() => goto("/contacto")}
  onClickSecondary={() => goto("/amostras")}
/>
