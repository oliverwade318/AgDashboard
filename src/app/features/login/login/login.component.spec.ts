import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MaterialComponentsModule } from 'src/app/shared/components/material-components.module';
import { User } from 'src/app/shared/models/user.model';
import { appReducer } from 'src/app/state/app.reducer';
import { loginReducer } from '../../state/login.reducer';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let user: User;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports :[
        StoreModule.forRoot({
          appContext: appReducer,
          userContext: loginReducer,
        }),
        MaterialComponentsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [LoginComponent],
    })
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    user = {
      username: 'testUser',
      password: 'testPassword'
    };
    component.formLogin.patchValue(user);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dispatch containing user', () => {
    const bt = fixture.debugElement.query(By.css('button'));

    spyOn(component.store, 'dispatch');

    bt.triggerEventHandler('click', null);

    expect(component.store.dispatch).toHaveBeenCalledWith(jasmine.objectContaining({
      username: 'testUser',
      password: 'testPassword'
    }));
  });

});
