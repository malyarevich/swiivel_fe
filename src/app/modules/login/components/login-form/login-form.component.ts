import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ClrLoadingState } from '@clr/angular';
import { Login, Effects } from '../../store';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public shape = 'eye';
  public submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  @Output() goToRestore = new EventEmitter<boolean>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<any>,
    private readonly effects: Effects,
    private readonly ch: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    this.effects.status$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        const {error} = res;
        const keys = Object.keys(error);
        keys.forEach((key) => {
            if (this.form.controls[key]) {
                this.form.controls[key].setErrors({'server': error[key] });
                this.form.controls[key].markAsTouched();
            }
        });
        this.submitBtnState = ClrLoadingState.DEFAULT;

        this.ch.markForCheck();
    });
  }

  changeField (): void {
    this.shape = this.shape === 'eye' ? 'eye-hide' : 'eye';
  }

  changeView (): void {
    this.goToRestore.emit(false);
  }

  logIn () {
      const {valid, value} = this.form;
      if (valid) {
          this.submitBtnState = ClrLoadingState.LOADING;
          this.store.dispatch(new Login(value));
      }
  }

  ngOnDestroy (): void {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
  }
}
