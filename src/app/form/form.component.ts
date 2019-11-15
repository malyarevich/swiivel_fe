import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormService } from "./form.service";
import { Subject, BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "sw-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  isFormHasId$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: FormService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroyed$)).subscribe(params => {
      const formId = params.get("formId");

      let loadFormObservable = this.formService.loadForm(formId);

      if (loadFormObservable) {
        loadFormObservable.pipe(takeUntil(this.destroyed$)).subscribe(data => {
          // console.log("form.data", data);
          if (data._id) {
            this.formService.isFormHasId = true;
          } else {
            this.formService.isFormHasId = false;
            this.formService.form.valueChanges.subscribe(value => {
              if (value["_id"]) {
                this.formService.isFormHasId = value && value["_id"] !== "new";
              }
            });
          }
        });
      }

      if (formId === "new") {
        this.formService.form.valueChanges.subscribe(value => {
          if (value["_id"]) {
            this.formService.isFormHasId =
              value["_id"] && value["_id"] !== "new";
          }
        });
      }
    });

    this.isFormHasId$ = this.formService.isFormHasIdSubject;
  }

  logout() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
