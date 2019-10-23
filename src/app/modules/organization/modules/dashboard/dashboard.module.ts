import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./components/dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { OnlineFormModule } from '@app/modules/online-form/online-form.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        OnlineFormModule
    ]
})
export class DashboardModule {
}
