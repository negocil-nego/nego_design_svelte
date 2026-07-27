export type AuthFormType = "EMAIL_PASSWORD" | "PHONE_PASSWORD" | "USERNAME_PASSWORD";
export type LoginVariant = "EMAIL" | "USERNAME" | "PHONE";
export type Credential = {
    password: string;
    data: string;
};
export type LinkProps = {
    url?: string;
    onclick?: () => void;
};
