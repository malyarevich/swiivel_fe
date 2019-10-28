import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormCreatorService } from '../form-creator.service';
import { StepperService } from '@app/shared/stepper.service';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'sw-form-creator-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkareaComponent implements OnInit {
  _workarea = 'default';

  constructor(
    private service: FormCreatorService,
    private cdr: ChangeDetectorRef,
    private stepperService: StepperService,
    private api: ApiService
  ) {
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
    this.api.updateFormTemplate(this.service.form.get('_id').value, this.service.form.value).subscribe(data => {
      // console.log('save ddata', data)
    });
    this.stepperService.stepper = 'next';
  }

}
