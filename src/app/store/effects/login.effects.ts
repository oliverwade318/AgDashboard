import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AuthService } from "src/app/core/services/auth.service";

import { CustomAlert } from "src/app/core/services/custom-alert.service";
import { LoginService } from "src/app/core/services/login.service";
import { Login } from "../../shared/models/login.model";
import * as fromLogin from "../actions/login.actions";


@Injectable()
export class loginEffects {

  login$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromLogin.doLogin),
      mergeMap((login: Login) => this.loginService.login(login)
        .pipe(
          map((response) => {

            const token = response.message;
            this.authService.setSession(token)
            this.router.navigate(['/dashboard']);
            return fromLogin.doLoginSuccess({ token });
          }),
          catchError((error) => {

            let message = null;

            console.log(error)
            if(error.status == 401)
              message = "Usuário ou senha incorretos";

            this.alert.errorMessage(message)
            return of(fromLogin.doLoginFailure(message))
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private alert: CustomAlert,

  ) { }
}
