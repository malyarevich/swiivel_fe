import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-online-form-view',
  templateUrl: './online-form-view.component.html',
  styleUrls: ['./online-form-view.component.css']
})
export class OnlineFormViewComponent implements OnInit {

  formId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.formId = this.route.snapshot.paramMap.get('id');
  }

}
