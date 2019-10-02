import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormCreatorService } from '@app/form-creator/form-creator.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sw-form-creator-workarea-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class WorkareaIntroComponent implements OnInit, OnDestroy {

  packetIntroduction = {
    content: '',
    sectionName: 'Packet Introduction',
    sectionWidth: 'full'
  }
  textareaControl: FormControl = new FormControl(null, { updateOn: 'blur' });

  private destroed$ = new Subject();

  constructor(
    private formCreatorService: FormCreatorService,
    private cdr: ChangeDetectorRef
  ) {
    this.textareaControl.valueChanges.pipe(
      takeUntil(this.destroed$)
    ).subscribe(value => {
      this.setIntroContent(value);
    });
    this.formCreatorService.formTemplate$.pipe(
      takeUntil(this.destroed$)
    ).subscribe(formTemplate => {
      if (formTemplate && formTemplate.packetIntroduction && this.packetIntroduction !== formTemplate.packetIntroduction) {
        this.packetIntroduction = formTemplate.packetIntroduction;
        this.textareaControl.setValue(formTemplate.packetIntroduction.content);
        this.cdr.markForCheck();
      }
    });
  }

  ngOnInit() {
  }

  setIntroContent(value: string) {
    this.packetIntroduction.content = value;
    this.formCreatorService.formTemplate = Object.assign(this.formCreatorService.formTemplate, { packetIntroduction: this.packetIntroduction })
  }

  ngOnDestroy(): void {
    this.destroed$.next();
  }

}
