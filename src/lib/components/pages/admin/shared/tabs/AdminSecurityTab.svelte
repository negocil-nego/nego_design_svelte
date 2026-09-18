<script lang="ts">
    import { Form } from "$lib";
    import AdminIt from "../AdminIt.svelte";
    import type { AdminSecurityTabProps } from "./types";
    import { t } from "$lib/i18n";

    let {
        slotclass = "w-full md:w-3/5",
        isLoadingPassword,
        isLoadingEmail,
        isLoadingPhone,
        isLoadingDanger,
        onSubmitPassword,
        onSubmitEmail,
        onSubmitPhone,
        onSubmitDanger,
        valuesPassword,
        valuesEmail,
        valuesPhone,
        valuesDanger,
    }: AdminSecurityTabProps = $props();

    function initialValue(
        values: Record<string, string | string[] | boolean> | undefined,
    ) {
        return (name: string) => values?.[name];
    }
</script>

<div class="space-y-10 m-auto xl:w-11/12">
    <AdminIt
        title={$t("admin.security.password.title")}
        description={$t("admin.security.password.description")}
        {slotclass}
    >
        <Form
            isLoading={isLoadingPassword}
            submitText={$t("admin.security.password.submit")}
            submitLoadingText={$t("admin.security.password.saving")}
            onSubmit={onSubmitPassword}
            inputs={[
                {
                    type: "password",
                    name: "currentPassword",
                    label: $t("admin.security.password.current.label"),
                    placeholder: $t(
                        "admin.security.password.current.placeholder",
                    ),
                    required: true,
                    value: initialValue(valuesPassword)("currentPassword"),
                },
                {
                    type: "password",
                    name: "newPassword",
                    label: $t("admin.security.password.new.label"),
                    placeholder: $t("admin.security.password.new.placeholder"),
                    required: true,
                    value: initialValue(valuesPassword)("newPassword"),
                },
                {
                    type: "password",
                    name: "confirmPassword",
                    label: $t("admin.security.password.confirm.label"),
                    placeholder: $t(
                        "admin.security.password.confirm.placeholder",
                    ),
                    required: true,
                    value: initialValue(valuesPassword)("confirmPassword"),
                },
            ]}
        />
    </AdminIt>

    <AdminIt
        title={$t("admin.security.email.title")}
        description={$t("admin.security.email.description")}
        {slotclass}
    >
        <div class="w-full">
            <Form
                isLoading={isLoadingEmail}
                submitText={$t("admin.security.email.submit")}
                submitLoadingText={$t("admin.security.email.saving")}
                onSubmit={onSubmitEmail}
                inputs={[
                    {
                        type: "password",
                        name: "currentPassword",
                        label: $t("admin.security.email.current.label"),
                        placeholder: $t(
                            "admin.security.email.current.placeholder",
                        ),
                        required: true,
                        value: initialValue(valuesEmail)("currentPassword"),
                    },
                    {
                        type: "email",
                        name: "newEmail",
                        label: $t("admin.security.email.new.label"),
                        placeholder: $t("admin.security.email.new.placeholder"),
                        required: true,
                        value: initialValue(valuesEmail)("newEmail"),
                    },
                ]}
            />
            <p class="mt-3 text-xs italic text-muted-foreground">
                {$t("admin.security.email.otp.note")}
            </p>
        </div>
    </AdminIt>

    <AdminIt
        title={$t("admin.security.phone.title")}
        description={$t("admin.security.phone.description")}
        {slotclass}
    >
        <div class="w-full">
            <Form
                isLoading={isLoadingPhone}
                submitText={$t("admin.security.phone.submit")}
                submitLoadingText={$t("admin.security.phone.saving")}
                onSubmit={onSubmitPhone}
                inputs={[
                    {
                        type: "password",
                        name: "currentPassword",
                        label: $t("admin.security.phone.current.label"),
                        placeholder: $t(
                            "admin.security.phone.current.placeholder",
                        ),
                        required: true,
                        value: initialValue(valuesPhone)("currentPassword"),
                    },
                    {
                        type: "phone",
                        name: "newPhone",
                        label: $t("admin.security.phone.new.label"),
                        placeholder: $t("admin.security.phone.new.placeholder"),
                        required: true,
                        value: initialValue(valuesPhone)("newPhone"),
                    },
                ]}
            />
            <p class="mt-3 text-xs italic text-muted-foreground">
                {$t("admin.security.phone.otp.note")}
            </p>
        </div>
    </AdminIt>

    <div class="text-lg font-semibold text-red-800">
        {$t("admin.security.danger.title")}
    </div>

    <AdminIt
        title={$t("admin.security.danger.deactivate.title")}
        description={$t("admin.security.danger.deactivate.description")}
        className="bg-red-50 dark:bg-red-400"
        {slotclass}
    >
        <Form
            isLoading={isLoadingDanger}
            onSubmit={onSubmitDanger}
            inputs={[]}
        />
    </AdminIt>

    <AdminIt
        title={$t("admin.security.danger.delete.title")}
        description={$t("admin.security.danger.delete.description")}
        className="bg-red-50 dark:bg-red-400"
        {slotclass}
    >
        <Form
            isLoading={isLoadingDanger}
            onSubmit={onSubmitDanger}
            inputs={[]}
        />
    </AdminIt>
</div>
