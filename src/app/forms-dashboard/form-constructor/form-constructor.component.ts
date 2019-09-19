import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.scss']
})

export class FormConstructorComponent implements OnInit {
  mongoId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.setFormId();
  }

  setFormId() {
    this.route.params.subscribe(params => {
      this.mongoId = params.mongo_id;
    });
    console.log(this.mongoId);
  }
}
