<script lang="ts" module>
  /**
   * Secção "Detalhes da informação" do perfil do utilizador.
   * Apresenta os dados básicos (nome, apelido, email, telefone, morada,
   * nome de utilizador e função) em modo leitura, com skeleton de loading
   * e botão opcional para editar.
   * @component
   */
</script>

<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { HugeiconsIconName } from "$lib/components/ui/image/icons";
  import Button from "$lib/components/ui/button/button.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { cn } from "$lib/utils.js";
  import { t } from "$lib/i18n";
  import type { ProfileUserData, ProfileUserInfoProps } from "../types";

  let {
    data,
    isLoading = false,
    className,
    title = $t("profile-user.info.title"),
    editLabel = $t("profile-user.info.edit"),
    firstNameLabel = $t("profile-user.info.firstName.label"),
    lastNameLabel = $t("profile-user.info.lastName.label"),
    emailLabel = $t("profile-user.info.email.label"),
    phoneLabel = $t("profile-user.info.phone.label"),
    addressLabel = $t("profile-user.info.address.label"),
    usernameLabel = $t("profile-user.info.username.label"),
    roleLabel = $t("profile-user.info.role.label"),
    emptyValue = "—",
    onEdit,
  }: ProfileUserInfoProps & {
    data: ProfileUserData;
    isLoading?: boolean;
  } = $props();

  type InfoItem = {
    id: string;
    icon: HugeiconsIconName;
    label: string;
    value?: string;
  };

  const items = $derived<InfoItem[]>([
    {
      id: "firstName",
      icon: "UserIcon",
      label: firstNameLabel,
      value: data.firstName,
    },
    {
      id: "lastName",
      icon: "UserIcon",
      label: lastNameLabel,
      value: data.lastName,
    },
    {
      id: "email",
      icon: "Mail01Icon",
      label: emailLabel,
      value: data.email,
    },
    {
      id: "phone",
      icon: "CallIcon",
      label: phoneLabel,
      value: data.phone,
    },
    {
      id: "address",
      icon: "MapPinnedIcon",
      label: addressLabel,
      value:
        data.defaultAddress ??
        data.addresses?.find((address) => address.isDefault)?.street ??
        data.addresses?.[0]?.street,
    },
    {
      id: "username",
      icon: "UserIcon",
      label: usernameLabel,
      value: data.username,
    },
    {
      id: "role",
      icon: "BadgeCheckIcon",
      label: roleLabel,
      value: data.role,
    },
  ]);
</script>

<section
  class={cn("rounded-lg border bg-card p-6", className)}
  data-slot="profile-user-info"
>
  <div class="mb-6 flex items-center justify-between">
    <h3 class="text-lg font-semibold">{title}</h3>
    {#if !isLoading && onEdit}
      <Button variant="ghost" size="sm" onclick={onEdit}>
        <ImageHugeicons icon="Edit01Icon" class="size-4" />
        {editLabel}
      </Button>
    {/if}
  </div>

  {#if isLoading}
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each Array.from({ length: 6 }) as _, i (i)}
        <div class="flex items-center gap-3 rounded-md border p-4">
          <Skeleton class="size-9 rounded-md" />
          <div class="flex flex-1 flex-col gap-2">
            <Skeleton class="h-3 w-20 rounded-md" />
            <Skeleton class="h-4 w-32 rounded-md" />
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each items as item (item.id)}
        <div class="flex items-center gap-3 rounded-md border p-4">
          <div
            class="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
          >
            <ImageHugeicons icon={item.icon} class="size-5" />
          </div>
          <div class="min-w-0 flex flex-col gap-0.5">
            <span class="text-xs text-muted-foreground">{item.label}</span>
            <span class="truncate text-sm font-medium">
              {item.value || emptyValue}
            </span>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>
