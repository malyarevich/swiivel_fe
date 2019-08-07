import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormSql} from "../../model/form.model";
import {TEMPLATE_STATUS} from "../../../../enums/template-status";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-form-info-header',
  templateUrl: './form-info-header.component.html',
  styleUrls: ['./form-info-header.component.css']
})
export class FormInfoHeaderComponent implements OnInit {
  @Input() form: FormSql;
  @Output() updatedFormInfoEmitter = new EventEmitter();

  templateStatuses = TEMPLATE_STATUS;
  changedStatuses = [
    this.templateStatuses.STATUS_ACTIVE,
    this.templateStatuses.STATUS_ARCHIVED,
    this.templateStatuses.STATUS_DRAFT,
    this.templateStatuses.STATUS_REVIEW
  ];

  constructor(private vFormService: FormService) {
  }

  ngOnInit() {
  }

  getClassByStatus(status) {
    return {
      'app-btn-status-active': status === TEMPLATE_STATUS.STATUS_ACTIVE,
      'app-btn-status-archived': status === TEMPLATE_STATUS.STATUS_ARCHIVED,
      'app-btn-status-draft': status === TEMPLATE_STATUS.STATUS_DRAFT,
      'app-btn-status-review': status === TEMPLATE_STATUS.STATUS_REVIEW,
      'app-btn-status-closed': status === TEMPLATE_STATUS.STATUS_CLOSED,
    }
  }

  changeStatus(id, status) {
    this.vFormService.changeStatus(id, status).subscribe(res => {
      this.updatedFormInfoEmitter.emit();
    });
  }

}
