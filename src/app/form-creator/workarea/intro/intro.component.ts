import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormCreatorService } from '@app/form-creator/form-creator.service';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'sw-form-creator-workarea-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class WorkareaIntroComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private destroyed$ = new Subject();

  constructor(
    private formCreatorService: FormCreatorService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {


  }

  ngOnInit() {
    this.formCreatorService.form$.pipe(
      takeUntil(this.destroyed$),
      filter(form => !!form),
    ).subscribe(form => {
      this.form = form.get('packetIntroduction') || this.fb.group({
        content: ['',],
        sectionName: ['Packet Introduction'],
        sectionWidth: ['full']
      });
      this.form.get('content').valueChanges.subscribe(console.log);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
