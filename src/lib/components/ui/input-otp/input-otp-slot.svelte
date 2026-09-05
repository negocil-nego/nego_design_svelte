<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import { cn, type WithElementRef, type WithoutChildren } from "$lib/utils.js";
	import { getInputOTPContext, type OtpCell } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		cell,
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLInputAttributes, HTMLInputElement>> & {
		cell: OtpCell;
	} = $props();

	const ctx = getInputOTPContext();
	const { index } = cell;

	$effect(() => {
		ctx.registerInput(index, ref);
	});

	function handleInput(event: Event & { currentTarget: HTMLInputElement }) {
		ctx.setValueAt(index, event.currentTarget.value);
	}

	function handleFocus() {
		ctx.setActive(index);
		ref?.select();
	}

	function handleBlur() {
		ctx.setActive(null);
	}

	function handleKeyDown(event: KeyboardEvent) {
		ctx.handleKeyDown(index, event);
	}

	function handlePaste(event: ClipboardEvent) {
		ctx.handlePaste(index, event);
	}
</script>

<input
	bind:this={ref}
	data-slot="input-otp-slot"
	type="text"
	inputmode="numeric"
	autocomplete="one-time-code"
	maxlength={1}
	value={cell.char}
	placeholder={ctx.placeholder}
	disabled={ctx.disabled}
	oninput={handleInput}
	onfocus={handleFocus}
	onblur={handleBlur}
	onkeydown={handleKeyDown}
	onpaste={handlePaste}
	class={cn(
		"border-input text-foreground bg-input/30 size-10 rounded-md border text-center text-lg shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
		className
	)}
	{...restProps}
/>