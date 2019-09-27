import { Component, OnInit } from '@angular/core';
import { StepperService } from '@app/shared/stepper.service';
import { FormControl } from '@angular/forms';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'sw-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  buttonOptions = [
    {
      label: 'CREATE NEW FORM',
      value: 'new'
    },
    {
      label: 'DUPLICATE EXISTING',
      value: 'duplicate'
    }
  ];
  filter: FormControl = new FormControl(null);

  constructor(
    private stepperService: StepperService,
    private api: ApiService) {
    // this.api.getForms().subscribe(formsList => {
    //   console.log('Forms List',formsList);
    // })
    this.filter.valueChanges.subscribe(v => {
      console.log('Filter value', v);
    });
  }

  ngOnInit() {
  }

  prevStep() {
    this.stepperService.stepper = 'prev';
  }

  nextStep() {
    this.stepperService.stepper = 'next';
  }

}

