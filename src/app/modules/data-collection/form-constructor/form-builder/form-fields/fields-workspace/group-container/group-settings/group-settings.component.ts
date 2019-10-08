import { Component, Input, OnInit } from "@angular/core";
import { Form } from "src/app/models/data-collection/form.model";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: "app-group-settings",
  templateUrl: "./group-settings.component.html",
  styleUrls: ["./group-settings.component.scss"]
})
export class GroupSettingsComponent {

  groupForm: FormGroup;

  displayOptions = ['Directly Displayed', 'Pop Up'];
  repeatOptions = ['For Each Student in Family', 'Other'];

  private group: any;

  @Input()
  set inputGroup(inputGroup) {
    if (inputGroup) { this.setGroup(inputGroup); }
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.groupForm = this.fb.group({
      required: [false],
      hideLabel: [false],
      isSupportText: [false],
      hint: [null],
      displayStrategy: [null],
      repeatGroup: [false],
      repeatStrategy: [null],
      prefill: [null],
      minRepetitions: [null],
      maxRepetitions: [null],
      numOfRepetitions: [null]
    });
    this.groupForm.valueChanges.subscribe((v) => {
      this.updateGroupOptions(v);
    });
  }

  private setGroup(gr): void {
    this.group = gr;
    this.groupForm.patchValue({
      required: gr.options ? gr.options.required || null : null,
      hideLabel: gr.options ? gr.options.hideLabel || null : null,
      isSupportText: gr.options ? gr.options.isSupportText || false : false,
      hint: gr.options ? gr.options.hint || null : null,
      isDirectlyDisplayed: gr.options ? gr.options.isDirectlyDisplayed ? 'Directly Displayed' : 'Pop Up' : null,
      repeatGroup: gr.options ? gr.options.repeatGroup || false : false,
      repeatStrategy: gr.options ? gr.options.repeatStrategy || null : null,
      prefill: gr.options ? gr.options.prefill || null : false,
      minRepetitions: gr.options ? gr.options.minRepetitions || null : null,
      maxRepetitions: gr.options ? gr.options.maxRepetitions || null : null,
      numOfRepetitions: gr.options ? gr.options.numOfRepetitions || null : null,
    });
  }

  private updateGroupOptions(formVal: any): void {
    Object.assign(this.group.options, formVal);
  }

}
