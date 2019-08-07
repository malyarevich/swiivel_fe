import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { FormService } from "../services/form.service";
import { FormSql } from "../model/form.model";

@Component({
  selector: "app-form-review",
  templateUrl: "./form-review.component.html",
  styleUrls: ["./form-review.component.scss"]
})
export class FormReviewComponent implements OnInit {
  @Input() form: FormSql;
  
  formId: string;
  activeTab: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private vFormService: FormService
  ) {}

  ngOnInit(): void {
    this.setFormId();
    this.getFormInfo();
  }

  setFormId() {
    this.route.params.subscribe(params => {
      this.formId = params["id"];
    });
  }

  getFormInfo() {
    this.vFormService.getOneFormSql(this.formId).subscribe(res => {
      this.form = res;
    });
  }

  // Form info table nav emitters
  setActiveTab(value) {
    this.activeTab = value;
  }

  doBulkAction(type) {
    // console.log(type);
  }

  setSearchValue(value) {
    // console.log(value);
  }
  // End form info table nav emitters

  onUpdateFormInfo(event) {
    this.getFormInfo();
  }

  goBack() {
    this.location.back();
  }
}
