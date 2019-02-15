import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard.component';
import {PersonsListComponent} from "./components/person/persons-list/persons-list.component";

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'persons',
        component: PersonsListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
