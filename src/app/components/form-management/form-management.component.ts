import { 
    ChangeDetectionStrategy, Component, OnInit,
    Input, Output, EventEmitter,
} from '@angular/core';
import { Form } from '@models/data-collection/form.model'
import { StatusColors } from './form-management-submissions/form-management-submissions.models';
import { IconsEnum } from '@shared/icons.enum';

@Component({
    selector: 'sw-form-management',
    templateUrl: './form-management.component.html',
    styleUrls: ['./form-management.component.scss'],
})
export class FormManagementComponent implements OnInit {
    @Input() form: Form;
    @Input() status: string;
    @Input() statusColors: StatusColors;
    @Input() statusesTitles: Object;
    @Input() unassignedDocuments: number;

    @Output() copyLink = new EventEmitter<any>();
    @Output() exportPDF = new EventEmitter<any>();
    @Output() inviteAccounts = new EventEmitter<any>();

    activeTab: string = 'submissions';
    statusesFriendlyNames: string[];
    icons = IconsEnum;

    constructor() {}

    ngOnInit() {}

    getStatusColor(status: string): string {
        if (!this.statusColors) return '';
        return this.statusColors.statusColors.get(status) || this.statusColors.defaultColor;
    }

    getStatusTitle(status: string): string {
        if (!this.statusColors) return '';
        return this.statusesTitles[status];
    }
}
