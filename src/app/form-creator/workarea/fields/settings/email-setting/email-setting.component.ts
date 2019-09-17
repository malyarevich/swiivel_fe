import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { emailValidator } from '@app/core/validators';

@Component({
  selector: 'sw-email-setting',
  templateUrl: './email-setting.component.html',
  styleUrls: ['./email-setting.component.scss']
})
export class EmailSettingComponent implements OnInit {

  form: FormGroup;
  
  @Input()
  set settings(obj: any) {
    if (obj) {
      this.form.patchValue({
        showDefaultValue: !!obj['defaultValue'],
        defaultValue: obj['defaultValue'] || '',
        askForConfirm: !!obj['askForConfirm']
      });
    }
  }
  @Output() fieldSettings = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      showDefaultValue: new FormControl(false),
      defaultValue: new FormControl('', { updateOn: 'blur'}),
      askForConfirm: new FormControl(false),
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      delete v.showDefaultValue;
      this.fieldSettings.emit(v);
    })
  }

}
