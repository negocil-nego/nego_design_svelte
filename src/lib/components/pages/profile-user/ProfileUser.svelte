<script lang="ts" module>
  /**
   * Página de perfil do utilizador com seleção de layout.
   * Permite escolher entre três variantes.
   * - **1**: Header com avatar à esquerda, tabs para informação, moradas, segurança e definições.
   * - **2**: Header com avatar à esquerda, tabs para informação e segurança.
   * - **3**: Header com avatar à esquerda, tabs pill para informação, moradas, segurança e definições.
   *
   * Blocos internos partilhados: `ProfileUserInfo` (detalhes da informação),
   * `ProfileUserResetPassword` (alterar senha) e `ProfileUserSetting` (preferências).
   *
   * @component
   */
</script>

<script lang="ts">
  import type { ProfileUserProps } from "./types";
  import ProfileUser01 from "./01/ProfileUser01.svelte";
  import ProfileUser02 from "./02/ProfileUser02.svelte";
  import ProfileUser03 from "./03/ProfileUser03.svelte";

  let {
    varient = 1,
    data,
    activeTab = $bindable(),
    isLoading = false,
    tabs,
    userHeader,
    userInfo,
    userAddress,
    userResetPassword,
    userSetting,
    userTabs,
    ...restProps
  }: ProfileUserProps = $props();

  const sharedProps = $derived({
    data,
    isLoading,
    tabs,
    ...userHeader,
    ...userAddress,
    ...userResetPassword,
    ...userSetting,
    ...userTabs,
    ...restProps,
  });
</script>

{#if varient === 2}
  <ProfileUser02 bind:activeTab {...sharedProps} {userInfo} />
{:else if varient === 3}
  <ProfileUser03 bind:activeTab {...sharedProps} {userInfo} />
{:else}
  <ProfileUser01 bind:activeTab {...sharedProps} {userInfo} />
{/if}
