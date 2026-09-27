/**
 * Utilizador logado. Uma única estrutura com os dados de apresentação e os
 * callbacks do `AdminUserSection` — as opções do dropdown só aparecem quando
 * o respectivo callback está configurado.
 */
export type User = {
	/** Identificador único do utilizador */
	id?: string;
	/** Nome do utilizador */
	name?: string;
	/** Email do utilizador */
	email?: string;
	/** URL da imagem de perfil/avatar (opcional) */
	avatarUrl?: string;
	/** Callback "Perfil" — omitido esconde a opção */
	onProfile?: () => void;
	/** Callback "Definições" — omitido esconde a opção */
	onSettings?: () => void;
	/** Callback "Terminar sessão" — omitido limpa esta store */
	onLogout?: () => void;
};

/**
 * Store global do utilizador autenticado: guarda os dados do utilizador e o
 * token JWT, persistidos em `localStorage`.
 *
 * Os menus escutam `userStore.user` e, sempre que existe utilizador, escondem
 * os botões de Login/Registar e mostram o `AdminUserSection` — que lê o nome,
 * email, avatar e callbacks directamente desta store.
 */
export type UserStore = {
	/** Utilizador autenticado ou `null` quando não existe sessão */
	user: User | null;
	/** Token JWT da sessão */
	token: string | null;
	/** Data de expiração do token (ISO string) */
	expiresAt: string | null;
	/** Indica que uma operação de autenticação está em curso */
	isLoading: boolean;
};

const STORAGE_KEYS = {
	token: "negodesign-auth-token",
	expiresAt: "negodesign-auth-expires-at",
	user: "negodesign-auth-user",
} as const;

function isBrowser(): boolean {
	return typeof window !== "undefined";
}

function readStorage(key: string): string | null {
	if (!isBrowser()) return null;
	return window.localStorage.getItem(key);
}

function writeStorage(key: string, value: string | null): void {
	if (!isBrowser()) return;
	if (value === null) window.localStorage.removeItem(key);
	else window.localStorage.setItem(key, value);
}

function readStoredUser(): User | null {
	const raw = readStorage(STORAGE_KEYS.user);
	if (!raw) return null;
	try {
		return JSON.parse(raw) as User;
	} catch {
		return null;
	}
}

/** Store global do utilizador autenticado. */
export const userStore: UserStore = $state({
	user: readStoredUser(),
	token: readStorage(STORAGE_KEYS.token),
	expiresAt: readStorage(STORAGE_KEYS.expiresAt),
	isLoading: false,
});

/* -------------------------------------------------------------------------- */
/*                                  Utilizador                                 */
/* -------------------------------------------------------------------------- */

/**
 * Guarda (ou limpa) o utilizador autenticado, persistindo-o em `localStorage`.
 * @example
 * setUser({
 *   id: "1",
 *   name: "Sedrac SLC",
 *   email: "slcsedrac@gmail.com",
 *   avatarUrl: "https://github.com/octocat.png",
 *   onProfile: () => goto("/perfil"),
 *   onSettings: () => goto("/definicoes"),
 *   onLogout: () => logout(),
 * });
 */
export function setUser(user: User | null): void {
	userStore.user = user ? { ...user } : null;
	writeStorage(
		STORAGE_KEYS.user,
		userStore.user ? JSON.stringify(userStore.user) : null,
	);
}

/**
 * Actualiza parcialmente o utilizador autenticado (dados ou callbacks).
 * Não faz nada se não existir utilizador.
 * @example
 * updateUser({ name: "Sedrac" });
 * updateUser({ avatarUrl: "/avatars/1.png" });
 */
export function updateUser(user: Partial<User>): void {
	if (!userStore.user) return;
	setUser({ ...userStore.user, ...user });
}

/** Obter o utilizador autenticado (ou `null`). Reativo dentro de templates. */
export function getUser(): User | null {
	return userStore.user;
}

/** Indica se existe um utilizador autenticado. */
export function isLoggedIn(): boolean {
	return Boolean(userStore.user);
}

/** Nome do utilizador autenticado (string vazia quando não existe). */
export function getUserName(): string {
	return userStore.user?.name ?? "";
}

/** Email do utilizador autenticado (string vazia quando não existe). */
export function getUserEmail(): string {
	return userStore.user?.email ?? "";
}

/** Avatar do utilizador autenticado (string vazia quando não existe). */
export function getUserAvatarUrl(): string {
	return userStore.user?.avatarUrl ?? "";
}

/* -------------------------------------------------------------------------- */
/*                                    Token                                   */
/* -------------------------------------------------------------------------- */

/**
 * Regista a sessão autenticada: token JWT, expiração e (opcionalmente) o
 * utilizador. Tudo persistido em `localStorage`.
 * @example
 * setAuth(response.data.token, response.data.expiresAt);
 * setAuth(response.data.token, response.data.expiresAt, user);
 */
export function setAuth(
	token: string | null,
	expiresAt: string | null = null,
	user?: User | null,
): void {
	setToken(token, expiresAt);
	if (user !== undefined) setUser(user);
}

/**
 * Define (ou limpa) o token JWT, persistindo-o em `localStorage`.
 * @example
 * setToken(response.data.token, response.data.expiresAt);
 */
export function setToken(
	token: string | null,
	expiresAt: string | null = null,
): void {
	userStore.token = token;
	userStore.expiresAt = token ? expiresAt : null;
	writeStorage(STORAGE_KEYS.token, token);
	writeStorage(STORAGE_KEYS.expiresAt, userStore.expiresAt);
}

/** Obter o token JWT (ou `null`). */
export function getToken(): string | null {
	return userStore.token;
}

/** Data de expiração do token (ou `null`). */
export function getExpiresAt(): string | null {
	return userStore.expiresAt;
}

/** Indica se a data de expiração já passou. Sem `expiresAt` nunca expira. */
export function isTokenExpired(
	expiresAt: string | null = userStore.expiresAt,
): boolean {
	if (!expiresAt) return false;
	return Date.parse(expiresAt) <= Date.now();
}

/** Indica se existe sessão válida (token presente e não expirado). */
export function isAuthenticated(): boolean {
	return Boolean(userStore.token) && !isTokenExpired();
}

/** Cabeçalho `Authorization` pronto a usar (`Bearer <token>`) ou `null`. */
export function getAuthorizationHeader(): string | null {
	return userStore.token ? `Bearer ${userStore.token}` : null;
}

/** Marca uma operação de autenticação como em curso (`isLoading`). */
export function setLoading(isLoading: boolean): void {
	userStore.isLoading = isLoading;
}

/* -------------------------------------------------------------------------- */
/*                              Fim de sessão                                 */
/* -------------------------------------------------------------------------- */

/** Termina a sessão: limpa utilizador, token e expiração. */
export function logout(): void {
	setToken(null);
	setUser(null);
}

/** Alias de `logout` — limpa a sessão do utilizador. */
export const clearUser = logout;

/** Alias de `logout` — termina a sessão do utilizador. */
export const logoutUser = logout;
