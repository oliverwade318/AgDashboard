import { createFeatureSelector, createSelector } from "@ngrx/store";

import { LoginContext } from "../states/login.state";

export const selectUserContext = createFeatureSelector('userContext');

export const selectLoginLoading = createSelector(
  selectUserContext,
  (state: LoginContext) => state.loading
)

export const selectLoginError = createSelector(
  selectUserContext,
  (state: LoginContext) => state.error
)

