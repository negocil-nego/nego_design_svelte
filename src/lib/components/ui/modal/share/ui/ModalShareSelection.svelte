<script lang="ts">
  import { cn } from "$lib/utils";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type { ModalShareSelectionProps, ModelSocialShare } from "../types";

  const defaultNetworks: ModelSocialShare[] = [
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

  let {
    title,
    subtitle,
    networks,
    isWhatsapp = true,
    isInstagram = true,
    isFacebook = true,
    isTwitter = true,
    isLinkedin = true,
    isPinterest = false,
    isTumblr = false,
    linkLabel = "Or copy link",
    linkValue = "",
    copyText = "Copy",
    copiedText = "Copied!",
    isOpen = $bindable(false),
    onShare,
    onCopy,
    onClose,
    class: className,
  }: ModalShareSelectionProps = $props();

  let copied = $state(false);

  const networkFlags: Record<string, boolean> = $derived({
    whatsapp: isWhatsapp,
    instagram: isInstagram,
    facebook: isFacebook,
    twitter: isTwitter,
    linkedin: isLinkedin,
    pinterest: isPinterest,
    tumblr: isTumblr,
  });

  const visibleNetworks = $derived(
    (networks?.length ? networks : defaultNetworks).filter(
      (network) => networkFlags[network.name.toLowerCase()] ?? true,
    ),
  );

  function handleCopy() {
    navigator.clipboard.writeText(linkValue).then(() => {
      copied = true;
      onCopy?.(linkValue);
      setTimeout(() => (copied = false), 2000);
    });
  }
</script>

<ModalCore
  bind:isOpen
  {title}
  {subtitle}
  showProgress={false}
  showBack={false}
  {onClose}
  class={cn("max-w-lg", className)}
>
  {#snippet content()}
    <!-- Social Networks -->
    {#if visibleNetworks.length > 0}
      <div class="flex flex-wrap items-center justify-center gap-4">
        {#each visibleNetworks as network (network.name)}
          <button
            type="button"
            class="group flex flex-col items-center gap-2"
            onclick={() => onShare?.(network)}
          >
            <div
              class={cn(
                "flex size-14 items-center justify-center rounded-full border-2 border-border bg-white transition-all duration-200",
                "hover:scale-110 hover:shadow-md",
              )}
              style={network.color ? `border-color: ${network.color}30` : ""}
            >
              {#snippet icon()}
                {#if network.img}
                  <img
                    src={network.img}
                    alt={network.name}
                    class="size-7 object-contain transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                  />
                {:else if typeof network.icon === "string"}
                  <i
                    class="{network.icon} text-2xl transition-colors"
                    style={network.color ? `color: ${network.color}` : ""}
                  ></i>
                {:else if network.icon}
                  <HugeiconsIcon
                    icon={network.icon}
                    class="size-6 transition-colors"
                    style={network.color ? `color: ${network.color}` : ""}
                  />
                {/if}
              {/snippet}
              {@render icon()}
            </div>
            <span class="text-xs text-muted-foreground">{network.name}</span>
          </button>
        {/each}
      </div>
    {/if}
  {/snippet}

  {#snippet footer()}
    <!-- Copy Link -->
    <div>
      <p class="mb-3 text-sm font-medium text-muted-foreground">{linkLabel}</p>
      <div class="flex items-center gap-2">
        <input
          type="text"
          readonly
          value={linkValue}
          class="flex-1 rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-foreground outline-none"
        />
        <button
          type="button"
          class={cn(
            "shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
            copied
              ? "bg-green-500 text-white"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
          onclick={handleCopy}
        >
          {copied ? copiedText : copyText}
        </button>
      </div>
    </div>
  {/snippet}
</ModalCore>
