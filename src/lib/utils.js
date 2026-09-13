import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names with proper conflict resolution.
 * shadcn/ui compatible utility.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
