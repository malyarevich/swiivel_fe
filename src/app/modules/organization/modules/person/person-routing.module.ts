import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonsListComponent} from "./components/persons-list/persons-list.component";
import {PersonPageComponent} from "./components/person-page/person-page.component";

export const routes: Routes = [
    {
        path: '',
        component: PersonsListComponent
    },
    {
        path: 'id/:id',
        component: PersonPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule {
}
