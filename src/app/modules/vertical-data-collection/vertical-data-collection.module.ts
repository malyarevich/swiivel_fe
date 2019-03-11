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
  declarations: [VFormConstructorComponent, VFormContainerComponent, VFormTableComponent],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ClarityModule,
    DragDropModule

  ],
  providers:[VFormService]
})
export class VerticalDataCollectionModule { }
