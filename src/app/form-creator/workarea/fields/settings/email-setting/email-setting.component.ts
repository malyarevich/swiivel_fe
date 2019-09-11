import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { emailValidator } from '@app/core/validators';

@Component({
  selector: 'sw-email-setting',
  templateUrl: './email-setting.component.html',
  styleUrls: ['./email-setting.component.scss']
})
export class EmailSettingComponent implements OnInit {

  showDefaultValue: boolean = false;
  form: FormGroup;
  
  @Input()
  set settings(obj: any) {
    if (obj) {
      if (!!obj['default'] === true) this.showDefaultValue = true;
      this.form.patchValue({
        defaultValue: obj['default'] || '',
        askForConfirm: !!obj['askForConfirm']
      });
    }
  }
  @Output() fieldSettings = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      defaultValue: new FormControl('', emailValidator()),
      askForConfirm: new FormControl(false),
    });
    this.form.valueChanges.subscribe(v => {
      this.fieldSettings.emit(v);
    })
  }

  get defaultValue() {
    return this.form.get('defaultValue');
  }

  get askForConfirm() {
    return this.form.get('askForConfirm');
  }

}
