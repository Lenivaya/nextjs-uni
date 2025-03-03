/**
 * Formats a date into a human-readable string
 * @param date - The date to format
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns A formatted date string
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Formats a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns A formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(amount)
}

/**
 * Truncates a string to a specified length and adds an ellipsis if needed
 * @param text - The text to truncate
 * @param maxLength - The maximum length (default: 50)
 * @returns The truncated string
 */
export function truncateText(text: string, maxLength: number = 50): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * Formats a number with thousands separators
 * @param number - The number to format
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns A formatted number string
 */
export function formatNumber(number: number, locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(number)
}
