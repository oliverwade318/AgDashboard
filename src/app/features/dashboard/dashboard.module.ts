import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { MaterialComponentsModule } from 'src/app/shared/components/material-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';
import { ReportsModule } from './reports/reports.module';


@NgModule({
  declarations: [LayoutComponent, IndexComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsModule,
    OrdersModule,
    ReportsModule
  ]
})
export class DashboardModule { }
