import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth.service';
import { User } from '@models/auth';

@Component({
  selector: 'sw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public focusUsername: any = true;
  public form: FormGroup;
  public inputType = 'password';
  public iconText = 'Show password';
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  toggleInputType(event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    if (this.inputType === 'password') {
      this.inputType = 'text';
      this.iconText = 'Hide password';
    } else {
      this.inputType = 'password';
      this.iconText = 'Show password';
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const {username, password} = this.form.value;
      this.auth.login(username, password).then((user: User) => {
        if (user) {
          const redirect = this.auth.redirect;
          if (redirect) {
            this.auth.clearRedirect();
            this.router.navigateByUrl(redirect);
          } else {
            this.router.navigate(['/']);
          }
        }
      }, (error) => {
        if (error.error.status === 0) {
          this.form.get('password').setErrors({incorrect: error.error.errors}, {emitEvent: true});
          this.focusUsername = new Date();
          this.cdr.markForCheck();
          console.error(error.error.errors);
        }
      });
    }
  }

}
