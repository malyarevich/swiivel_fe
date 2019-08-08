import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormAccessComponent} from './form-access/form-access.component';
import {FormAccessModalComponent} from './form-access-modal.component';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../../services/user/user.service';



@NgModule({
  declarations: [
    FormAccessComponent,
    FormAccessModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports: [FormAccessModalComponent],
  providers: [UserService]
})
export class FormAccessModalModule {}
