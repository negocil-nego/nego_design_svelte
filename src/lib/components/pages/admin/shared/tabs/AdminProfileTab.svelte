<script lang="ts">
    import { Form } from "$lib";
    import AdminIt from "../AdminIt.svelte";
    import type { AdminProfileTabProps } from "./types";
    import { t } from "$lib/i18n";

    let {
        slotclass = "w-full md:w-3/5",
        isLoadingUser,
        isLoadingAddress,
        isLoadingSocial,
        onSubmitUser,
        onSubmitAddress,
        onSubmitSocial,
        valuesUser,
        valuesAddress,
        valuesSocial,
    }: AdminProfileTabProps = $props();

    function initialValue(
        values: Record<string, string | string[] | boolean> | undefined,
    ) {
        return (name: string) => values?.[name];
    }
</script>

<div class="space-y-10 m-auto xl:w-11/12">
    <AdminIt
        title={$t("admin.profile.title")}
        description={$t("admin.profile.description")}
        {slotclass}
    >
        <Form
            isLoading={isLoadingUser}
            submitText={$t("label.submit")}
            submitLoadingText={$t("admin.profile.tab.user.saving")}
            onSubmit={onSubmitUser}
            inputs={[
                {
                    type: "text",
                    name: "firstName",
                    label: $t("label.firstname"),
                    placeholder: "",
                    required: true,
                    value: initialValue(valuesUser)("firstName"),
                },
                {
                    type: "text",
                    name: "lastName",
                    label: $t("label.lastname"),
                    placeholder: "",
                    required: true,
                    value: initialValue(valuesUser)("lastName"),
                },
                {
                    type: "email",
                    name: "email",
                    label: $t("label.email"),
                    placeholder: "",
                    required: true,
                    value: initialValue(valuesUser)("email"),
                },
                {
                    type: "phone",
                    name: "phone",
                    label: $t("label.phone"),
                    placeholder: "",
                    value: initialValue(valuesUser)("phone"),
                },
                {
                    type: "date",
                    name: "birthDate",
                    label: $t("label.birthday"),
                    value: initialValue(valuesUser)("birthDate"),
                },
                {
                    type: "textarea",
                    name: "bio",
                    label: $t("input.bio.label"),
                    placeholder: $t("label.description"),
                    rows: 4,
                    fill: true,
                    value: initialValue(valuesUser)("bio"),
                },
            ]}
        />
    </AdminIt>

    <AdminIt
        title={$t("admin.address.title")}
        description={$t("admin.address.description")}
        {slotclass}
    >
        <Form
            isLoading={isLoadingAddress}
            submitText={$t("label.submit")}
            submitLoadingText={$t("admin.address.tab.saving")}
            onSubmit={onSubmitAddress}
            inputs={[
                {
                    type: "text",
                    name: "streetNumber",
                    label: $t("label.streetNumber"),
                    placeholder: "",
                    required: true,
                    value: initialValue(valuesAddress)("streetNumber"),
                },
                {
                    type: "text",
                    name: "neighborhood",
                    label: $t("label.neighborhood"),
                    placeholder: "",
                    value: initialValue(valuesAddress)("neighborhood"),
                },
                {
                    type: "text",
                    name: "state",
                    label: $t("label.state"),
                    placeholder: "",
                    value: initialValue(valuesAddress)("state"),
                },
                {
                    type: "location",
                    name: "location",
                    label: $t("label.location"),
                    latitudeName: "latitude",
                    longitudeName: "longitude",
                    locationText: $t("label.location.get"),
                    locationLoadingText: $t("label.location.getting"),
                    fill: true,
                },
                {
                    type: "text",
                    name: "latitude",
                    label: $t("label.latitude"),
                    placeholder: "",
                    value: initialValue(valuesAddress)("latitude"),
                    disabled: true,
                },
                {
                    type: "text",
                    name: "longitude",
                    label: $t("label.longitude"),
                    placeholder: "",
                    disabled: true,
                    value: initialValue(valuesAddress)("longitude"),
                },
            ]}
        />
    </AdminIt>

    <AdminIt
        title={$t("admin.social.title")}
        description={$t("admin.social.description")}
        {slotclass}
    >
        <Form
            isLoading={isLoadingSocial}
            submitText={$t("label.submit")}
            submitLoadingText={$t("admin.social.tab.saving")}
            onSubmit={onSubmitSocial}
            inputs={[
                {
                    type: "text",
                    name: "whatsapp",
                    label: $t("label.whatsapp"),
                    placeholder: "",
                    value: initialValue(valuesSocial)("whatsapp"),
                },
                {
                    type: "text",
                    name: "facebook",
                    label: $t("label.facebook"),
                    placeholder: "",
                    value: initialValue(valuesSocial)("facebook"),
                },
                {
                    type: "text",
                    name: "linkedin",
                    label: $t("label.linkedin"),
                    placeholder: "",
                    value: initialValue(valuesSocial)("linkedin"),
                },
                {
                    type: "text",
                    name: "tiktok",
                    label: $t("label.tiktok"),
                    placeholder: "",
                    value: initialValue(valuesSocial)("tiktok"),
                },
                {
                    type: "text",
                    name: "instagram",
                    label: $t("label.instagram"),
                    placeholder: "",
                    value: initialValue(valuesSocial)("instagram"),
                },
            ]}
        />
    </AdminIt>
</div>
