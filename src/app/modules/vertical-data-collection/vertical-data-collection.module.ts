import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VFormConstructorComponent } from './v-form-constructor/v-form-constructor.component';
import {RouterModule, Routes} from '@angular/router';
import {VFormService} from './v-form.service';
import {ClarityModule} from '@clr/angular';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { VFormContainerComponent } from './v-form-constructor/v-form-conteiner/v-form-container.component';
import {FormsModule} from '@angular/forms';
import { VFormTableComponent } from './v-form-table/v-form-table.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { VFormNavComponent } from './v-form-table/v-form-nav/v-form-nav.component';
import {VFormAccessComponent} from "./v-form-access-modal/v-form-access/v-form-access.component";
import {VFormAccessModalComponent} from "./v-form-access-modal/v-form-access-modal.component";

const routes: Routes = [
  {
    path: '',
    component: VFormTableComponent,
  },
  {
    path: 'v-form-constructor',
    component: VFormConstructorComponent,
  },
  {
    path: 'v-form-constructor/:id',
    component: VFormConstructorComponent,
  }



];

@NgModule({
  declarations: [
      VFormConstructorComponent,
      VFormContainerComponent,
      VFormTableComponent,
      VFormNavComponent,
      VFormAccessComponent,
      VFormAccessModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ClarityModule,
    DragDropModule,
      NgbModule

  ],
  providers:[VFormService]
})
export class VerticalDataCollectionModule { }
