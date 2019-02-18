import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganisationRoutingModule} from "./organisation-routing.module";
import {LayoutComponent} from "./components/layout";
import {HeaderComponent} from "./components/header";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {Effects, reducer} from "./modules/person/store";
import {PersonService} from "./modules/person/services/person.service";
import {DashboardModule} from "./modules/dashboard";
import {PersonModule} from "./modules/person";

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        OrganisationRoutingModule,
        StoreModule.forFeature('persons', reducer),
        EffectsModule.forFeature([Effects]),
        DashboardModule,
        PersonModule
    ],
    providers: [PersonService]
})
export class OrganizationModule {
}
