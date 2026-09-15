<script lang="ts">
  import {
    ModalGridSelection,
    ModalBadgeSelection,
    ModalShareSelection,
    ModalNotification,
    ModalFeedback,
    ModalMap,
    ModalUpload,
    ModalForm,
    ModalFormEmailOrPhone,
  } from "$lib";
  import type { ModelGridCardProps } from "$lib/components/ui/modal/core/types";
  import type { ModelBadge } from "$lib/components/ui/modal/badge/types";
  import type { ModelSocialShare } from "$lib/components/ui/modal/share/types";
  import type { UploadFile } from "$lib/components/ui/modal/upload/types";

  let openGrid = $state(false);
  let openGrid2 = $state(false);
  let openBadge = $state(false);
  let openShare = $state(false);
  let openNotification = $state(false);
  let openFeedback = $state(false);
  let openMap = $state(false);
  let openUpload = $state(false);
  let openForm = $state(false);
  let openOtpBoth = $state(false);
  let openOtpNone = $state(false);

  let selectedGridCard = $state<ModelGridCardProps | null>(null);
  let selectedGrid2Card = $state<ModelGridCardProps | null>(null);
  let selectedBadge = $state<ModelBadge | null>(null);

  const gridCards: ModelGridCardProps[] = [
    {
      title: "Student",
      description: "You're here to impress your teachers.",
      icon: "🎓",
    },
    {
      title: "Non-profit",
      description: "You're here to do greater good.",
      icon: "🤝",
    },
    {
      title: "Teaching",
      description: "You're here to empower students.",
      icon: "📚",
    },
    { title: "Large Company", description: "Scale your brand.", icon: "🏢" },
    {
      title: "Personal",
      description: "Make anything and everything.",
      icon: "👤",
    },
    {
      title: "Small Business",
      description: "Design your brand from the ground up.",
      icon: "🏪",
    },
  ];

  const grid2Cards: ModelGridCardProps[] = [
    {
      title: "Work Stuff",
      description: "Just the usual boring work stuff.",
      icon: "💼",
    },
    {
      title: "UI/UX Design",
      description: "Design apps and prototypes.",
      icon: "🎨",
    },
    { title: "Finance", description: "Because I need money.", icon: "💰" },
    {
      title: "Productivity",
      description: "Sometimes we need to be productive.",
      icon: "⏰",
    },
    { title: "Engineering", description: "Build web apps.", icon: "⚙️" },
    {
      title: "Machine Learning",
      description: "To do machine learning.",
      icon: "🤖",
    },
  ];

  const categories = [
    { label: "Marketing", value: "marketing" },
    { label: "Product", value: "product" },
    { label: "Engineering", value: "engineering" },
  ];

  const badges: ModelBadge[] = [
    { label: "Marketing", value: "marketing" },
    { label: "HR & Legal", value: "hr" },
    { label: "Product Design", value: "design" },
    { label: "Engineering", value: "engineering" },
    { label: "Customer Service", value: "support" },
    { label: "Operations", value: "operations" },
    { label: "Finance", value: "finance" },
    { label: "IT & Support", value: "it" },
  ];

  const socials: ModelSocialShare[] = [
    { name: "WhatsApp", img: "/img/icons8-whatsapp-48.png", color: "#25D366" },
    {
      name: "Instagram",
      img: "/img/icons8-instagram-48.png",
      color: "#E4405F",
    },
    { name: "Facebook", img: "/img/icons8-facebook-48.png", color: "#1877F2" },
    { name: "Twitter", img: "/img/icons8-twitterx-50.png", color: "#000000" },
    { name: "LinkedIn", img: "/img/icons8-linkedin-48.png", color: "#0A66C2" },
    {
      name: "Pinterest",
      img: "/img/icons8-pinterest-48.png",
      color: "#E60023",
    },
    { name: "Tumblr", img: "/img/icons8-tumblr-48.png", color: "#36465D" },
  ];

  let uploadFiles = $state<UploadFile[]>([
    {
      id: "1",
      name: "Company_budget.xls",
      size: 20971520,
      date: "2022-03-01",
      progress: 53,
      status: "uploading",
    },
    {
      id: "2",
      name: "Registration.csv",
      size: 20971520,
      date: "2022-03-01",
      status: "completed",
    },
    {
      id: "3",
      name: "tax_data.xlsx",
      size: 20971520,
      date: "2022-03-01",
      status: "failed",
    },
  ]);
</script>

<svelte:head>
  <title>Modals Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">Modals</h1>
  <p class="mt-2 text-muted-foreground">
    Interactive demo of all modal components.
  </p>

  <div class="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openGrid = true)}
    >
      Grid Selection
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openGrid2 = true)}
    >
      Grid Selection v2
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openBadge = true)}
    >
      Badge Selection
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openShare = true)}
    >
      Share
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openNotification = true)}
    >
      Notification
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openFeedback = true)}
    >
      Feedback
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openMap = true)}
    >
      Map
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openUpload = true)}
    >
      Upload
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
      onclick={() => (openForm = true)}
    >
      Form
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50 text-primary"
      onclick={() => (openOtpBoth = true)}
    >
      Email or Phone (Preset)
    </button>
    <button
      class="rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary/50 text-primary"
      onclick={() => (openOtpNone = true)}
    >
      Email or Phone (Single)
    </button>
  </div>
