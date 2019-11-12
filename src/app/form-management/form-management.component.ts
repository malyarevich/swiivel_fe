import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormModel } from '@models/data-collection/form.model';

import { FormManagementDataSource } from '@app/form-management/form-management.datasource';
import { FormManagementService } from '@app/form-management/form-management.service';
import { CheckService } from '@app/services/check.service';

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss'],
})
export class FormManagementComponent implements OnInit {
  public form: FormModel;

  public tabsArray = ['Submissions', 'Log'];
  public activeTab = this.tabsArray[0];
  public activeIdForm: string;
  public dataSource: FormManagementDataSource = new FormManagementDataSource(this.formManagementService);
  public showSpinner = false;

  constructor(
    private checkService: CheckService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    public formManagementService: FormManagementService,
  ) {
    this.activeIdForm = this.route.snapshot.paramMap.get('id');

    if (this.router.getCurrentNavigation().extras.state &&
      this.router.getCurrentNavigation().extras.state.form) {
      this.form = this.router.getCurrentNavigation().extras.state.form;
    }
  }

  ngOnInit(): void {
    this.dataSource.uploadDocument(this.activeIdForm).subscribe();
    this.dataSource.$loading.subscribe((loading: boolean) => {
      this.showSpinner = loading;
    });
    this.dataSource.getDocument().subscribe((data) => {
      if (!this.router.getCurrentNavigation() && !this.checkService.isEmptyObject(data)) {
        this.form = data;
        this.cdr.detectChanges();
      }
    });
  }

  backPageClick(): void {
    this.router.navigate(['/forms-dashboard']);
  }
}
