import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FamilyRoutingModule} from "./family-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FamiliesListComponent } from './families-list/families-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FamilyPageHeaderComponent } from './family-page-header/family-page-header.component';
import { FamilyProfileComponent } from './family-profile/family-profile.component';

@NgModule({
  declarations: [FamiliesListComponent, FamilyPageHeaderComponent, FamilyProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FamilyRoutingModule,
    NgbModule,
  ]
})
export class FamilyModule { }
