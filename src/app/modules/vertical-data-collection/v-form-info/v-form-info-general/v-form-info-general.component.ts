import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormSql} from "../../model/form.model";

@Component({
  selector: 'app-v-form-info-general',
  templateUrl: './v-form-info-general.component.html',
  styleUrls: ['./v-form-info-general.component.css']
})
export class VFormInfoGeneralComponent implements OnInit {
  @Input() form: FormSql;
  @Output() updatedFormInfoEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  resetFormSelected()
  {
    this.updatedFormInfoEmitter.emit();
  }

  // TODO Create directive ConvertData for Safari browser
  convertDate(date) {
    return date.replace(/\s/g, "T");
  }

}
