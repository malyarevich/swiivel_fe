import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FamilyRoutingModule} from "./family-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FamiliesListComponent} from './families-list/families-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FamilyPageHeaderComponent} from './family-page-header/family-page-header.component';
import {FamilyProfileComponent} from './family-profile/family-profile.component';
import {FamilyProfileInfoComponent} from './family-profile/family-profile-info/family-profile-info.component';
import {FamilyViewComponent} from './family-profile/family-view/family-view.component';
import {FamilyCreateModalComponent} from './families-list/family-create-modal/family-create-modal.component';
import {FamilyViewNavComponent} from './family-profile/family-view/family-view-nav/family-view-nav.component';
import {FamilyViewGeneralComponent} from './family-profile/family-view/family-view-general/family-view-general.component';
import {FamilyViewGeneralNavComponent} from './family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component';
import {FamilyParentsCardComponent} from './family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component';
import {FamilyService} from "../../services/family/family.service";
import {FamilyChildrenCardComponent} from './family-profile/family-view/family-view-general/family-children-card/family-children-card.component';
import {FamilyStudentsCardComponent} from './family-profile/family-view/family-view-general/family-students-card/family-students-card.component';
import {FamilyGrandparentsCardComponent} from './family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component';
import {SharedRedComponentsModule} from "../../shared/components/sharedRedComponents.module";
import {FamilyAddMemberModalComponent} from './family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component';
import {PersonService} from "../../services/person/person.service";
import {FamilyPersonService} from "../../services/family/family-person.service";
import {HelperFamilyService} from "../../services/family/helper-family.service";
import {LoaderService} from "../../services/loader/loader.service";
import {FamilyStudentsEducationComponent} from './family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component';
import {FamilyStudentsMedicalComponent} from './family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component';
import {FamilyStudentsSecondContactComponent} from './family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component';
import { FamilyProfileInfoViewComponent } from './family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component';
import { FamilyAddExistPersonComponent } from './family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component';
import { FamilyAddNewPersonComponent } from './family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component';
import { FamilyAddNewParentComponent } from './family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component';
import { FamilyAddNewChildComponent } from './family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component';
import { FamilyPersonCardContainerComponent } from './family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component';
import { FamilyRemoveMemberModalComponent } from './family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component';
import {FamilyQueryParamsService} from "../../services/family/family-query-params.service";
import { FamilyEditMemberModalComponent } from './family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component';
import { FamilyEditChildComponent } from './family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component';
import { FamilyEditParentComponent } from './family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component';
import { FamilyAddNewGrandparentsComponent } from './family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component';
import { FamilyEditGrandparentComponent } from './family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component';
import { FamilyViewDocumentsComponent } from './family-profile/family-view/family-view-documents/family-view-documents.component';
import { FamilyViewDocumentsNavComponent } from './family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component';
import { FamilyAddNewParentSiblingComponent } from './family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component';
import { FamilyParentSiblingCardComponent } from './family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component';
import { FamilyEditParentSiblingComponent } from './family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component';
import {GeneralDirectivesModule} from "../../utils/directives/general-directives.module";
import { FamilyStudentDocumentsComponent } from './family-profile/family-view/family-view-general/family-student-documents/family-student-documents.component';
import { FamilyEditDocumentComponent } from './family-profile/family-view/family-view-documents/family-edit-document/family-edit-document.component';
import { FamilyPersonContainerComponent } from './families-list/family-person-container/family-person-container.component';

@NgModule({
  declarations: [
    FamiliesListComponent,
    FamilyPageHeaderComponent,
    FamilyProfileComponent,
    FamilyProfileInfoComponent,
    FamilyViewComponent,
    FamilyCreateModalComponent,
    FamilyViewNavComponent,
    FamilyViewGeneralComponent,
    FamilyViewGeneralNavComponent,
    FamilyParentsCardComponent,
    FamilyChildrenCardComponent,
    FamilyStudentsCardComponent,
    FamilyGrandparentsCardComponent,
    FamilyAddMemberModalComponent,
    FamilyStudentsEducationComponent,
    FamilyStudentsMedicalComponent,
    FamilyStudentsSecondContactComponent,
    FamilyProfileInfoViewComponent,
    FamilyAddExistPersonComponent,
    FamilyAddNewPersonComponent,
    FamilyAddNewParentComponent,
    FamilyAddNewChildComponent,
    FamilyPersonCardContainerComponent,
    FamilyRemoveMemberModalComponent,
    FamilyEditMemberModalComponent,
    FamilyEditChildComponent,
    FamilyEditParentComponent,
    FamilyAddNewGrandparentsComponent,
    FamilyEditGrandparentComponent,
    FamilyViewDocumentsComponent,
    FamilyViewDocumentsNavComponent,
    FamilyAddNewParentSiblingComponent,
    FamilyParentSiblingCardComponent,
    FamilyEditParentSiblingComponent,
    FamilyStudentDocumentsComponent,
    FamilyEditDocumentComponent,
    FamilyPersonContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FamilyRoutingModule,
    NgbModule,
    SharedRedComponentsModule,
    GeneralDirectivesModule
  ],
  providers: [
    FamilyService,
    PersonService,
    FamilyPersonService,
    HelperFamilyService,
    LoaderService,
    FamilyQueryParamsService
  ]
})
export class FamilyModule {
}
