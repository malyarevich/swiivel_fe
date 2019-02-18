import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard.component';
import {OrganisationRoutingModule} from "./organisation-routing.module";
import {LayoutComponent} from "./components/layout";
import {HeaderComponent} from "./components/header";
import {PersonsListComponent} from "./components/person/persons-list/persons-list.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {Effects, reducer} from "./components/person/store";
import {PersonService} from "../../services/person/person.service";

@NgModule({
    declarations: [
        DashboardComponent,
        PersonsListComponent,
        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        OrganisationRoutingModule,
        StoreModule.forFeature('persons', reducer),
        EffectsModule.forFeature([Effects]),
    ],
    providers: [PersonService]
})
export class OrganizationModule {
}
