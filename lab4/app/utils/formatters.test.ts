import { describe, test, expect } from 'vitest'
import {
  formatDate,
  formatCurrency,
  truncateText,
  formatNumber
} from './formatters'

describe('Formatter Utilities', () => {
  describe('formatDate', () => {
    test('formats date correctly with default locale', () => {
      const date = new Date('2023-05-15')
      const formatted = formatDate(date)

      // This test is locale-dependent, so we check for expected parts
      expect(formatted).toContain('2023')
      expect(formatted).toContain('May')
      expect(formatted).toContain('15')
    })

    test('respects provided locale', () => {
      const date = new Date('2023-05-15')
      const formatted = formatDate(date, 'de-DE')

      // German format should contain Mai (May in German)
      expect(formatted).toContain('2023')
      expect(formatted).toContain('Mai')
      expect(formatted).toContain('15')
    })
  })

  describe('formatCurrency', () => {
    test('formats USD currency correctly', () => {
      const amount = 1234.56
      const formatted = formatCurrency(amount)

      expect(formatted).toBe('$1,234.56')
    })

    test('formats EUR currency correctly', () => {
      const amount = 1234.56
      const formatted = formatCurrency(amount, 'EUR', 'de-DE')

      // Instead of exact string comparison, check for key parts
      // This avoids issues with invisible characters or slight formatting differences
      expect(formatted).toContain('1.234,56')
      expect(formatted).toContain('€')
    })

    test('handles zero correctly', () => {
      const amount = 0
      const formatted = formatCurrency(amount)

      expect(formatted).toBe('$0.00')
    })
  })

  describe('truncateText', () => {
    test('does not truncate text shorter than maxLength', () => {
      const text = 'Short text'
      const truncated = truncateText(text, 20)

      expect(truncated).toBe(text)
    })

    test('truncates text longer than maxLength', () => {
      const text = 'This is a very long text that should be truncated'
      const truncated = truncateText(text, 20)

      expect(truncated).toBe('This is a very long ...')
      expect(truncated.length).toBe(23) // 20 chars + 3 for ellipsis
    })

    test('uses default maxLength if not provided', () => {
      const text = 'A'.repeat(100)
      const truncated = truncateText(text)

      expect(truncated.length).toBe(53) // 50 chars + 3 for ellipsis
      expect(truncated.endsWith('...')).toBe(true)
    })
  })

  describe('formatNumber', () => {
    test('formats large numbers with thousands separators', () => {
      const number = 1234567.89
      const formatted = formatNumber(number)

      expect(formatted).toBe('1,234,567.89')
    })

    test('respects provided locale', () => {
      const number = 1234567.89
      const formatted = formatNumber(number, 'de-DE')

      // In German locale, numbers use . as thousands separator and , as decimal separator
      // Use contains instead of exact match to avoid locale-specific formatting issues
      expect(formatted).toContain('1.234.567,89')
    })

    test('handles zero correctly', () => {
      const number = 0
      const formatted = formatNumber(number)

      expect(formatted).toBe('0')
    })
  })
})
