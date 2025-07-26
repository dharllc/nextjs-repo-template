import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Home Page', () => {
  it('should render the home page', () => {
    render(<Page />)
    
    // Check if Next.js logo is present
    const nextLogo = screen.getByAltText('Next.js logo')
    expect(nextLogo).toBeDefined()
  })

  it('should contain Get started text', () => {
    render(<Page />)
    
    const getStartedTexts = screen.getAllByText(/Get started by editing/i)
    expect(getStartedTexts.length).toBeGreaterThan(0)
  })
})