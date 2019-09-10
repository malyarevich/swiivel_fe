import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@core/api.service';
import { User } from '@models/auth';
import { AuthService } from '@core/auth.service';
import { first } from 'rxjs/operators';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  public form: FormGroup;
  public inputType = 'password';
  public iconPath = '/assets/images/password/';
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private auth: AuthService) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  get iconUrl() {
    const iconFile = this.inputType === 'password' ? 'eye_off.svg' : 'eye.svg';
    return this.iconPath + iconFile;
  }

  get iconText() {
    return this.inputType === 'password' ? 'Show password' : 'Hide password';
  }

  public changeField(event: Event) {
    if (event) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
    return false;
  }
  onSubmit(): void {
    if (this.form.valid) {
      this.api.login(this.form.value).pipe(first()).subscribe((user: User) => {
        if (user) {
          this.auth.setUser(user);
          this.router.navigate(['/']);
        }
      }, (error) => {
        console.error(error);
      });
    }
  }

  ngOnDestroy(): void {
  }
  ngOnInit() {
  }

}
