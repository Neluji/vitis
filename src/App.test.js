import { render, screen } from '@testing-library/react'
import App from 'App'

test('profile button visible', () => {
  render(<App />)
  const profileBtn = screen.queryByTestId('test-btn-profile')
  expect(profileBtn).toBeVisible()
})
