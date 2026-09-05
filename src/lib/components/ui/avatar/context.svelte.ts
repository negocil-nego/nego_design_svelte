import { getContext, setContext } from "svelte";

export type AvatarContext = {
	imageError: boolean;
	src?: string;
	srcset?: string;
};

const AVATAR_KEY = Symbol("avatar");

export function setAvatarContext(src?: string, srcset?: string): AvatarContext {
	const ctx = $state<AvatarContext>({ imageError: false, src, srcset });
	setContext(AVATAR_KEY, ctx);
	return ctx;
}

export function getAvatarContext(): AvatarContext {
	return getContext(AVATAR_KEY);
}