<script lang="ts">
  import type { BarChartProps } from "../data/types";

  let {
    title,
    description,
    data = [],
    barColor = "var(--color-primary, #4f46e5)",
    height = 250,
  }: BarChartProps = $props();

  const padding = { top: 20, right: 20, bottom: 40, left: 50 };

  let svgWidth = $state(0);
  let containerEl: HTMLDivElement;

  const maxValue = $derived(Math.max(...data.map((d) => d.value), 1));

  const chartWidth = $derived(svgWidth - padding.left - padding.right);
  const chartHeight = $derived(height - padding.top - padding.bottom);

  const barWidth = $derived(
    data.length > 0 ? Math.min((chartWidth / data.length) * 0.6, 60) : 0,
  );
  const barGap = $derived(
    data.length > 0
      ? (chartWidth - barWidth * data.length) / (data.length + 1)
      : 0,
  );

  const yTicks = $derived.by(() => {
    const step = Math.ceil(maxValue / 5);
    const ticks: number[] = [];
    for (let i = 0; i <= maxValue + step; i += step) {
      ticks.push(i);
      if (ticks.length > 6) break;
    }
    return ticks;
  });

  function barX(index: number): number {
    return padding.left + barGap + index * (barWidth + barGap);
  }

  function barY(value: number): number {
    return padding.top + chartHeight - (value / maxValue) * chartHeight;
  }

  function barHeight(value: number): number {
    return (value / maxValue) * chartHeight;
  }

  function tickY(tick: number): number {
    return padding.top + chartHeight - (tick / maxValue) * chartHeight;
  }

  $effect(() => {
    if (!containerEl) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        svgWidth = entry.contentRect.width;
      }
    });
    observer.observe(containerEl);
    return () => observer.disconnect();
  });
</script>

<div bind:this={containerEl} class="w-full">
  {#if title || description}
    <div class="mb-4">
      {#if title}
        <h3 class="text-lg font-semibold text-foreground">{title}</h3>
      {/if}
      {#if description}
        <p class="text-sm text-muted-foreground">{description}</p>
      {/if}
    </div>
  {/if}

  {#if svgWidth > 0}
    <svg width={svgWidth} {height} class="overflow-visible">
      <!-- Y-axis ticks and grid lines -->
      {#each yTicks as tick, i (i)}
        <line
          x1={padding.left}
          y1={tickY(tick)}
          x2={svgWidth - padding.right}
          y2={tickY(tick)}
          stroke="currentColor"
          class="text-border"
          stroke-dasharray="4 4"
        />
        <text
          x={padding.left - 8}
          y={tickY(tick)}
          text-anchor="end"
          dominant-baseline="middle"
          class="fill-muted-foreground text-xs"
        >
          {tick}
        </text>
      {/each}

      <!-- Bars -->
      {#each data as item, i (i)}
        <rect
          x={barX(i)}
          y={barY(item.value)}
          width={barWidth}
          height={barHeight(item.value)}
          rx={4}
          fill={barColor}
          class="transition-all duration-300"
        />
      {/each}

      <!-- X-axis labels -->
      {#each data as item, i (i)}
        <text
          x={barX(i) + barWidth / 2}
          y={height - padding.bottom + 20}
          text-anchor="middle"
          class="fill-muted-foreground text-xs"
        >
          {item.label}
        </text>
      {/each}
    </svg>
  {/if}
</div>
