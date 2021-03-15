import { createAction, props } from "@ngrx/store";

import { ClientBirthday, GeneralIndicators, MonthlyIndicators, UpcomingOrder } from "../../shared/models/api.model";

//getNextBirthday selectors
export const getNextBirthday = createAction('[Dashboard Index] Get Next Birthday');

export const getNextBirthdaySuccess = createAction(
  '[Dashboard Index] Success Get Next Birthday',
  props<{ list: ClientBirthday[] }>()
);

export const getNextBirthdayFailure = createAction(
  '[Dashboard Index] Failure Get Next Birthday',
  props<{ error: string }>()
);

//getNextOrders selectors
export const getUpcomingOrders = createAction('[Dashboard Index] Get Next Orders');

export const getUpcomingOrdersSuccess = createAction(
  '[Dashboard Index] Get Next Orders Success',
  props<{ list: UpcomingOrder[] }>()
);

export const getUpcomingOrdersFailure = createAction(
  '[Dashboard Index] Get Next Orders Failure',
  props<{ error: string }>()
);

//getMonthlyIndicators selectors
export const getMonthlyIndicators = createAction('[Dashboard Index] Get Monthly Indicators');

export const getMonthlyIndicatorsSuccess = createAction(
  '[Dashboard Index] Get Monthly Indicators Success',
  props<{ monthlyIndicators: MonthlyIndicators }>()
);

export const getMonthlyIndicatorsFailure = createAction(
  '[Dashboard Index] Get Monthly Indicators Failure',
  props<{ error: string }>()
);

//getGeneralIndicators selectors
export const getGeneralIndicators = createAction('[Dashboard Index] Get General Indicators');

export const getGeneralIndicatorsSuccess = createAction(
  '[Dashboard Index] Get General Indicators Success',
  props<{ generalIndicators: GeneralIndicators }>()
);

export const getGeneralIndicatorsFailure = createAction(
  '[Dashboard Index] Get General Indicators Failure',
  props<{ error: string }>()
);
