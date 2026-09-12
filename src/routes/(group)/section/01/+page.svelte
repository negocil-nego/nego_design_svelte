<script lang="ts">
  import Section01 from "$lib/components/ui/section/Section01.svelte";
  import type { SectionCardItem } from "$lib/components/ui/section/types";
  import {
    ShoppingBag01Icon,
    FactoryIcon,
    Stethoscope02Icon,
  } from "@hugeicons/core-free-icons";

  let selectedKey = $state<string | number>("2");

  const items: SectionCardItem[] = [
    {
      id: "1",
      icon: ShoppingBag01Icon,
      title: "Retail & E-commerce",
      description:
        "Streamline your fulfillment process, reduce delivery times, and improve customer satisfaction.",
    },
    {
      id: "2",
      icon: FactoryIcon,
      title: "Manufacturing",
      description:
        "Optimize your supply chain, from raw materials to finished goods, with efficient transportation and services.",
      isActive: true,
    },
    {
      id: "3",
      icon: Stethoscope02Icon,
      title: "Healthcare & Pharmacy",
      description:
        "Ensure the safe, timely delivery of temperature-sensitive products and critical shipments.",
    },
    {
      id: "4",
      icon: Stethoscope02Icon,
      title: "Technology & Electronics",
      description:
        "Handle high-value, sensitive products with care, ensuring fast, secure delivery across global markets.",
    },
  ];

  function handleSelect(id: string | number) {
    selectedKey = id;
  }
</script>

<Section01
  title="Tailored Logistics for Every Business"
  description="At /XION, we understand that every industry has unique logistics challenges. That's why we offer customized solutions for a wide range of sectors."
  {items}
  {selectedKey}
  onSelect={handleSelect}
  onPrev={() => console.log("prev")}
  onNext={() => console.log("next")}
/>
