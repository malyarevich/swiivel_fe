import { 
    ChangeDetectionStrategy, Component, OnInit,
    Input,
} from '@angular/core';
import { Form } from '@models/data-collection/form.model'

@Component({
    selector: 'sw-form-management',
    templateUrl: './form-management.component.html',
    styleUrls: ['./form-management.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormManagementComponent implements OnInit {
    @Input() form: Form;

    activeTab: string = 'submissions';

    constructor() {}

    ngOnInit() {}
}
