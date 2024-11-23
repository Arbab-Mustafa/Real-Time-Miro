import { Camera } from "@/types/canvas";
import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const COLORS = ["#FFC7C7", "#FF6B6B", "#FFD3B6", "#FF922E"];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventtoCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}
