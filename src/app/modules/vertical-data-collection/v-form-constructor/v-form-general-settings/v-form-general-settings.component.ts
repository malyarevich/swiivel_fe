import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormUtils} from "../../utils/form.utils";

@Component({
  selector: 'app-v-form-general-settings',
  templateUrl: './v-form-general-settings.component.html',
  styleUrls: ['./v-form-general-settings.component.css']
})
export class VFormGeneralSettingsComponent implements OnInit {
  formId: string;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formUtils: FormUtils) { }

  ngOnInit() {
    this.activatedRoute.parent.url.subscribe((urlPath) => {
      const url =  urlPath[urlPath.length - 1].path;
      this.formId = url!='v-form-constructor'?url:'';
    });

  }

}
