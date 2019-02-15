import {Component, Input, OnInit} from '@angular/core';
import {FormService} from '../../form.service';
import {FieldState} from '../../reducers/field/field.reducer';
import { Store} from '@ngrx/store';
import {EditField, UpdateField} from '../../reducers/field/field.actions';
import {Field} from '../../reducers/field/field.model';
import {selectEditedField} from '../../reducers/field/field.selector';
import {Update} from '@ngrx/entity';
import {Form} from '../../reducers/forms/form.model';
import {UpdateForm} from '../../reducers/forms/form.actions';

@Component({
  selector: 'app-fields-settings',
  templateUrl: './fields-settings.component.html',
  styleUrls: ['./fields-settings.component.css']
})
export class FieldsSettingsComponent implements OnInit {

 field: Field;
  name='';
  constructor(private formService: FormService, private fieldState$: Store<FieldState>) {

    this.formService.emitSettings.subscribe(
      ()=>{
        this.loadFields();
      }
    );
  }

  ngOnInit() {


  }

  cancelEdit() {
    this.fieldState$.dispatch(new EditField({id:''}));
    //this.formService.clearId();
  }


  saveField(){
    const updatedField: Update<Field>={
      id: this.field._id,
      changes: {name: this.name}
    };
    this.fieldState$.dispatch(new UpdateField({field: updatedField}));
    this.formService.doFieldChanges();


    this.fieldState$.dispatch(new EditField({id:''}));
  }




  loadFields(){
    this.fieldState$
      .select(selectEditedField)
      .subscribe(field=>{
        this.field=field;
        this.name = field.name;
      })
      .unsubscribe();
  }
}
