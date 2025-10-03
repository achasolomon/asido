import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColorClass(color: string): string {
  const colorMap: Record<string, string> = {
    primary: "text-primary",
    purple: "text-purple",
    green: "text-green",
    teal: "text-teal",
    red: "text-red",
    yellow: "text-yellow",
  };
  return colorMap[color] || "text-primary";
}

export function staggerDelay(index: number, baseDelay = 100): number {
  return index * baseDelay;
}