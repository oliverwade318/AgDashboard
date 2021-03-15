import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptorModule } from './interceptors/interceptor.module';
import { CustomAlert } from './services/custom-alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InterceptorModule,
    MatSnackBarModule
  ],
  exports: [
    InterceptorModule
  ],
  providers: [
    CustomAlert
  ]
})
export class CoreModule { }
