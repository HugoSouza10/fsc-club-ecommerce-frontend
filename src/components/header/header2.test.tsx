import { renderWithRedux } from '../../helpers/test.helpers'
import Header from './header.component'

describe('Header', () => {
  it('should show sign out button if user is authenticated2', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: { userReducer: { isAuthenticated: true } } as any
    })
    getByText('Sair')
  })
  it('should show sign in and sign up button if user is not authenticated2', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: { userReducer: { isAuthenticated: false } } as any
    })
    getByText(/Login/i);
    getByText(/Criar Conta/i);
  })
})
