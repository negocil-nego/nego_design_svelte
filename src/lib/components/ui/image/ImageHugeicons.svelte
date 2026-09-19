<script lang="ts">
	import { hugeicons } from "./hugeicons";
	import type { HugeiconsIconName } from "./hugeicons";
	import type { ImageHugeiconsProps } from "./types";

	let {
		icon,
		class: className = "",
		alt,
		width,
		height,
		...rest
	}: ImageHugeiconsProps = $props();
</script>

<img
	src={hugeicons[icon as HugeiconsIconName] ?? hugeicons["alert-circle"]}
	alt={alt ?? icon}
	class={className}
	{width}
	{height}
	draggable={false}
	{...rest}
/>