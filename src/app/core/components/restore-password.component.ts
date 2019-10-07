import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInOutVoid } from '@app/core/animations';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss'],
  animations: [fadeInOutVoid()]
})
export class RestorePasswordComponent implements OnInit {
  public form: FormGroup;
  private _stage = 0;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
        email: ['', [Validators.required]],
    });
  }

  set stage(stageNum: number) {
    this._stage = stageNum;
  }

  get stage() {
    return this._stage;
  }

  ngOnInit() {
  }

}
