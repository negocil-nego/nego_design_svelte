<script lang="ts">
  import { useVisibility } from "$lib/hooks/visibility.svelte.js";
  import { cn } from "$lib/utils.js";
  import type {
    VisibilityFallbackPosition,
    VisibilityFallbackProps,
  } from "./types.js";

  let {
    children,
    fallback,
    fixed = false,
    isFixed = false,
    fixedPosition = "bottom-right",
    fixedClass = "",
    preserveSpace,
    root,
    rootMargin = "0px",
    threshold = 0,
    once = false,
    initialValue = true,
    keepMounted = false,
    invert = false,
    animate = true,
    animation = "animate__fadeIn animate__faster",
    fallbackAnimation = "animate__fadeIn animate__faster",
    visibleClass = "",
    hiddenClass = "",
    fallbackClass = "",
    class: className = "",
    onChange,
    onEnter,
    onLeave,
    ...restProps
  }: VisibilityFallbackProps = $props();

  let containerEl = $state<HTMLDivElement | null>(null);

  const visibility = useVisibility(() => ({
    root,
    rootMargin,
    threshold,
    once,
    initialValue,
    onChange,
    onEnter,
    onLeave,
  }));

  $effect(() => {
    visibility.target = containerEl;
  });

  const isVisible = $derived(visibility.isVisible);
  const showMain = $derived(invert ? !isVisible : isVisible);
  const effectiveIsFixed = $derived(fixed || isFixed);
  const effectivePreserveSpace = $derived(
    preserveSpace !== undefined ? preserveSpace : effectiveIsFixed,
  );

  const FIXED_POSITIONS: Record<VisibilityFallbackPosition, string> = {
    top: "fixed top-0 left-0 right-0 z-500",
    bottom: "fixed bottom-0 left-0 right-0 z-500",
    "top-left": "fixed top-4 left-4 z-500",
    "top-right": "fixed top-4 right-4 z-500",
    "bottom-left": "fixed bottom-4 left-4 z-500",
    "bottom-right": "fixed bottom-4 right-4 z-500",
    center: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-500",
    custom: "fixed z-500",
  };

  const mainAnimationClass = $derived(
    animate ? cn("animate__animated", animation) : "",
  );

  const fallbackAnimationClass = $derived(
    animate ? cn("animate__animated", fallbackAnimation) : "",
  );

  const fallbackContainerClass = $derived(
    cn(
      fallbackAnimationClass,
      effectiveIsFixed &&
        (FIXED_POSITIONS[fixedPosition] ?? "fixed bottom-4 right-4 z-500"),
      effectiveIsFixed && fixedClass,
      fallbackClass,
    ),
  );
</script>

<div
  bind:this={containerEl}
  data-visible={isVisible}
  class={cn(
    "visibility-fallback relative transition-all duration-300 ease-in-out",
    isVisible ? visibleClass : hiddenClass,
    className,
  )}
  {...restProps}
>
  {#if effectivePreserveSpace}
    <div
      class={cn(
        mainAnimationClass,
        !showMain && "invisible pointer-events-none",
      )}
    >
      {@render children?.({ isVisible })}
    </div>
    {#if !showMain && fallback}
      <div class={fallbackContainerClass}>
        {@render fallback({
          isVisible,
          isFixed: effectiveIsFixed,
          fixed: effectiveIsFixed,
        })}
      </div>
    {/if}
  {:else if keepMounted}
    <div class={cn(mainAnimationClass, !showMain && "hidden")}>
      {@render children?.({ isVisible })}
    </div>
    {#if !showMain && fallback}
      <div class={fallbackContainerClass}>
        {@render fallback({
          isVisible,
          isFixed: effectiveIsFixed,
          fixed: effectiveIsFixed,
        })}
      </div>
    {/if}
  {:else if showMain}
    <div class={mainAnimationClass}>
      {@render children?.({ isVisible })}
    </div>
  {:else if fallback}
    <div class={fallbackContainerClass}>
      {@render fallback({
        isVisible,
        isFixed: effectiveIsFixed,
        fixed: effectiveIsFixed,
      })}
    </div>
  {/if}
</div>
