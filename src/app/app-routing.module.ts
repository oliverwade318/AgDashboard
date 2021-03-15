import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './core/guards/route.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then( m => m.LoginModule )
  },
  {
    path: 'dashboard',
    canActivate: [RouteGuard],
    loadChildren: () => import('./features/dashboard/dashboard.module').then( m => m.DashboardModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
