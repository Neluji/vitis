import { render, screen } from '@testing-library/react'
import NavBar from 'components/NavBar/NavBar'

describe('Navbar', () => {
  it('have a visible profile button', () => {
    render(<NavBar groups={[]} />)
    const profileBtn = screen.queryByTestId('test-btn-profile')
    expect(profileBtn).toBeVisible()
  })

  it.todo('have a visible settings button')
})
