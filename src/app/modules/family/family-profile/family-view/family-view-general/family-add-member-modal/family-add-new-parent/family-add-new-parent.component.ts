import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Family} from "../../../../../../../models/family/family.model";
import {FamilyPersonService} from "../../../../../../../services/family/family-person.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-family-add-new-parent',
  templateUrl: './family-add-new-parent.component.html',
  styleUrls: ['./family-add-new-parent.component.css']
})
export class FamilyAddNewParentComponent implements OnInit {
  @Output() closeModalAddFamilyMember: EventEmitter<any> = new EventEmitter<any>();
  @Input() family: Family;
  @Input() role: string;

  familyParentForm: FormGroup;

  constructor(private familyPersonService: FamilyPersonService,
              private fb: FormBuilder,) {
    this.initFamilyNewPersonForm();
  }

  ngOnInit() {
  }

  initFamilyNewPersonForm() {
    this.familyParentForm = this.fb.group({
      // role: [this.roles[0], Validators.required],
    });
  }

  addFamilyParent() {
    console.log('sdsd');
    this.onCloseAddFamilyMemberModal();
  }

  onCloseAddFamilyMemberModal() {
    this.closeModalAddFamilyMember.emit(true);
  }
}