</div>

<ModalGridSelection
  bind:isOpen={openGrid}
  bind:selectedCard={selectedGridCard}
  title="What will you be using slothUI for?"
  subtitle="We'll use this to recommend you our personalized features"
  totalSteps={8}
  currentStep={1}
  cards={gridCards}
  onSelect={(card) => console.log("Grid selected:", card)}
  onContinue={() => console.log("Grid continue")}
/>

<ModalGridSelection
  variant={2}
  bind:isOpen={openGrid2}
  bind:selectedCard={selectedGrid2Card}
  title="What are you planning to use this app for?"
  {categories}
  cards={grid2Cards}
  totalSteps={5}
  currentStep={2}
  onSelect={(card) => console.log("Grid2 selected:", card)}
  onContinue={() => console.log("Grid2 continue")}
/>

<ModalBadgeSelection
  bind:isOpen={openBadge}
  bind:selectedBadge
  title="What team are you currently on?"
  subtitle="Please select one answer only."
  totalSteps={5}
  currentStep={2}
  {badges}
  onSelect={(b) => console.log("Badge selected:", b)}
  onContinue={() => console.log("Badge continue")}
  onSkip={() => console.log("Badge skip")}
/>

<ModalShareSelection
  bind:isOpen={openShare}
  title="Share this design"
  linkValue="https://www.uidesigndaily.com/posts/5dcaabe013c06d0019b3e7e1"
  networks={socials}
  onShare={(n) => console.log("Share:", n)}
  onCopy={(link) => console.log("Copy:", link)}
/>

<ModalNotification
  bind:isOpen={openNotification}
  title="Be the first to know when new content is available"
  description="Sign up to receive tips and tricks on how to create online designs that make people take action."
  onSubmit={(email) => console.log("Subscribe:", email)}
/>

<ModalFeedback
  bind:isOpen={openFeedback}
  onSubmit={(content, images) => console.log("Feedback:", content, images)}
/>

<ModalMap
  bind:isOpen={openMap}
  address="211 Throop Ave Brooklyn, New York City"
  description="New York is served by three airports, namely John F. Kennedy International Airport, LaGuardia Airport and Newark Liberty International Airport."
  onSearch={(q) => console.log("Search:", q)}
  onApply={(addr, desc) => console.log("Apply:", addr, desc)}
/>

<ModalUpload
  bind:isOpen={openUpload}
  bind:files={uploadFiles}
  acceptedFormats="csv, xlsx, xls"
  onFilesSelected={(f) => console.log("Files selected:", f)}
  onUpload={(f) => console.log("Upload:", f)}
  onRemoveFile={(id) => {
    uploadFiles = uploadFiles.filter((f) => f.id !== id);
  }}
  onRetryFile={(id) => console.log("Retry:", id)}
  onDownload={() => console.log("Download sample")}
/>

<ModalForm
  bind:isOpen={openForm}
  title="Edit Profile"
  subtitle="Update your personal information"
  submitText="Save Changes"
  inputs={[
    {
      type: "text",
      name: "name",
      label: "Full Name",
      value: "John Doe",
      required: true,
    },
    { type: "email", name: "email", label: "Email", value: "john@example.com" },
    { type: "phone", name: "phone", label: "Phone", value: "+1 234 567 890" },
    {
      type: "select",
      name: "role",
      label: "Role",
      options: [
        { value: "ADMIN", label: "Admin" },
        { value: "USER", label: "User" },
        { value: "EDITOR", label: "Editor" },
      ],
    },
    {
      type: "toggle",
      name: "active",
      label: "Active",
      description: "Enable this account",
    },
    {
      type: "textarea",
      name: "bio",
      label: "Bio",
      value: "Tell us about yourself.",
      fill: true,
    },
    {
      type: "badges",
      name: "tags",
      label: "Tags",
      placeholder: "Add tags...",
      suggestions: ["Svelte", "React", "Vue", "Angular"],
      fill: true,
    },
  ]}
  onSubmit={(data) => console.log("Form:", data)}
  onCancel={() => console.log("Cancel")}
/>

<ModalFormEmailOrPhone
  bind:isOpen={openOtpBoth}
  email="user@example.com"
  phone="+244 923 456 789"
  onSubmit={(data) => console.log("OTP Both:", data)}
  onCancel={() => console.log("OTP Both Cancel")}
/>

<ModalFormEmailOrPhone
  bind:isOpen={openOtpNone}
  onSubmit={(data) => console.log("OTP None:", data)}
  onCancel={() => console.log("OTP None Cancel")}
/>
