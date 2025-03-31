import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx'; //classValue is the type

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); //object sytax with clsx and result passed into twMerge
}
