import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormSql} from '../../../../../models/data-collection/form.model';
import {FormService} from '../../../services/form.service';
import {Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-form-general-way-create',
  templateUrl: './form-general-way-create.component.html',
  styleUrls: ['./form-general-way-create.component.scss', '../form-general-information.component.css']
})
export class FormGeneralWayCreateComponent implements OnInit, OnDestroy {
  @Output() duplicatedFormIdEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() typeCreateEmitter: EventEmitter<any> = new EventEmitter<any>();

  formTypeCreation = 0;
  searchText: string;
  formsDuplicate: FormSql[];
  formDuplicateId = '';
  getFormsSubscription: Subscription;

  constructor(private formService: FormService,) {
  }

  ngOnInit() {
    this.getAllForm();
  }

  getAllForm(): void {
    this.getFormsSubscription = this.formService.getFormsList().subscribe(forms => {
      this.formsDuplicate = forms.data;
    });
  }

  setTypeCreation(type: number) {
    this.formTypeCreation = type;
    this.typeCreateEmitter.emit(this.formTypeCreation);
  }

  useDuplicate(id: string) {
    this.formDuplicateId = id;
    this.duplicatedFormIdEmitter.emit(this.formDuplicateId);
  }

  ngOnDestroy() {
    this.getFormsSubscription.unsubscribe();
  }
}
