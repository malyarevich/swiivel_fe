import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-online-form',
  templateUrl: './online-form.component.html',
  styleUrls: ['./online-form.component.scss']
})

export class OnlineFormComponent implements OnInit {
  formId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.setFormId();
  }

  setFormId() {
    this.route.params.subscribe(params => {
      this.formId = params.mongo_id;
    });
  }
}
