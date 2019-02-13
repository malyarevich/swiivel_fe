import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {LayoutComponent} from "./layout/main-layout.component";
import {HeaderComponent} from "./header";
import {ClrButtonModule, ClrFormsModule, ClrIconModule, ClrLoadingModule, ClrDropdownModule} from "@clr/angular";

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClrFormsModule,
    // ClrFormsNextModule,
    ClrIconModule,
    ClrButtonModule,
    ClrLoadingModule,
    ClrDropdownModule
  ]
})
export class DashboardModule { }
