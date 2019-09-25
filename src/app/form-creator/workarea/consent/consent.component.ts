import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColorsEnum } from '@shared/colors.enum';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-form-creator-workarea-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})

export class WorkareaConsentComponent {
  public form: FormGroup;
  public icons = IconsEnum;
  public colors = ColorsEnum;
  public isShown = true;
  public textarea = {
    rows: 5,
    cols: undefined,
    editable: true
  };

  constructor(private fb: FormBuilder ) {
    this.form = this.fb.group({
      sectionName: new FormControl('Paren Consent', Validators.required),
      sectionWidth: new FormControl('4 columns'),
    });
  }

  changeIsShown(): void {
    this.isShown = !this.isShown;
  }

}
