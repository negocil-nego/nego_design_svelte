<script lang="ts">
  import { Form } from "$lib";

  let isLoading = $state(false);

  function handleSubmit(data: Record<string, string | string[] | boolean>) {
    console.log("Form submitted:", data);
    isLoading = true;
    setTimeout(() => (isLoading = false), 2000);
  }
</script>

<svelte:head>
  <title>Form Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">Form</h1>
  <p class="mt-2 text-muted-foreground">
    Responsive form with 2-column grid, supporting all input types.
    Fields with <code class="rounded bg-muted px-1 py-0.5 text-xs">fill: true</code> span 2 columns.
  </p>

  <div class="mt-8 rounded-xl border border-border bg-card p-6">
    <Form
      {isLoading}
      submitText="Save Profile"
      submitLoadingText="Saving..."
      onSubmit={handleSubmit}
      inputs={[
        { type: "text", name: "firstName", label: "First Name", placeholder: "John", required: true },
        { type: "text", name: "lastName", label: "Last Name", placeholder: "Doe", required: true },
        { type: "email", name: "email", label: "Email", placeholder: "john@example.com", required: true },
        { type: "phone", name: "phone", label: "Phone", placeholder: "+1 234 567 890" },
        { type: "password", name: "password", label: "Password", placeholder: "Enter password", required: true },
        { type: "date", name: "birthDate", label: "Birth Date" },
        { type: "select", name: "country", label: "Country", placeholder: "Select country", options: [
          { value: "US", label: "United States" },
          { value: "BR", label: "Brazil" },
          { value: "PT", label: "Portugal" },
          { value: "AO", label: "Angola" },
          { value: "MZ", label: "Mozambique" },
        ]},
        { type: "select", name: "languages", label: "Languages", multiple: true, options: [
          { value: "EN", label: "English" },
          { value: "PT", label: "Portuguese" },
          { value: "ES", label: "Spanish" },
          { value: "FR", label: "French" },
        ]},
        { type: "radio", name: "plan", label: "Plan", options: [
          { value: "FREE", label: "Free" },
          { value: "PRO", label: "Pro" },
          { value: "ENTERPRISE", label: "Enterprise" },
        ]},
        { type: "checkbox", name: "skills", label: "Skills", options: [
          { value: "HTML", label: "HTML" },
          { value: "CSS", label: "CSS" },
          { value: "JS", label: "JavaScript" },
          { value: "SVELTE", label: "Svelte" },
        ]},
        { type: "toggle", name: "newsletter", label: "Newsletter", description: "Receive email updates about new features and tips." },
        { type: "toggle", name: "darkMode", label: "Dark Mode", description: "Enable dark mode by default." },
        { type: "badges", name: "tags", label: "Tags", placeholder: "Type and press Enter...", suggestions: ["Design", "Development", "Marketing", "Sales", "Support"], maxTags: 5 },
        { type: "textarea", name: "bio", label: "Bio", placeholder: "Tell us about yourself...", rows: 4, fill: true },
      ]}
    />
  </div>
</div>
