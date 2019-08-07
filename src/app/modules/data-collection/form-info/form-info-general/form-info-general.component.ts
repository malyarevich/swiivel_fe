import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormSql} from "../../model/form.model";

@Component({
  selector: 'app-form-info-general',
  templateUrl: './form-info-general.component.html',
  styleUrls: ['./form-info-general.component.css']
})
export class FormInfoGeneralComponent implements OnInit {
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
