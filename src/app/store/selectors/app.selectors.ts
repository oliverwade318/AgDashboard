import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppContext } from "../states/app.state";

const selectAppContext = createFeatureSelector('appContext');

export const selectToken = createSelector(
  selectAppContext,
  (state: AppContext) => (state.token)
)
