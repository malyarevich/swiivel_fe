import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonRoutingModule} from "./person-routing.module";
import {PersonsListComponent} from "./components/persons-list/persons-list.component";
import { PersonPageComponent } from './components/person-page/person-page.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        PersonsListComponent,
        PersonPageComponent
    ],
    imports: [
        CommonModule,
        PersonRoutingModule,
        NgbModule,
    ]
})
export class PersonModule {
}
