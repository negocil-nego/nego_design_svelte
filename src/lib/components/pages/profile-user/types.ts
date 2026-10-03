/**
 * Variante de layout da página ProfileUser.
 * - `1`: header colorido + tabs underline (informação, moradas, segurança, definições).
 * - `2`: banner com avatar sobreposto + tabs underline.
 * - `3`: header com tabs pill e experiência.
 */
export type ProfileUserVariant = 1 | 2 | 3;

/** Morada guardada no perfil do utilizador. */
export interface ProfileUserAddress {
  /** Identificador único da morada (usado como key nos `{#each}`). */
  id: string | number;
  /** Nome/etiqueta da morada (ex: "Casa", "Trabalho"). */
  label: string;
  /** Rua e número. */
  street: string;
  /** Andar, apartamento ou complemento. */
  apartment?: string;
  /** Estado/província/distrito. */
  state?: string;
  /** Código postal. */
  zip?: string;
  /** Indica se é a morada principal. */
  isDefault?: boolean;
}

/** Nota/anotação interna associada ao utilizador (uso administrativo). */
export interface ProfileUserNote {
  /** Identificador único da nota. */
  id: string | number;
  /** Conteúdo da nota. */
  text: string;
}

/** Preferências de notificação por canal. */
export interface ProfileUserNotificationPref {
  /** Notificações por email activas. */
  emailEnabled?: boolean;
  /** Notificações na aplicação web activas. */
  webEnabled?: boolean;
  /** Notificações na app móvel activas. */
  appEnabled?: boolean;
}

/** Preferência de marketing com canais email/push. */
export interface ProfileUserMarketingPref {
  /** Identificador único da preferência (usado como key nos `{#each}`). */
  id: string;
  /** Nome da categoria de marketing (ex: "Novidades"). */
  label: string;
  /** Subscrição por email activa. */
  email?: boolean;
  /** Subscrição por push activa. */
  push?: boolean;
}

/** Experiência profissional/curricular apresentada no perfil. */
export interface ProfileUserExperience {
  /** Identificador único da experiência. */
  id: string | number;
  /** Id da categoria a que pertence (performance, formação, educação, trabalho). */
  categoryId: string;
  /** Programa/projeto. */
  program: string;
  /** Papel/função exercida. */
  role: string;
  /** Instituição/empresa. */
  institution: string;
  /** Localização. */
  location?: string;
  /** Data de início (ISO). */
  startDate?: string;
  /** Data de fim (ISO) — omitir quando é o cargo actual. */
  endDate?: string;
  /** Tags associadas. */
  tags?: { label: string }[];
}

/** Dados completos do utilizador apresentados no ProfileUser. */
export interface ProfileUserData {
  /** Identificador único do utilizador. */
  id: string | number;
  /** URL do avatar. */
  avatarUrl: string;
  /** URL do banner/capa do perfil. */
  bannerUrl?: string;
  /** Primeiro nome. */
  firstName: string;
  /** Apelido. */
  lastName: string;
  /** Nome completo (sobrepõe `firstName + lastName` quando presente). */
  fullName?: string;
  /** Email. */
  email: string;
  /** Telefone. */
  phone?: string;
  /** Função/cargo. */
  role?: string;
  /** Estado da conta (ex: "Activo"). */
  status?: string;
  /** Nome de utilizador. */
  username?: string;
  /** Morada principal em texto. */
  defaultAddress?: string;
  /** Lista de moradas guardadas. */
  addresses?: ProfileUserAddress[];
  /** Notas internas. */
  notes?: ProfileUserNote[];
  /** Preferências de notificação por canal. */
  notificationPref?: ProfileUserNotificationPref;
  /** Atalho das notificações activas (email/web/app). */
  enableNotification?: { email?: boolean; web?: boolean; app?: boolean };
  /** Preferências de marketing. */
  marketingPrefs?: ProfileUserMarketingPref[];
  /** Abas do perfil (sobrepõe as tabs por omissão). */
  tabs?: { id: string; label: string }[];
  /** Localização/descrição curta. */
  location?: string;
  /** Conta verificada. */
  verified?: boolean;
  /** Faixa de preços (ex: "$$$"). */
  priceRange?: string;
  /** Título da secção de experiência. */
  experienceTitle?: string;
  /** Lista de experiências. */
  experiences?: ProfileUserExperience[];
  /** Categorias disponíveis para filtrar as experiências. */
  experienceCategories?: { id: string; label: string }[];
}

/** Secção de detalhes da informação do utilizador (dados básicos em modo leitura). */
export interface ProfileUserInfoProps {
  /** Título da secção. */
  title?: string;
  /** Rótulo do botão "Editar". */
  editLabel?: string;
  /** Rótulo do campo Nome próprio. */
  firstNameLabel?: string;
  /** Rótulo do campo Apelido. */
  lastNameLabel?: string;
  /** Rótulo do campo Email. */
  emailLabel?: string;
  /** Rótulo do campo Telefone. */
  phoneLabel?: string;
  /** Rótulo do campo Morada. */
  addressLabel?: string;
  /** Rótulo do campo Nome de utilizador. */
  usernameLabel?: string;
  /** Rótulo do campo Função. */
  roleLabel?: string;
  /** Texto exibido quando um campo não tem valor. */
  emptyValue?: string;
  /** Classes CSS adicionais da secção. */
  className?: string;
  /** Callback ao clicar no botão "Editar". */
  onEdit?: () => void;
}

