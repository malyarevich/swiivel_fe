import {Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {LoginRequestAction} from '../../../../store';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginFormComponent implements OnInit, OnDestroy {

  @Output() goToRestore = new EventEmitter<boolean>();
  public form: FormGroup;
  public componentDestroyed$: Subject<boolean> = new Subject<boolean>();
  public shape = 'eye';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly store$: Store<any>
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  changeField(): void {
    this.shape = this.shape === 'eye' ? 'eye-hide' : 'eye';
  }

  changeView(): void {
    this.goToRestore.emit(false);
  }

  logIn() {
    const {valid, value} = this.form;
    if (valid) {
      this.store$.dispatch(new LoginRequestAction(value));
    }
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.unsubscribe();
  }
}
