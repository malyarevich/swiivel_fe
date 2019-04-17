import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-v-form-info',
  templateUrl: './v-form-info.component.html',
  styleUrls: ['./v-form-info.component.css']
})
export class VFormInfoComponent implements OnInit {

  formMongoId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.setFormMongoId();
  }

  setFormMongoId() {
    this.route.params.subscribe((params) => {
      this.formMongoId = params['id'];
    });
  }

}
