import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FormService} from '../../services/form.service';
import {TEMPLATE_STATUS} from '@enums/template-status';
import {FormSql} from '@models/data-collection/form.model';
import {uniq} from 'lodash';

@Component({
  selector: '[app-form-table-tbody]',
  templateUrl: './form-table-tbody.component.html',
  styleUrls: ['./form-table-tbody.component.scss']
})
export class FormTableTbodyComponent implements OnInit {
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
  formsSelectedIndexes: number[] = [];

  constructor(private vFormService: FormService) {
  }

  ngOnInit() {
  }

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

  addSelectedIndexes(event, i: number) {
    if (event.shiftKey) {
      const lastIndex = this.formsSelectedIndexes[this.formsSelectedIndexes.length - 1];
      if (lastIndex < i) {
        for (let j = lastIndex + 1; j <= i; j++) {
          this.formsSelectedIndexes.push(j);
        }
      }
      if (lastIndex > i) {
        for (let k = lastIndex - 1; k >= i; k--) {
          this.formsSelectedIndexes.push(k);
        }
      }
      this.formsSelectedIndexes = uniq(this.formsSelectedIndexes);
    } else {
      const index = this.formsSelectedIndexes.indexOf(i);
      if (index === -1) {
        this.formsSelectedIndexes.push(i);
      } else {
        this.formsSelectedIndexes.splice(index, 1);
      }
    }
    this.addSelectedIdsEmitter.emit(this.formsSelectedIndexes);
  }

  isSelectedRow(id: number) {
    if (this.formsSelectedIds.length) return this.formsSelectedIds.find(item => item === id);
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
