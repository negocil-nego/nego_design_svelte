<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { t } from "$lib/i18n";
  import type {
    CardEmailPhoneWhatsappProps,
    CardEmailPhoneWhatsappItem,
    CardMethod,
  } from "./types";
  import WhatsAppImage from "$lib/assets/social/icons8-whatsapp-96.png";
  import PhoneImage from "$lib/assets/social/icons8-phone-96.png";
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

<div class="flex flex-col md:flex-row gap-5 my-2 md:my-4 {className}">
  {#each resolvedItems as item (item.id)}
    {@const isSelected = selected === item.id}
    <button
      type="button"
      class="relative flex w-full items-center gap-4 rounded-xl border p-4 text-left transition cursor-pointer {isSelected
        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
        : 'border-border bg-card hover:bg-muted/50'}"
      onclick={() => handleSelect(item.id)}
    >
      <div
        class="flex size-10 shrink-0 items-center justify-center rounded-xl {isSelected
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground'}"
      >
        <img src={item.imageUrl} alt={item.title} class="size-5" />
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
        <ImageHugeicons
          icon="checkmark-circle-02"
          class="size-5 shrink-0 text-primary"
        />
      {/if}
    </button>
  {/each}
</div>
