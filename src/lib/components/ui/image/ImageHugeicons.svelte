<script lang="ts">
	import { hugeicons } from "./hugeicons";
	import { hugeiconsSvg } from "./hugeicons-svg";
	import type { HugeiconsIconName } from "./hugeicons";
	import type { HugeiconsSvgName } from "./hugeicons-svg";
	import { cn } from "$lib/utils.js";

	type IconStyle = "SVG" | "DATA_IMAGE";

	let {
		icon,
		class: className = "",
		alt,
		width = 24,
		height = 24,
		style = "SVG",
		...rest
	}: {
		icon: HugeiconsIconName | HugeiconsSvgName | string;
		class?: string;
		alt?: string;
		width?: number;
		height?: number;
		style?: IconStyle;
		[key: string]: unknown;
	} = $props();

	const imgClasses = $derived(cn(className?.replace(/text-\S+/g, "").trim()));

	const filterStyle = $derived.by(() => {
		if (!className) return undefined;
		const c = className.toLowerCase();
		if (c.includes("text-white") || c.includes("text-white!")) return "filter: brightness(0) invert(1)";
		if (c.includes("text-black") || c.includes("text-black!")) return "filter: brightness(0)";
		if (c.includes("text-gray-400") || c.includes("text-muted-foreground")) return "filter: brightness(0) saturate(50%) opacity(60%)";
		if (c.includes("text-gray-500")) return "filter: brightness(0) saturate(50%) opacity(70%)";
		if (c.includes("text-gray-600")) return "filter: brightness(0) saturate(50%) opacity(80%)";
		if (c.includes("text-primary")) return "filter: hue-rotate(200deg) saturate(200%) brightness(0.8)";
		if (c.includes("text-red")) return "filter: hue-rotate(-30deg) saturate(300%) brightness(0.7)";
		if (c.includes("text-green")) return "filter: hue-rotate(90deg) saturate(200%) brightness(0.7)";
		if (c.includes("text-blue")) return "filter: hue-rotate(180deg) saturate(200%) brightness(0.8)";
		if (c.includes("text-yellow")) return "filter: hue-rotate(40deg) saturate(300%) brightness(0.9)";
		if (c.includes("text-orange")) return "filter: hue-rotate(15deg) saturate(300%) brightness(0.8)";
		if (c.includes("text-purple")) return "filter: hue-rotate(260deg) saturate(200%) brightness(0.8)";
		return undefined;
	});

	const iconSrc = $derived.by(() => {
		if (style === "SVG") {
			return hugeiconsSvg[icon as HugeiconsSvgName] ?? hugeiconsSvg["alert-circle"];
		}
		return hugeicons[icon as HugeiconsIconName] ?? hugeicons["alert-circle"];
	});
</script>

{#if iconSrc}
	<img
		src={iconSrc}
		alt={alt ?? icon}
		class={cn(imgClasses)}
		style={filterStyle}
		{width}
		{height}
		draggable={false}
		{...rest}
	/>
{/if}
