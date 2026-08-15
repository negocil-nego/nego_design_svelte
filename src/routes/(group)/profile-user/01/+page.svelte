<script lang="ts">
  import ProfileUser from "$lib/components/pages/profile-user/ProfileUser.svelte";
  import { userData } from "../_shared/data";

  let isLoading = $state(false);
</script>

<div class="bg-background">
  <ProfileUser
    varient={1}
    data={userData}
    {isLoading}
    onLoginAsUser={(id: string | number) => alert(`Login as user ${id}`)}
    onAddAddress={() => alert("Adicionar endereço")}
    onChangePassword={(payload: {
      currentPassword: string;
      newPassword: string;
      confirmPassword: string;
    }) => alert(`Alterar palavra-passe: ${JSON.stringify(payload)}`)}
  />
</div>
