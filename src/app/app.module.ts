import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginService } from './core/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { reducers } from './store/reducers/index.reducer';
import { effects } from './store/effects/index.effects';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { MAT_DATE_FORMATS } from '@angular/material/core';
import { CUSTOM_MOMENT_ADAPTER } from './core/utils/moment-adapter-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    CoreModule,
    MatMomentDateModule ,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    LoginService,
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_ADAPTER},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
