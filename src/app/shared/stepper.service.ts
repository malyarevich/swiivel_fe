import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StepperService {
  private stepperSubject$: BehaviorSubject<string> = new BehaviorSubject(null);

  set stepper(step: string) {
    if (step === 'next' || step === 'prev') this.stepperSubject$.next(step);
  }
  get stepper$() {
    return this.stepperSubject$.asObservable();
  }
}
