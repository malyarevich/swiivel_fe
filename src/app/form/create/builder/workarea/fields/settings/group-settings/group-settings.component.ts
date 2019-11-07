import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.scss']
})
export class GroupSettingsComponent implements OnInit {

  form: FormGroup;
  displayOptions = ['Directly Displayed', 'Pop Up'];
  repeatOptions = ['For Each Student in Family', 'Other'];

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.form.patchValue({
        required: obj.required,
        hideLabel: obj.hideLabel,
        showHint: !!obj.hint,
        hint: obj.hint || '',
        displayStrategy: obj.displayStrategy,
        repeatGroup: obj.repeatGroup,
        repeatStrategy: obj.repeatStrategy,
        prefill: obj.prefill,
        minRep: obj.minRep,
        maxRep: obj.maxRep,
        numOfRep: obj.numOfRep
      });
    }
  }
  @Output() fieldSettings = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      required: new FormControl(false),
      hideLabel: new FormControl(false),
      showHint: new FormControl(false),
      hint: new FormControl(''),
      displayStrategy: new FormControl(null),
      repeatGroup: new FormControl(false),
      repeatStrategy: new FormControl(null),
      prefill: new FormControl(false),
      minRep: new FormControl(),
      maxRep: new FormControl(),
      numOfRep: new FormControl()
    });
  }

  ngOnInit() {
    this.form.get('repeatGroup').valueChanges.subscribe(v => {
      if (v === false) {
        this.form.patchValue({
          repeatStrategy: null,
          prefill: false,
          minRep: null,
          maxRep: null,
          numOfRep: null
        });
      }
    });

    this.form.valueChanges.subscribe(v => {
      this.prepareForm(v);
    });
  }

  prepareForm(value) {
    delete value.showHint;
    this.fieldSettings.emit(value);
  }

}
