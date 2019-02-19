import {Component, OnDestroy, OnInit} from '@angular/core';
import {Field} from '../model/field';
import {FormService} from '../form.service';
import {FormState} from '../reducers/forms/form.reducer';
import {select, Store} from '@ngrx/store';
import {AddForm, DeleteForm, EditForm, RequestForm, ClearEditForm} from '../reducers/forms/form.actions';
import {Observable} from 'rxjs';
import {Form} from '../reducers/forms/form.model';
import {selectAllForms, selectFormById} from '../reducers/forms/form.selectors';
import {tap, first} from 'rxjs/operators';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  forms$: Observable<Form[]>;
  formSelected;

  constructor(private formService: FormService, private formStore: Store<FormState>) {
  }

  ngOnInit() {
    this.formStore.dispatch(new RequestForm());
    this.forms$ = this.formStore.pipe(
      select(selectAllForms)
    );
    this.formStore.dispatch(new ClearEditForm());


  }


  removeForm(id: string) {

    this.formStore.dispatch(new DeleteForm({id}));
  }

  editForm(id: string) {

    this.formStore.dispatch(new EditForm({id}));

  }

  addForm(){
    const id: string = '0';
    this.formStore.dispatch(new AddForm());
    this.formStore.dispatch(new EditForm({id}));


  }

}
