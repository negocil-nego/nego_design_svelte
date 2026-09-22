export interface BarChartItem {
    label: string;
    value: number;
}

export interface BarChartProps {
    title?: string;
    description?: string;
    data: BarChartItem[];
    barColor?: string;
    height?: number;
}
