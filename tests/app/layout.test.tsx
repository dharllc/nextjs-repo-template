import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'

// Mock the CSS import and fonts
vi.mock('@/app/globals.css', () => ({}))
vi.mock('next/font/google', () => ({
  Geist: () => ({
    variable: '--font-geist-sans',
    className: 'font-sans'
  }),
  Geist_Mono: () => ({
    variable: '--font-geist-mono',
    className: 'font-mono'
  })
}))

import RootLayout from '@/app/layout'

describe('Root Layout', () => {
  it('should render children', () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    )
    
    expect(getByText('Test Child')).toBeDefined()
  })
})