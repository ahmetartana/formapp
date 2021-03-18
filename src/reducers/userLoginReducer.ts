interface LoginActions {
  type: string;
  payload?: any;
}
export interface UserLoginState {
  isLoggedIn:Boolean
}
const defaultState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === '1',
}

export default (state:UserLoginState = defaultState, action: LoginActions) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('isLoggedIn', '1')
      return { isLoggedIn: true }
    case 'LOGOUT':
      localStorage.setItem('isLoggedIn', '0')
      return { isLoggedIn: false }
    default:
      return state
  }
}
