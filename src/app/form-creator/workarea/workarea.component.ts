import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormCreatorService } from '../form-creator.service';
import { StepperService } from '@app/shared/stepper.service';

@Component({
  selector: 'sw-form-creator-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaComponent implements OnInit {
  _workarea = 'default';

  constructor(private service: FormCreatorService, private cdr: ChangeDetectorRef, private stepperService: StepperService) {
  }

  ngOnInit() {
    this.service.section$.subscribe(section => {
      this._workarea = section;
      this.cdr.markForCheck();
    });
  }

  prevStep() {
    this.stepperService.stepper = 'prev';
  }

  nextStep() {
    this.stepperService.stepper = 'next';
  }

}
