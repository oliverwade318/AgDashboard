import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'clientes',
        loadChildren: () => import('./clients/clients.module').then( m => m.ClientsModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./orders/orders.module').then( m => m.OrdersModule)
      },
      {
        path: 'relatorios',
        loadChildren: () => import('./reports/reports.module').then( m => m.ReportsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
