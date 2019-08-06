import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VFormService } from '../../services/v-form.service';
import { TEMPLATE_STATUS } from '../../../../enums/template-status';
import {FormSql} from '../../../../models/vertical-data-collection/form.model';

@Component({
  selector: '[app-v-form-table-tbody]',
  templateUrl: './v-form-table-tbody.component.html',
  styleUrls: ['./v-form-table-tbody.component.scss']
})
export class VFormTableTbodyComponent implements OnInit {
  @Input() forms: FormSql[];
  @Input() formSelected: number;
  @Input() templateStatuses: any;
  @Input() changedStatuses: any;
  @Input() formsSelectedIds: number[];

  @Output() addSelectedIdsEmitter: any = new EventEmitter();
  @Output() setFormSelectedEmitter: any = new EventEmitter();
  @Output() resetFormSelectedEmitter: any = new EventEmitter();
  @Output() getAllFormEmitter: any = new EventEmitter();

  checkedRows: Array<any> = [];
  constructor(private vFormService: VFormService) {}

  ngOnInit() {}

  getStringPublishSettings(publish_settings: any) {
    if (publish_settings == undefined) {
      return '';
    }
    return publish_settings.state.settings.online === false
      ? publish_settings.state.settings.pdf === false
        ? ''
        : 'Paper'
      : publish_settings.state.settings.pdf === false
      ? 'Online'
      : 'Online, Paper';
  }

  // TODO: Create directive ConvertData for Safari browser
  convertDate(date) {
    return date.replace(/\s/g, 'T');
  }

  getClassByStatus(status) {
    return {
      'app-btn-status-active': status === TEMPLATE_STATUS.STATUS_ACTIVE,
      'app-btn-status-archived': status === TEMPLATE_STATUS.STATUS_ARCHIVED,
      'app-btn-status-draft': status === TEMPLATE_STATUS.STATUS_DRAFT,
      'app-btn-status-review': status === TEMPLATE_STATUS.STATUS_REVIEW,
      'app-btn-status-closed': status === TEMPLATE_STATUS.STATUS_CLOSED,
    };
  }

  addSelectedIds(id: number) {
    this.addSelectedIdsEmitter.emit(id);
  }

  isCheckedRow(id: number) {
    return this.formsSelectedIds.find(item => item === id);
  }

  setFormSelected(id: number) {
    this.setFormSelectedEmitter.emit(id);
  }

  resetFormSelected() {
    this.resetFormSelectedEmitter.emit();
    this.checkedRows = [];
  }

  changeStatus(id, status) {
    this.vFormService.changeStatus(id, status).subscribe(res => {
      this.getAllFormEmitter.emit();
    });
  }

  getUserName(permission) {
    return permission.user ? permission.user.full_name : '';
  }

  getOwnerFullName(item) {
    return item.owner ? item.owner.full_name : '';
  }

  getOwnerRoleName(item) {
    return item.owner ? item.owner.role.role_name : '';
  }
}
