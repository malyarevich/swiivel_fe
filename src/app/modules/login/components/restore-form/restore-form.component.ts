import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { fadeInOutVoid } from '../../../../utils';

@Component({
  selector: 'app-restore-form',
  templateUrl: './restore-form.component.html',
  styleUrls: ['./restore-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOutVoid()]
})
export class RestoreFormComponent implements OnInit {
  public form: FormGroup;
  public submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public isOpen = true;

  @Output() goToLogin = new EventEmitter<boolean>();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
        email: ['', [Validators.required]],
    });
  }

  cancel (): void {
    this.isOpen = true;
    this.goToLogin.emit(true);
  }

  restore (): void {
    const {valid} = this.form;
    if (valid) {
      this.isOpen = !this.isOpen;
      this.submitBtnState = ClrLoadingState.LOADING;
    }
  }

  returnToMail (): void {
    this.isOpen = !this.isOpen;
  }

}
