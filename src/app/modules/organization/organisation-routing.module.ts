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
    {
        path: 'data-collection',
        loadChildren: '../data-collection/data-collection.module#DataCollectionModule',
        data: { preload: true},
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganisationRoutingModule {
}
