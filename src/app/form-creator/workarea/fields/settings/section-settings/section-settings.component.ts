import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-section-settings',
  templateUrl: './section-settings.component.html',
  styleUrls: ['./section-settings.component.scss']
})
export class SectionSettingsComponent implements OnInit {

  form: FormGroup;
  displayOptions = ['Directly Displayed', 'Pop Up'];

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.form.patchValue({
        showHint: !!obj.hint,
        hint: obj.hint || '',
        displayStrategy: obj.displayStrategy,
      });
    }
  }
  @Output() fieldSettings = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      showHint: new FormControl(false),
      hint: new FormControl(''),
      displayStrategy: new FormControl(null),
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      this.prepareForm(v);
    });
  }

  prepareForm(value) {
    delete value.showHint;
    this.fieldSettings.emit(value);
  }

}
