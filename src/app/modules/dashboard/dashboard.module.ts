import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {LayoutComponent} from "./components/layout";
import {HeaderComponent} from "./components/header";

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
