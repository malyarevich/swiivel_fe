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
import { FamilyParentsCardComponent } from './family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component';
import {FamilyService} from "./services/family.service";
import { FamilyChildrenCardComponent } from './family-profile/family-view/family-view-general/family-children-card/family-children-card.component';
import { FamilyStudentsCardComponent } from './family-profile/family-view/family-view-general/family-students-card/family-students-card.component';
import { FamilyGrandparentsCardComponent } from './family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component';
import {SharedRedComponentsModule} from "../../shared/components/sharedRedComponents.module";
import { FamilyAddMemberModalComponent } from './family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component';
import {PersonService} from "../../services/person/person.service";
import {FamilyPersonService} from "./services/family-person.service";
import {HelperFamilyService} from "./services/helper-family.service";
import {LoaderService} from "../../services/loader/loader.service";

@NgModule({
  declarations: [FamiliesListComponent, FamilyPageHeaderComponent, FamilyProfileComponent, FamilyProfileInfoComponent, FamilyViewComponent, FamilyCreateModalComponent, FamilyViewNavComponent, FamilyViewGeneralComponent, FamilyViewGeneralNavComponent, FamilyParentsCardComponent, FamilyChildrenCardComponent, FamilyStudentsCardComponent, FamilyGrandparentsCardComponent, FamilyAddMemberModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FamilyRoutingModule,
    NgbModule,
    SharedRedComponentsModule,
  ],
  providers: [FamilyService, PersonService, FamilyPersonService, HelperFamilyService, LoaderService]
})
export class FamilyModule { }
