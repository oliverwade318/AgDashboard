import { createAction, props } from "@ngrx/store";
import { Login } from "../../shared/models/login.model";

export const doLogin = createAction(
  '[Login] Do Login',
  props<Login>()
);

export const doLoginSuccess = createAction(
  '[API] Login Success',
  props<{ token: string }>()
);

export const doLoginFailure = createAction(
  '[API] Login Failure',
  props<{ error: string }>()
);
