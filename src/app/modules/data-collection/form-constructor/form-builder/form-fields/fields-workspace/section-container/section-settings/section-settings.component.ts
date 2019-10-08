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
        isSupportText: s.options ? s.options.isSupportText : null,
        isDirectlyDisplayed: s.options ? s.options.isDirectlyDisplayed || null : null,
        isSupportTextData: s.options ? s.options.isSupportTextData || null : null
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
      isSupportText: [false],
      isSupportTextData: [null, /* { updateOn: 'blur' } */],
      isDirectlyDisplayed: [null]
    });
    this.sectionForm.valueChanges.subscribe(v => {
      this.updateSection(v);
    })
  }

  updateSection(formValue: any):void {
    if (formValue) {
      if (!this.section.options) { this.section.options = {}; }
      Object.assign(this.section.options, formValue)
    }
  }

}
