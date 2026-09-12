<script lang="ts">
  import Section03 from "$lib/components/ui/section/Section03.svelte";
  import type { SectionCardItem } from "$lib/components/ui/section/types";
  import {
    ArtificialIntelligence02Icon,
    Award01Icon,
  } from "@hugeicons/core-free-icons";

  const items: SectionCardItem[] = [
    {
      id: "1",
      icon: ArtificialIntelligence02Icon,
      title: "Global Reach",
      description:
        "With a network, we ensure that your business can reach new markets effortlessly.",
    },
    {
      id: "2",
      icon: ArtificialIntelligence02Icon,
      title: "Custom Solutions",
      description:
        "We don't believe in a one-size-fits-all. We design logistics solutions tailored to your business needs.",
    },
    {
      id: "3",
      icon: ArtificialIntelligence02Icon,
      title: "Technology-Driven",
      description:
        "Our cutting-edge technology enables real-time tracking, data analytics, and seamless coordination.",
    },
    {
      id: "4",
      icon: Award01Icon,
      title: "Proven Expertise",
      description:
        "With over 10 years in the logistics industry, we have mastered the art of moving goods efficiently and reliably.",
    },
  ];
</script>

<Section03
  title="We specialize in providing reliable and efficient solutions"
  description="Whether you need to streamline your supply chain, improve delivery times, or expand your reach globally, we're here to help you achieve your goals with precision and speed."
  {items}
/>
