import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonsListComponent} from "./components/persons-list/persons-list.component";

export const routes: Routes = [
    {
        path: '',
        component: PersonsListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule {
}
