import {Component, Input, OnInit} from '@angular/core';
import {FormSql} from "../../model/form.model";

@Component({
  selector: 'app-v-form-info-general',
  templateUrl: './v-form-info-general.component.html',
  styleUrls: ['./v-form-info-general.component.css']
})
export class VFormInfoGeneralComponent implements OnInit {
  @Input() form: FormSql;

  constructor() {
  }

  ngOnInit() {
  }

  // TODO Create directive ConvertData for Safari browser
  convertDate(date) {
    return date.replace(/\s/g, "T");
  }

}
