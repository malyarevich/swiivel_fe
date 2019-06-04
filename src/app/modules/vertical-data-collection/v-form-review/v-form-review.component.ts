import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { VFormService } from "../v-form.service";
import { FormSql } from "../model/form.model";

@Component({
  selector: "app-v-form-review",
  templateUrl: "./v-form-review.component.html",
  styleUrls: ["./v-form-review.component.scss"]
})
export class VFormReviewComponent implements OnInit {
  @Input() form: FormSql;
  
  formId: string;
  activeTab: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private vFormService: VFormService
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
