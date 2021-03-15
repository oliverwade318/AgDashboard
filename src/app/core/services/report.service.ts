import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment'
import { ApiResponse } from 'src/app/shared/models/api.model';

@Injectable({
  providedIn: 'root',
})

export class ReportService {

  constructor(private http: HttpClient) { }

  getUpcomingOrders(): Observable<ApiResponse> {
    return this.http.get(`${environment.apiUrl}/reports/upcoming-orders`) as Observable<ApiResponse>;
  }

  getNextBirthday(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/reports/upcoming-birthdays`);
  }

  getGeneralIndicators(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/reports/general-indicators`);
  }

  getMonthlyIndicators(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/reports/monthly-indicators`);
  }

  getMonthlyRevenue(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/reports/monthly-revenue`, data);
  }

  getMonthlyOrders(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/reports/monthly-orders`, data);
  }
}
