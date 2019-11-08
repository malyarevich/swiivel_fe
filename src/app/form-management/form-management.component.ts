import {
  Component,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormModel } from '@models/data-collection/form.model';

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss'],
})
export class FormManagementComponent {
  public form: FormModel;

  public tabsArray = ['Submissions', 'Log'];
  public activeTab = this.tabsArray[0];
  public activeIdForm: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.form) {
      this.form = this.router.getCurrentNavigation().extras.state.form;
    }
    this.activeIdForm = this.route.snapshot.paramMap.get('id');
  }

  backPageClick(): void {
    this.router.navigate(['/forms-dashboard']);
  }
}
