import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormUtils} from "../../utils/form.utils";

@Component({
  selector: 'app-v-form-section',
  templateUrl: './v-form-section.component.html',
  styleUrls: ['./v-form-section.component.css']
})
export class VFormSectionComponent implements OnInit {
  formId: string;
  constructor(private formUtils: FormUtils,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.url.subscribe((urlPath) => {
      const url =  urlPath[urlPath.length - 1].path;
      this.formId = url!='v-form-constructor'?url:'';
    });

  }

}
