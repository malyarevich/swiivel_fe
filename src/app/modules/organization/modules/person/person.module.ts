import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonRoutingModule} from "./person-routing.module";
import {PersonsListComponent} from "./components/persons-list/persons-list.component";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [PersonsListComponent],
    imports: [
        CommonModule,
        PersonRoutingModule,
    ]
})
export class PersonModule {
}
