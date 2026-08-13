export type ProfileUserVariant = 1 | 2 | 3;

export interface ProfileUserAddress {
  id: string | number;
  label: string;
  street: string;
  apartment?: string;
  state?: string;
  zip?: string;
  isDefault?: boolean;
}

export interface ProfileUserNote {
  id: string | number;
  text: string;
}

export interface ProfileUserNotificationPref {
  emailEnabled?: boolean;
  webEnabled?: boolean;
  appEnabled?: boolean;
}

export interface ProfileUserMarketingPref {
  id: string;
  label: string;
  email?: boolean;
  push?: boolean;
}

export interface ProfileUserExperience {
  id: string | number;
  categoryId: string;
  program: string;
  role: string;
  institution: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  tags?: { label: string }[];
}

export interface ProfileUserData {
  id: string | number;
  avatarUrl: string;
  bannerUrl?: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  phone?: string;
  role?: string;
  status?: string;
  username?: string;
  defaultAddress?: string;
  addresses?: ProfileUserAddress[];
  notes?: ProfileUserNote[];
  notificationPref?: ProfileUserNotificationPref;
  enableNotification?: { email?: boolean; web?: boolean; app?: boolean };
  marketingPrefs?: ProfileUserMarketingPref[];
  tabs?: { id: string; label: string }[];
  location?: string;
  verified?: boolean;
  priceRange?: string;
  experienceTitle?: string;
  experiences?: ProfileUserExperience[];
  experienceCategories?: { id: string; label: string }[];
}

export interface ProfileUserHeaderProps {
  statusDefault?: string;
  roleDefault?: string;
  loginAsUserLabel?: string;
  onLoginAsUser?: (id: string | number) => void;
}

export interface ProfileUserAddressProps {
  title?: string;
  addLabel?: string;
  defaultBadge?: string;
  emptyText?: string;
  onAddAddress?: () => void;
  className?: string;
}

export interface ProfileUserResetPasswordProps {
  title?: string;
  currentLabel?: string;
  currentPlaceholder?: string;
  newLabel?: string;
  newPlaceholder?: string;
  confirmLabel?: string;
  confirmPlaceholder?: string;
  submitLabel?: string;
  cancelLabel?: string;
  onChangePassword?: (payload: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
  onCancel?: () => void;
  className?: string;
}

export interface ProfileUserSettingProps {
  className?: string;
  notificationTitle?: string;
  notificationEmailLabel?: string;
  notificationEmailDesc?: string;
  notificationWebLabel?: string;
  notificationWebDesc?: string;
  notificationAppLabel?: string;
  notificationAppDesc?: string;
  enableTitle?: string;
  enableEmailLabel?: string;
  enableWebLabel?: string;
  enableAppLabel?: string;
  marketingTitle?: string;
  marketingTypeLabel?: string;
  marketingEmailLabel?: string;
  marketingPushLabel?: string;
}

export interface ProfileUserTabsProps {
  style?: "underline" | "pill";
  className?: string;
  onchange?: (id: string) => void;
}

export interface ProfileUserProps {
  varient?: ProfileUserVariant;
  data: ProfileUserData;
  activeTab?: string;
  isLoading?: boolean;
  tabs?: { id: string; label: string }[];
  userHeader?: ProfileUserHeaderProps;
  userAddress?: ProfileUserAddressProps;
  userResetPassword?: ProfileUserResetPasswordProps;
  userSetting?: ProfileUserSettingProps;
  userTabs?: ProfileUserTabsProps;
}


