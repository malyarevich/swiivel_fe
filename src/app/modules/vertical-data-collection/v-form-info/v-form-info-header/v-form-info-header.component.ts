import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormSql} from "../../model/form.model";
import {TEMPLATE_STATUS} from "../../../../enums/template-status";
import {VFormService} from "../../v-form.service";

@Component({
  selector: 'app-v-form-info-header',
  templateUrl: './v-form-info-header.component.html',
  styleUrls: ['./v-form-info-header.component.css']
})
export class VFormInfoHeaderComponent implements OnInit {
  @Input() form: FormSql;
  @Output() updatedFormInfoEmitter = new EventEmitter();

  statuses = [
    TEMPLATE_STATUS.STATUS_ACTIVE,
    TEMPLATE_STATUS.STATUS_ARCHIVED,
    TEMPLATE_STATUS.STATUS_DRAFT,
    TEMPLATE_STATUS.STATUS_REVIEW
  ];
  STATUS_REVIEW = TEMPLATE_STATUS.STATUS_REVIEW;

  constructor(private vFormService: VFormService) {
  }

  ngOnInit() {
  }

  getClassByStatus(status) {
    return {
      'app-btn-status-active': status === TEMPLATE_STATUS.STATUS_ACTIVE,
      'app-btn-status-archived': status === TEMPLATE_STATUS.STATUS_ARCHIVED,
      'app-btn-status-draft': status === TEMPLATE_STATUS.STATUS_DRAFT,
      'app-btn-status-review': status === TEMPLATE_STATUS.STATUS_REVIEW,
    }
  }

  changeStatus(id, status) {
    this.vFormService.changeStatus(id, status).subscribe(res => {
      this.updatedFormInfoEmitter.emit();
    });
  }

}
