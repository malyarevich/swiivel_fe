import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInOutVoid } from '@core/animations';

@Component({
  selector: 'sw-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss'],
  animations: [fadeInOutVoid()]
})
export class RestorePasswordComponent implements OnInit {
  public form: FormGroup;
  private stageProp = 0;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
        email: ['', [Validators.required]],
    });
  }

  set stage(stageNum: number) {
    this.stageProp = stageNum;
  }

  get stage() {
    return this.stageProp;
  }

  ngOnInit() {
  }

}
