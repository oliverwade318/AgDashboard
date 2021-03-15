import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";

import { environment } from 'src/environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private router: Router,) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const url: string = request.url;
    const urlApi: string = environment.apiUrl;

    //if request to API_URL
    if (url.includes(urlApi)) {

      //set bearer token
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });

      //set null where empty
      const emptyFilteredBody = JSON.parse(JSON.stringify(request.body, function (key, value) { return value == '' ? null : value }));

      request = request.clone({
        body: emptyFilteredBody
      });

    }

    return next.handle(request);
  }
}
