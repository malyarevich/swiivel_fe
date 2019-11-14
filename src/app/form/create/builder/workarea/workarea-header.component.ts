import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-form-creator-workarea-header',
  templateUrl: './workarea-header.component.html',
  styleUrls: ['./workarea-header.component.scss']
})

export class WorkareaHeaderComponent implements OnInit {
  @Input() sectionName ? = '';
  @Output() changeContentDisplay = new EventEmitter();
  public widthOption = ['4 columns', '3 columns', '2 columns', '1 column'].map(t => ({ title: t }));
  public isContentShown = true;
  public icons = IconsEnum;
  public form: FormGroup;
  public popupDisplay = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sectionName: new FormControl(null, Validators.required),
      sectionWidth: new FormControl([]),
    });
  }

  ngOnInit() {
    this.form.controls.sectionName.setValue(this.sectionName);
  }

  changeIsContentShown(): void {
    this.isContentShown = !this.isContentShown;
    this.changeContentDisplay.emit(this.isContentShown);
  }

  changePopupDisplay(evt: boolean): void {
    this.popupDisplay = evt;
  }

}
