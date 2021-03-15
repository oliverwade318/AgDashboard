import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import { ReportService } from "src/app/core/services/report.service";
import { ApiResponse } from "src/app/shared/models/api.model";
import { ClientBirthday } from "../../shared/models/api.model";
import * as dashboardActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {

  getNextBirthday$ = createEffect(() => this.action$
    .pipe(
      ofType(dashboardActions.getNextBirthday),

      mergeMap(() => this.reportService.getNextBirthday()
        .pipe(
          map((response: ApiResponse) => {

            const birthdayList: ClientBirthday[] = response.message;
            return dashboardActions.getNextBirthdaySuccess({ list: birthdayList });
          }),
          catchError(() => {
            const message = { error: 'Houve um erro ao tentar trazer os próximos aniversariantes' }
            return of(dashboardActions.getNextBirthdayFailure(message))
          })
        )
      ),
    )
  );

  getUpcomingOrders$ = createEffect(() => this.action$
    .pipe(
      ofType(dashboardActions.getUpcomingOrders),

      mergeMap(() => this.reportService.getUpcomingOrders()
        .pipe(
          map((response) => dashboardActions.getUpcomingOrdersSuccess({ list: response.message })),
          catchError(() => {
            const message = { error: 'Houve um erro ao tentar trazer os próximos pedidos' }
            return of(dashboardActions.getNextBirthdayFailure(message))
          })
        )
      )
    )
  );

  getGeneralIndicators = createEffect(() => this.action$
    .pipe(
      ofType(dashboardActions.getGeneralIndicators),

      mergeMap(() => this.reportService.getGeneralIndicators()
        .pipe(
          map(response => dashboardActions.getGeneralIndicatorsSuccess({ generalIndicators: response.message })),
          catchError(() => {
            const message = { error: 'Houve um erro ao tentar trazer os indicadores gerais' }
            return of(dashboardActions.getGeneralIndicatorsFailure(message))
          })
        )
      )
    )
  );

  getMonthlyIndicators = createEffect(() => this.action$
    .pipe(
      ofType(dashboardActions.getMonthlyIndicators),

      mergeMap(() => this.reportService.getMonthlyIndicators()
        .pipe(
          map(response => dashboardActions.getMonthlyIndicatorsSuccess({ monthlyIndicators: response.message })),
          catchError(() => {
            const message = { error: 'Houve um erro ao tentar trazer os indicadores mensais' }
            return of(dashboardActions.getMonthlyIndicatorsFailure(message))
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private reportService: ReportService
  ) { }

}
