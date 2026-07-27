import type { Snippet } from "svelte";
import type { AuthFormType, Credential, LinkProps } from "../data/page-props";
type Props = {
    formType?: AuthFormType;
    onSubmit?: (credential: Credential) => void;
    register?: Snippet;
    privacyPolicy?: LinkProps;
    termsOfService?: LinkProps;
};
declare const AuthCard: import("svelte").Component<Props, {}, "">;
type AuthCard = ReturnType<typeof AuthCard>;
export default AuthCard;
