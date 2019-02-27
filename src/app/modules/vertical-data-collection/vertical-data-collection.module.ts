import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VFormConstructorComponent } from './v-form-constructor/v-form-constructor.component';
import {RouterModule, Routes} from '@angular/router';
import {VFormService} from './v-form.service';
import {ClarityModule} from '@clr/angular';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { VFormConteinerComponent } from './v-form-constructor/v-form-conteiner/v-form-conteiner.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: VFormConstructorComponent,
  },
  {
    path: ':id',
    component: VFormConstructorComponent,
  }



];

@NgModule({
  declarations: [VFormConstructorComponent, VFormConteinerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ClarityModule,
    DragDropModule

  ],
  providers:[VFormService]
})
export class VerticalDataCollectionModule { }
