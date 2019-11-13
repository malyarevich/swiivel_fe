import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
        showDefaultValue: !!obj.showDefaultValue,
        default: obj.default || '',
        askForConfirm: !!obj.askForConfirm
      });
    }
  }
  @Output() fieldSettings = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      showDefaultValue: new FormControl(false),
      default: new FormControl('', { updateOn: 'blur'}),
      askForConfirm: new FormControl(false),
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      this.fieldSettings.emit(v);
    });
  }

}
