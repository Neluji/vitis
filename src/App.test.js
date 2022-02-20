import { render } from '@testing-library/react'
import App from 'App'

test('profile button visible', () => {
  render(<App />)
  const linkElement = document.querySelector('#profile-btn')
  expect(linkElement).toBeVisible()
})
