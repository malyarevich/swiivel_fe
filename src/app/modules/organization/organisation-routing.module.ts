import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from "./components/layout";
import {routes as personRoutes} from './modules/person';
import {routes as dashboardRoutes} from './modules/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: dashboardRoutes,
    },
    {
        path: 'persons',
        component: LayoutComponent,
        children: personRoutes,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganisationRoutingModule {
}
