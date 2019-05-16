import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FamilyRoutingModule} from "./family-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FamiliesListComponent } from './families-list/families-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FamilyPageHeaderComponent } from './family-page-header/family-page-header.component';
import { FamilyProfileComponent } from './family-profile/family-profile.component';
import { FamilyProfileInfoComponent } from './family-profile/family-profile-info/family-profile-info.component';
import { FamilyViewComponent } from './family-profile/family-view/family-view.component';
import { FamilyCreateModalComponent } from './families-list/family-create-modal/family-create-modal.component';
import { FamilyViewNavComponent } from './family-profile/family-view/family-view-nav/family-view-nav.component';
import { FamilyViewGeneralComponent } from './family-profile/family-view/family-view-general/family-view-general.component';
import { FamilyViewGeneralNavComponent } from './family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component';
import { FamilyPersonCardComponent } from './family-profile/family-view/family-view-general/family-person-card/family-person-card.component';
import {FamilyService} from "./services/family.service";

@NgModule({
  declarations: [FamiliesListComponent, FamilyPageHeaderComponent, FamilyProfileComponent, FamilyProfileInfoComponent, FamilyViewComponent, FamilyCreateModalComponent, FamilyViewNavComponent, FamilyViewGeneralComponent, FamilyViewGeneralNavComponent, FamilyPersonCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FamilyRoutingModule,
    NgbModule,
  ],
  providers: [FamilyService]
})
export class FamilyModule { }
