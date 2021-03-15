import { Action, createReducer, on } from "@ngrx/store";

import { LoginContext, initialState } from '../states/login.state';
import * as fromLogin from '../actions/login.actions';

const _loginReducer = createReducer(
  initialState,
  on(fromLogin.doLogin, (state) => ({ ...state, loading: true })),
  on(fromLogin.doLoginSuccess, (state) => ({ ...state, loading: false, error: null })),
  on(fromLogin.doLoginFailure, (state, { error }) => ({...state, loading: false, error: error})),
)

export function loginReducer(state: LoginContext | undefined, action: Action) {
  return _loginReducer(state, action)
}
