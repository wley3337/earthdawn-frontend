import { History } from 'history'

export const LOGOUT = 'LOGOUT'

export interface LogutArgs {
    history: History
}

export interface LogoutAction {
    type: typeof LOGOUT
    payload: { history: History }
}
