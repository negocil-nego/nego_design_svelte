<script lang="ts" module>
  /**
   * Página de perfil do utilizador com seleção de layout.
   * Permite escolher entre três variantes.
   * - **1**: Header com avatar à esquerda, tabs para moradas e definições.
   * - **2**: Header com avatar à esquerda, tabs para segurança.
   * - **3**: Header com avatar à esquerda, tabs pill para moradas, segurança e definições.
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
    activeTab,
    isLoading = false,
    tabs,
    ...restProps
  }: ProfileUserProps = $props();
</script>

{#if varient === 2}
  <ProfileUser02
    {data}
    {activeTab}
    {isLoading}
    {tabs}
    {...restProps}
  />
{:else if varient === 3}
  <ProfileUser03
    {data}
    {activeTab}
    {isLoading}
    {tabs}
    {...restProps}
  />
{:else}
  <ProfileUser01
    {data}
    {activeTab}
    {isLoading}
    {tabs}
    {...restProps}
  />
{/if}
