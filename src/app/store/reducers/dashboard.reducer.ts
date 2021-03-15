import { Action, createReducer, on } from "@ngrx/store";

import { DashboardContext, initialState } from "../states/dashboard.state";
import * as dashboardActions from '../actions/dashboard.actions';

const _dashboardReducer = createReducer(

  initialState,

  //getNextBirthday reducers
  on(dashboardActions.getNextBirthday, (state) => ({ ...state, birthdayListLoading: true })),
  on(dashboardActions.getNextBirthdaySuccess, (state, { list }) => ({ ...state, birthdayListLoading: false, birthdayListError: null, birthdayList: list })),
  on(dashboardActions.getNextBirthdayFailure, (state, { error }) => ({ ...state, birthdayListLoading: false, birthdayListError: error })),

  //getUpcomingOrders reducers
  on(dashboardActions.getUpcomingOrders, (state) => ({ ...state, upcomingOrdersListLoading: true })),
  on(dashboardActions.getUpcomingOrdersSuccess, (state, { list }) => ({ ...state, upcomingOrdersListLoading: false, upcomingOrdersListError: null, upcomingOrdersList: list })),
  on(dashboardActions.getUpcomingOrdersFailure, (state, { error }) => ({ ...state, upcomingOrdersListLoading: false, upcomingOrdersListError: error })),

  //getGeneralIndicators reducers
  on(dashboardActions.getGeneralIndicators, (state) => ({ ...state, generalIndicatorsLoading: true })),
  on(dashboardActions.getGeneralIndicatorsSuccess, (state, { generalIndicators }) => {
    return { ...state, generalIndicatorsLoading: false, generalIndicatorsError: null, generalIndicators: generalIndicators }
  }),
  on(dashboardActions.getGeneralIndicatorsFailure, (state, { error }) => ({ ...state, generalIndicatorsLoading: false, generalIndicatorsError: error })),

  //getMonthlyIndicators reducers
  on(dashboardActions.getMonthlyIndicators, (state) => ({ ...state, monthlyIndicatorsLoaoding: true })),
  on(dashboardActions.getMonthlyIndicatorsSuccess, (state, { monthlyIndicators }) => {
    return { ...state, monthlyIndicatorsLoading: false, monthlyIndicatorsError: null, monthlyIndicators: monthlyIndicators }
  }),
  on(dashboardActions.getMonthlyIndicatorsFailure, (state, { error }) => ({ ...state, monthlyIndicatorsLoading: false, monthlyIndicatorsError: error })),

);

export function dashboardReducer(state: DashboardContext, action: Action) {
  return _dashboardReducer(state, action);
}
