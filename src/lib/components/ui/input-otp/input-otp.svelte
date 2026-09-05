<script lang="ts">
	import { cn, type WithElementRef, type WithoutChildren } from "$lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { setInputOTPContext, type OtpCell } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		value = $bindable(""),
		maxlength = 6,
		length,
		placeholder = "",
		disabled = false,
		id,
		onValueChange,
		class: className,
		children,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> & {
		value?: string;
		maxlength?: number;
		length?: number;
		placeholder?: string;
		disabled?: boolean;
		id?: string;
		onValueChange?: (value: string) => void;
		children?: Snippet<[{ cells: OtpCell[] }]>;
	} = $props();

	const total = $derived(length ?? maxlength);
	let activeIndex = $state<number | null>(null);
	const inputs = $state<Array<HTMLInputElement | null>>([]);

	const cells = $derived(
		Array.from({ length: total }, (_, index) => ({
			index,
			char: value[index] ?? "",
			hasFakeCaret: activeIndex === index && value[index] === "",
		}))
	);

	function focusIndex(index: number) {
		if (index < 0 || index >= total) return;
		const el = inputs[index];
		el?.focus();
		el?.select();
	}

	function focusNext(index: number) {
		focusIndex(Math.min(index + 1, total - 1));
	}

	function focusPrev(index: number) {
		focusIndex(index - 1);
	}

	function registerInput(index: number, el: HTMLInputElement | null) {
		inputs[index] = el;
	}

	function setActive(index: number | null) {
		activeIndex = index;
	}

	function setValueAt(index: number, char: string) {
		if (index < 0 || index >= total) return;
		const chars = value.split("");
		chars[index] = char.slice(0, 1);
		value = chars.join("");
		activeIndex = Math.min(index + 1, total - 1);
		focusNext(index);
	}

	function clearValueAt(index: number) {
		if (index < 0 || index >= total) return;
		const chars = value.split("");
		chars[index] = "";
		value = chars.join("");
	}

	function handleKeyDown(index: number, event: KeyboardEvent) {
		if (event.key === "Backspace") {
			event.preventDefault();
			if (value[index]) {
				clearValueAt(index);
			} else {
				clearValueAt(index - 1);
				focusPrev(index);
			}
		} else if (event.key === "Delete") {
			event.preventDefault();
			clearValueAt(index);
		} else if (event.key === "ArrowLeft") {
			event.preventDefault();
			focusPrev(index);
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			focusNext(index);
		} else if (event.key === "Home") {
			event.preventDefault();
			focusIndex(0);
		} else if (event.key === "End") {
			event.preventDefault();
			focusIndex(total - 1);
		}
	}

	function handlePaste(index: number, event: ClipboardEvent) {
		event.preventDefault();
		const digits = (event.clipboardData?.getData("text") ?? "")
			.replace(/\D/g, "")
			.split("");
		if (!digits.length) return;
		const chars = value.split("");
		let cursor = index;
		for (const digit of digits) {
			if (cursor >= total) break;
			chars[cursor] = digit;
			cursor++;
		}
		value = chars.join("");
		activeIndex = cursor - 1;
		focusIndex(cursor - 1);
	}

	let ctxState = $state({
		value,
		maxlength: total,
		placeholder,
		disabled,
		activeIndex: null as number | null,
		setActive,
		setValueAt,
		clearValueAt,
		focusNext,
		focusPrev,
		handleKeyDown,
		handlePaste,
		registerInput,
	});

	const ctx = setInputOTPContext(ctxState);

	$effect(() => {
		ctx.value = value;
		ctx.maxlength = total;
		ctx.placeholder = placeholder;
		ctx.disabled = disabled;
		ctx.activeIndex = activeIndex;
	});

	let isInitialValue = true;
	$effect(() => {
		if (isInitialValue) {
			isInitialValue = false;
			return;
		}
		onValueChange?.(value);
	});
</script>

<div
	bind:this={ref}
	data-slot="input-otp"
	spellcheck={false}
	class={cn(
		"cn-input-otp-input gap-2 flex items-center disabled:cursor-not-allowed has-disabled:opacity-50",
		className
	)}
	{...restProps}
>
	{@render children?.({ cells })}
	<input
		type="hidden"
		data-slot="input-otp-input"
		value={value}
		{id}
		disabled={disabled}
		aria-hidden={true}
	/>
</div>