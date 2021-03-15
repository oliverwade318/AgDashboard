import { ClientBirthday, GeneralIndicators, MonthlyIndicators, UpcomingOrder } from "../../shared/models/api.model";

export interface DashboardContext {

  birthdayList: ClientBirthday[],
  birthdayListLoading: boolean,
  birthdayListError: string,

  upcomingOrdersList: UpcomingOrder[],
  upcomingOrdersListLoading: boolean,
  upcomingOrdersListError: string,

  generalIndicators: GeneralIndicators,
  generalIndicatorsLoading: boolean,
  generalIndicatorsError: string,

  monthlyIndicators: MonthlyIndicators,
  monthlyIndicatorsLoading: boolean,
  monthlyIndicatorsError: string,
}

export const initialState: DashboardContext = {

  birthdayList: [],
  birthdayListLoading: false,
  birthdayListError: null,

  upcomingOrdersList: [],
  upcomingOrdersListLoading: false,
  upcomingOrdersListError: null,

  generalIndicators: null,
  generalIndicatorsLoading: false,
  generalIndicatorsError: null,

  monthlyIndicators: null,
  monthlyIndicatorsLoading: false,
  monthlyIndicatorsError: null,
}
