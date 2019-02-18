import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './modules/dashboard/components/dashboard.component';
import {LayoutComponent} from "./components/layout";
import {PersonRoutingModule} from "./modules/person/person-routing.module";
import { routes as personRoutes } from './modules/person/person-routing.module';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'persons',
        component: LayoutComponent,
        children: personRoutes,
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
