import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { AppContext } from 'src/app/store/states/app.state';

import * as fromLogin from 'src/app/store/actions/login.actions';
import { LoginContext } from 'src/app/store/states/login.state';
import * as fromLoginSelectors from 'src/app/store/selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  subscriptions: Subscription;

  formLogin: FormGroup;
  loading$: Observable<boolean>;
  token$: Observable<string>;
  loginError$: Observable<string>;

  constructor(
    public store: Store<[LoginContext, AppContext]>
  ) {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromLoginSelectors.selectLoginLoading));
  }

  login() {
    this.store.dispatch(fromLogin.doLogin(this.formLogin.value));
  }

}
