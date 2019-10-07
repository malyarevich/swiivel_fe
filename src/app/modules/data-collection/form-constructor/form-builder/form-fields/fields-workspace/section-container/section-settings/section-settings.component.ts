import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Field} from '../../../../../../model/field.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section-settings',
  templateUrl: './section-settings.component.html',
  styleUrls: ['./section-settings.component.scss']
})
export class SectionSettingsComponent {
  
  private _section: Field; 

  public displayOptions = ['Directly Displayed', 'Pop Up'];
  public sectionForm: FormGroup;

  @Input() 
  set section(s: Field) {
    if (s) {
      this._section = s;
      this.sectionForm.patchValue({
        showHint: s.options.isSupportText,
        isDirectlyDisplayed: s.options.isDirectlyDisplayed ? 'Directly Displayed' : 'Pop Up',
        hint: s.options.isSupportTextData || null
      });
    }
  }

  @Output() change: EventEmitter<Field> = new EventEmitter<Field>();

  get section(): Field {
    return this._section;
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.sectionForm = this.fb.group({
      showHint: [false],
      hint: [null, /* { updateOn: 'blur' } */],
      isDirectlyDisplayed: [null]
    });
    this.sectionForm.valueChanges.subscribe(v => {
      this.updateSection(v);
    })
  }

  updateSection(formValue: any):void {
    if (formValue) {
      this._section.options.isDirectlyDisplayed = formValue.isDirectlyDisplayed === 'Directly Displayed';
      this._section.options.isSupportText = formValue.showHint;
      this._section.options.isSupportTextData = formValue.hint;
    }
  }

}
