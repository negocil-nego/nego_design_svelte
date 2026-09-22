export interface AdminUserProfileStat {
    label: string;
    value: string | number;
}

export interface AdminUserProfileBadge {
    value: number;
    color: string;
}

export interface AdminUserProfileProps {
    name: string;
    description?: string;
    avatarUrl?: string;
    badge?: string;
    stats?: AdminUserProfileStat[];
    badges?: AdminUserProfileBadge[];
    followLabel?: string;
    contactLabel?: string;
    onFollow?: () => void;
    onContact?: () => void;
    className?: string;
}

