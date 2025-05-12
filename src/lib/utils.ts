import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function fromMsToMinuts(ms: number | string) {
  const minutes = Math.floor(Number(ms) / 60000)
  const seconds = Math.floor((Number(ms) % 60000) / 1000)
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

export function formatNumberWithCommas(number: number | string) {
  const num = Number(number)
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}