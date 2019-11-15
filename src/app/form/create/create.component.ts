import { Component, OnInit } from '@angular/core';
import { FormService } from '@app/form/form.service';

@Component({
  selector: 'sw-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  stage: number;
  constructor(private service: FormService) {
    this.service.stage$.subscribe(stage => this.stage = stage);
  }

  ngOnInit() {
  }

}
