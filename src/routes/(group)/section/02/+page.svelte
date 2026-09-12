<script lang="ts">
  import Section02 from "$lib/components/ui/section/Section02.svelte";
  import type { SectionFeatureItem } from "$lib/components/ui/section/types";

  const features: SectionFeatureItem[] = [
    {
      title: "Real-Time Tracking",
      description:
        "Stay up-to-date with your shipments from pick-up to delivery.",
      link: "/tracking",
      linkLabel: "Learn More",
    },
    {
      title: "Data Analytics",
      description:
        "Gain insights into your supply chain, identify bottlenecks, and make data-driven decisions.",
      link: "/analytics",
      linkLabel: "Learn More",
    },
    {
      title: "Automated Updates",
      description:
        "Receive timely notifications about your shipments, including expected delivery times and delays.",
      link: "/updates",
      linkLabel: "Learn More",
    },
    {
      title: "Secure Portal",
      description:
        "Access your account anytime with our secure online portal for booking, managing, and tracking shipments.",
      link: "/portal",
      linkLabel: "Learn More",
    },
  ];
</script>

<Section02
  title="Innovation that Moves Your Business"
  description="We leverage the latest technology to improve the way we manage your shipments."
  image="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  imageAlt="Shipping container"
  {features}
/>
