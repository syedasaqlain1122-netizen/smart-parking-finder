import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../src/components/Header'

describe('Header Component', () => {
  it('renders header with logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByText(/Smart Parking/i)).toBeInTheDocument()
  })

  it('shows login button when user is not authenticated', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
  })
})
