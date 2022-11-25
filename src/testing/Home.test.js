import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../pages/Home'

describe('Home component', () => {
  test('renders create new site btn', () => {
    render(<Home />)
    const createBtn = screen.getByText(/crear nuevo site/i)
    expect(createBtn).toBeInTheDocument()
  })
  test('Press the create new site btn and render the form', () => {
    render(<Home />)
    const btnCreate = screen.getByText(/crear nuevo site/i)
    userEvent.click(btnCreate)
    const saveBtn = screen.getByText(/guardar/i)
    expect(saveBtn).toBeInTheDocument()
  })
  test('Press cancel btn and form should disappear', () => {
    render(<Home />)
    const btnCreate = screen.getByText(/crear nuevo site/i)
    userEvent.click(btnCreate)
    const cancelBtn = screen.getByText(/cancelar/i)
    userEvent.click(cancelBtn)
    expect(cancelBtn).not.toBeInTheDocument()
  })
  test('Control if the async function works and display the list', async () => {
    render(<Home />)
    const list = await screen.findByRole('list')
    expect(list).toBeInTheDocument()
  })
})
