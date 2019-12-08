import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormSendService } from '@app/form-send/form-send.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormService } from './form.service';

@Component({
  selector: 'sw-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  isFormHasId$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: FormService,
    private formSendService: FormSendService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroyed$)).subscribe(params => {
      const formId = params.get('formId');
      if (formId === 'new') {
        this.formService.isFormHasId = false;
        this.formService.formId = null;
      }
      const loadFormObservable = this.formService.loadForm(formId);
      if (formId !== 'new') {
        this.formSendService.initFormSend(formId);
      }

      if (loadFormObservable) {
        loadFormObservable.pipe(takeUntil(this.destroyed$)).subscribe(data => {
          if (data._id) {
            this.formService.isFormHasId = true;
            this.formService.formId = data._id;
          } else {
            this.formService.isFormHasId = false;
            this.formService.formId = null;
            this.formService.form.valueChanges.subscribe(value => {
              if (value["_id"]) {
                this.formService.isFormHasId = value && value["_id"] !== "new";
                this.formService.formId = value && value["_id"] !== "new" ? value["_id"] : null;
              }
            });
          }
        });
      }

    });

    this.isFormHasId$ = this.formService.isFormHasIdSubject;
  }

  logout() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  isRoute(path: string) {
    const url = this.router.url.split('/');
    return url.length >= 4 ? path === url[3] : false;
  }

  ngOnDestroy() {
    this.formService.form = null;
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
