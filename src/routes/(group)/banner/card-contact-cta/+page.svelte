<script lang="ts">
  import CtaCardBanner from "$lib/components/core/banner/CtaCardBanner.svelte";
</script>

<CtaCardBanner
  title="Let's Get In Touch."
  description="Your laboratory instruments should serve you, not the other way around. We're happy to help you."
  primaryText="Book a discovery call"
  secondaryText="Test Your Samples"
  onClickPrimary={() => console.log("/contacto")}
  onClickSecondary={() => console.log("/amostras")}
/>
