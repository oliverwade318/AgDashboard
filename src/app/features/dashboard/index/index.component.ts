import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ClientBirthday, GeneralIndicators, MonthlyIndicators, UpcomingOrder } from 'src/app/shared/models/api.model';
import * as dashboardActions from 'src/app/store/actions/dashboard.actions'
import * as dashboardSelectors from 'src/app/store/selectors/dashboard.selectors';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  $birthdayList: Observable<ClientBirthday[]>
  $birthdayListLoading: Observable<boolean>
  $birthdayListError: Observable<string>

  $upcomingOrderList: Observable<UpcomingOrder[]>
  $upcomingOrderListLoading: Observable<boolean>
  $upcomingOrderListError: Observable<string>

  $generalIndicators: Observable<GeneralIndicators>
  $generalIndicatorsLoading: Observable<boolean>
  $generalIndicatorsError: Observable<string>

  $monthlyIndicators: Observable<MonthlyIndicators>
  $monthlyIndicatorsLoading: Observable<boolean>
  $monthlyIndicatorsError: Observable<string>

  constructor(
    private store: Store
    ) {
      this.$birthdayList = store.select(dashboardSelectors.selectNextBirthdayList);
      this.$birthdayListLoading = store.select(dashboardSelectors.selectNextBirthdayLoading);
      this.$birthdayListError = store.select(dashboardSelectors.selectNextBirthdayError);

      this.$upcomingOrderList = store.select(dashboardSelectors.upcomingOrdersList);
      this.$upcomingOrderListLoading = store.select(dashboardSelectors.upcomingOrdersListLoading);
      this.$upcomingOrderListError = store.select(dashboardSelectors.upcomingOrdersListError);

      this.$generalIndicators = store.select(dashboardSelectors.generalIndicators);
      this.$generalIndicatorsLoading = store.select(dashboardSelectors.generalIndicatorsLoading);
      this.$generalIndicatorsError = store.select(dashboardSelectors.generalIndicatorsError);

      this.$monthlyIndicators = store.select(dashboardSelectors.monthlyIndicators);
      this.$monthlyIndicatorsLoading = store.select(dashboardSelectors.monthlyIndicatorsLoading);
      this.$monthlyIndicatorsError = store.select(dashboardSelectors.monthlyIndicatorsError);
    }

  ngOnInit(): void {
    this.store.dispatch(dashboardActions.getNextBirthday());
    this.store.dispatch(dashboardActions.getUpcomingOrders());
    this.store.dispatch(dashboardActions.getGeneralIndicators());
    this.store.dispatch(dashboardActions.getMonthlyIndicators());
  }

}