/** Cabeçalho do perfil (avatar, nome, estado, função e acção principal). */
export interface ProfileUserHeaderProps {
  /** Estado mostrado quando `data.status` não existe. */
  statusDefault?: string;
  /** Função mostrada quando `data.role` não existe. */
  roleDefault?: string;
  /** Texto do botão "Entrar como utilizador". */
  loginAsUserLabel?: string;
  /** Callback do botão "Entrar como utilizador". */
  onLoginAsUser?: (id: string | number) => void;
}

/** Secção de moradas do perfil. */
export interface ProfileUserAddressProps {
  /** Título da secção. */
  title?: string;
  /** Rótulo do botão de adicionar. */
  addLabel?: string;
  /** Texto do badge da morada principal. */
  defaultBadge?: string;
  /** Mensagem exibida quando não há moradas. */
  emptyText?: string;
  /** Callback do botão de adicionar morada. */
  onAddAddress?: () => void;
  /** Classes CSS adicionais da secção. */
  className?: string;
}

/** Formulário de alteração de senha. */
export interface ProfileUserResetPasswordProps {
  /** Título do formulário. */
  title?: string;
  /** Rótulo do campo Senha actual. */
  currentLabel?: string;
  /** Placeholder do campo Senha actual. */
  currentPlaceholder?: string;
  /** Rótulo do campo Nova senha. */
  newLabel?: string;
  /** Placeholder do campo Nova senha. */
  newPlaceholder?: string;
  /** Rótulo do campo Confirmar senha. */
  confirmLabel?: string;
  /** Placeholder do campo Confirmar senha. */
  confirmPlaceholder?: string;
  /** Texto do botão de submissão. */
  submitLabel?: string;
  /** Texto do botão Cancelar. */
  cancelLabel?: string;
  /** Callback ao submeter as novas credenciais. */
  onChangePassword?: (payload: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
  /** Callback ao cancelar (limpa os campos). */
  onCancel?: () => void;
  /** Classes CSS adicionais da secção. */
  className?: string;
}

/** Secção de definições (notificações e marketing). */
export interface ProfileUserSettingProps {
  /** Classes CSS adicionais da secção. */
  className?: string;
  /** Título das notificações. */
  notificationTitle?: string;
  /** Rótulo da notificação por email. */
  notificationEmailLabel?: string;
  /** Descrição da notificação por email. */
  notificationEmailDesc?: string;
  /** Rótulo da notificação web. */
  notificationWebLabel?: string;
  /** Descrição da notificação web. */
  notificationWebDesc?: string;
  /** Rótulo da notificação na app. */
  notificationAppLabel?: string;
  /** Descrição da notificação na app. */
  notificationAppDesc?: string;
  /** Título da secção "Activar notificações". */
  enableTitle?: string;
  /** Rótulo do canal email. */
  enableEmailLabel?: string;
  /** Rótulo do canal web. */
  enableWebLabel?: string;
  /** Rótulo do canal app. */
  enableAppLabel?: string;
  /** Título das definições de marketing. */
  marketingTitle?: string;
  /** Rótulo da coluna "Tipo". */
  marketingTypeLabel?: string;
  /** Rótulo da coluna "Email". */
  marketingEmailLabel?: string;
  /** Rótulo da coluna "Push". */
  marketingPushLabel?: string;
}

/** Navegação por abas do perfil. */
export interface ProfileUserTabsProps {
  /** Estilo visual das abas. */
  style?: "underline" | "pill";
  /** Classes CSS adicionais. */
  className?: string;
  /** Callback ao seleccionar uma aba. */
  onchange?: (id: string) => void;
}

/** Props do componente ProfileUser (pai que selecciona a variante). */
export interface ProfileUserProps {
  /** Variante de layout (1, 2 ou 3). */
  varient?: ProfileUserVariant;
  /** Dados do utilizador. */
  data: ProfileUserData;
  /** Aba activa (bindable). */
  activeTab?: string;
  /** Exibe skeletons de carregamento. */
  isLoading?: boolean;
  /** Abas personalizadas (sobrepõe as por omissão). */
  tabs?: { id: string; label: string }[];
  /** Callback do botão "Entrar como utilizador". */
  onLoginAsUser?: (id: string | number) => void;
  /** Callback do botão de adicionar morada. */
  onAddAddress?: () => void;
  /** Callback de alteração de senha. */
  onChangePassword?: (payload: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
  /** Callback do botão "Editar" da secção de informação. */
  onEditInfo?: () => void;
  /** Props do cabeçalho do perfil. */
  userHeader?: ProfileUserHeaderProps;
  /** Props da secção de informação. */
  userInfo?: ProfileUserInfoProps;
  /** Props da secção de moradas. */
  userAddress?: ProfileUserAddressProps;
  /** Props do formulário de alteração de senha. */
  userResetPassword?: ProfileUserResetPasswordProps;
  /** Props da secção de definições. */
  userSetting?: ProfileUserSettingProps;
  /** Props da navegação por abas. */
  userTabs?: ProfileUserTabsProps;
}
