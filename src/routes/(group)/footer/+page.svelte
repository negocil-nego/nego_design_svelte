<script lang="ts">
  import Footer from "$lib/components/core/footer/ui/Footer.svelte";
</script>

<Footer
  isNewsletter={true}
  items={[
    {
      title: "Solutions",
      items: [
        { text: "Marketing" },
        { text: "Analytics" },
        { text: "Automation" },
        { text: "Commerce" },
        { text: "Insights" },
      ],
    },
    {
      title: "Support",
      items: [
        { text: "Submit ticket" },
        { text: "Documentation" },
        { text: "Guides" },
      ],
    },
    {
      title: "Company",
      items: [
        { text: "About" },
        { text: "Blog" },
        { text: "Jobs" },
        { text: "Press" },
      ],
    },
    {
      title: "Legal",
      items: [
        { text: "Terms of service" },
        { text: "Privacy policy" },
        { text: "License" },
      ],
    },
  ]}
  socialsMedia={[
    { icon: "facebook", text: "Facebook" },
    { icon: "instagram", text: "Instagram" },
    { icon: "x", text: "X" },
    { icon: "github", text: "GitHub" },
    { icon: "youtube", text: "YouTube" },
  ]}
/>
