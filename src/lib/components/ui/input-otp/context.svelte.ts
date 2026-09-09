import { getContext, setContext } from "svelte";

export interface OtpCell {
	index: number;
	char: string;
	hasFakeCaret: boolean;
}

export type InputOTPContext = {
	value: string;
	maxlength: number;
	placeholder: string;
	disabled: boolean;
	activeIndex: number | null;
	setActive(index: number | null): void;
	setValueAt(index: number, char: string): void;
	clearValueAt(index: number): void;
	focusNext(index: number): void;
	focusPrev(index: number): void;
	handleKeyDown(index: number, event: KeyboardEvent): void;
	handlePaste(index: number, event: ClipboardEvent): void;
	registerInput(index: number, el: HTMLInputElement | null): void;
};

const INPUT_OTP_KEY = Symbol("input-otp");

export function setInputOTPContext(ctx: InputOTPContext): InputOTPContext {
	return setContext(INPUT_OTP_KEY, ctx);
}

export function getInputOTPContext(): InputOTPContext {
	return getContext(INPUT_OTP_KEY);
}