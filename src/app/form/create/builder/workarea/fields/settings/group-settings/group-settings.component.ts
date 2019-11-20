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
        showHint: !!obj.showHint,
        hint: obj.hint || null,
        displayStrategy: obj.displayStrategy,
        repeatGroup: obj.repeatGroup,
        repeatStrategy: obj.repeatStrategy,
        prefill: obj.prefill,
        minRep: obj.minRep || null,
        maxRep: obj.maxRep || null,
        numOfRep: obj.numOfRep || null
      });
    }
  }
  @Output() fieldSettings = new EventEmitter();
  @Output() setChildren = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      required: new FormControl(false),
      hideLabel: new FormControl(false),
      showHint: new FormControl(false),
      hint: new FormControl('', {updateOn: 'blur'}),
      displayStrategy: new FormControl(null),
      repeatGroup: new FormControl(false),
      repeatStrategy: new FormControl(null),
      prefill: new FormControl(false),
      minRep: new FormControl(null, {updateOn: 'blur'}),
      maxRep: new FormControl(null, {updateOn: 'blur'}),
      numOfRep: new FormControl(null, {updateOn: 'blur'})
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

    this.form.get('required').valueChanges.subscribe((value) => {
      if (value === true) {
        this.setChildren.emit({key: 'required', value: true});
      }
    });
    this.form.get('hideLabel').valueChanges.subscribe((value) => {
      if (value === true) {
        this.setChildren.emit({key: 'hideLabel', value: true});
      }
    })

    this.form.valueChanges.subscribe(v => {
      this.prepareForm(v);
    });
  }

  prepareForm(value) {
    this.fieldSettings.emit(value);
  }

}
