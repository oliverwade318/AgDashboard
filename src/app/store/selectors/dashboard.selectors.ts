import { createFeatureSelector, createSelector } from "@ngrx/store";

import { DashboardContext } from '../states/dashboard.state';

const DashboardContext = createFeatureSelector('dashboardContext')

//nextBirthdayList selectors
export const selectNextBirthdayList = createSelector(DashboardContext, (state: DashboardContext) => state.birthdayList);
export const selectNextBirthdayError = createSelector(DashboardContext, (state: DashboardContext) => state.birthdayListError);
export const selectNextBirthdayLoading = createSelector(DashboardContext, (state: DashboardContext) => state.birthdayListLoading);

//upcomingOrdersList selectors
export const upcomingOrdersList = createSelector(DashboardContext, (state: DashboardContext) => state.upcomingOrdersList);
export const upcomingOrdersListError = createSelector(DashboardContext, (state: DashboardContext) => state.upcomingOrdersListError);
export const upcomingOrdersListLoading = createSelector(DashboardContext, (state: DashboardContext) => state.upcomingOrdersListLoading);

//GeneralIndicators selectors
export const generalIndicators = createSelector(DashboardContext, (state: DashboardContext) => state.generalIndicators);
export const generalIndicatorsError = createSelector(DashboardContext, (state: DashboardContext) => state.generalIndicatorsError);
export const generalIndicatorsLoading = createSelector(DashboardContext, (state: DashboardContext) => state.generalIndicatorsLoading);

//monthlyIndicators selectors
export const monthlyIndicators = createSelector(DashboardContext, (state: DashboardContext) => state.monthlyIndicators);
export const monthlyIndicatorsError = createSelector(DashboardContext, (state: DashboardContext) => state.monthlyIndicatorsError);
export const monthlyIndicatorsLoading = createSelector(DashboardContext, (state: DashboardContext) => state.monthlyIndicatorsLoading);
