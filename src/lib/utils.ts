import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fungsi ini untuk React + Tailwind CSS agar:
// 1. Menggabungkan class secara kondisional
// 2. Menangani konflik utility class Tailwind
// 3. Membuat kode lebih bersih dan mudah dibaca
// 4. Menghindari duplikasi style yang tidak perlu