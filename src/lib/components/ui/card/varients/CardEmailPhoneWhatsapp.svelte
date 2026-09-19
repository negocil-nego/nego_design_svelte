<script lang="ts">
  import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { t } from "$lib/i18n";
  import type {
    CardEmailPhoneWhatsappProps,
    CardEmailPhoneWhatsappItem,
    CardMethod,
  } from "./types";
  import WhatsAppImage from "$lib/assets/social/icons8-whatsapp-96.png";
  import PhoneImage from "$lib/assets/social/icons8-telefone-96.png";
  import MailImage from "$lib/assets/social/icons8-gmail-96.png";

  let {
    items,
    visible,
    selected = $bindable<CardMethod | undefined>(),
    onSelect,
    className = "",
  }: CardEmailPhoneWhatsappProps = $props();

  const defaultItems: CardEmailPhoneWhatsappItem[] = [
    {
      id: "email",
      title: $t("input.email.label"),
      subtitle: $t("card.otp.email.subtitle"),
      imageUrl: MailImage,
    },
    {
      id: "phone",
      title: $t("input.phone.label"),
      subtitle: $t("card.otp.phone.subtitle"),
      imageUrl: PhoneImage,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      subtitle: $t("card.otp.whatsapp.subtitle"),
      imageUrl: WhatsAppImage,
    },
  ];

  const resolvedItems = $derived(
    (items ?? defaultItems).filter(
      (item) => !visible || visible.includes(item.id),
    ),
  );

  function handleSelect(method: CardMethod) {
    selected = method;
    onSelect?.(method);
  }
</script>

<div class="space-y-3 {className}">
  {#each resolvedItems as item (item.id)}
    {@const isSelected = selected === item.id}
    <button
      type="button"
      class="relative flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition {isSelected
        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
        : 'border-border bg-card hover:bg-muted/50'}"
      onclick={() => handleSelect(item.id)}
    >
      <div
        class="flex size-10 shrink-0 items-center justify-center rounded-xl {isSelected
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground'}"
      >
        {#if typeof item.imageUrl === "string"}
          <img src={item.imageUrl} alt={item.title} class="size-5" />
        {:else}
          <HugeiconsIcon icon={item.imageUrl!} class="size-5" />
        {/if}
      </div>

      <div class="min-w-0 flex-1">
        <span class="text-sm font-semibold">{item.title}</span>
        {#if item.subtitle}
          <p class="mt-0.5 text-xs text-muted-foreground">{item.subtitle}</p>
        {/if}
        {#if item.value}
          <p class="mt-1 truncate text-xs text-muted-foreground">
            {item.value}
          </p>
        {/if}
      </div>

      {#if isSelected}
        <HugeiconsIcon
          icon={CheckmarkCircle02Icon}
          class="size-5 shrink-0 text-primary"
        />
      {/if}
    </button>
  {/each}
</div>
