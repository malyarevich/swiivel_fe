import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from './form.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sw-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject();
  public stage = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: FormService
  ) {
    this.route.paramMap.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(params => {
      if (params.get('formId') !== 'new') this.stage = 1;
      this.formService.loadForm(params.get('formId'));
      this.formService.stage$.subscribe(stage => {
        this.stage = stage;
      })
    });
  }

  ngOnInit() {
  }

  logout() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
