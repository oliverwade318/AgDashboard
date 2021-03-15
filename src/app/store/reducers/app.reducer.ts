import { Action, createReducer, on } from "@ngrx/store";

import { doLoginSuccess } from "../actions/login.actions";
import { AppContext, initialState } from "../states/app.state";

const _appReducer = createReducer(
  initialState,
  on(doLoginSuccess, (state, props) => ({ ...state, token: props.token }))
);

export function appReducer(state: AppContext, action: Action) {
  return _appReducer(state, action)
}
