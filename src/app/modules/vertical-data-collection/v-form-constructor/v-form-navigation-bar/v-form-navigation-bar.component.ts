import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GeneralInfoIsValidService } from "../../services/general-info-is-valid.service";
import { SaveFormService } from "../../services/save-form.service";
import { GeneralInfoIsSavedService } from "../../services/general-info-is-saved.service";
import { FormBuilderIsSavedService } from "../../services/form-builder-is-saved.service";
import { PublishSettingsIsSavedService } from "../../services/publish-settings-is-saved.service";
import { ConstructorIsSavingService } from '../../services/constructor-is-saving.service';

@Component({
  selector: "app-v-form-navigation-bar",
  templateUrl: "./v-form-navigation-bar.component.html",
  styleUrls: ["./v-form-navigation-bar.component.scss"]
})
export class VFormNavigationBarComponent implements OnInit {
  isGeneralSaved: boolean = undefined;
  isBuilderSaved: boolean = undefined;
  isPublishSaved: boolean = undefined;

  isGeneralInfoValid: boolean;
  isSavingConstructor: boolean = false;

  constructor(
    private router: Router,
    private generalInfoIsValidService: GeneralInfoIsValidService,
    private constructorIsSavingService: ConstructorIsSavingService,
    private generalInfoIsSavedService: GeneralInfoIsSavedService,
    private formBuilderIsSavedService: FormBuilderIsSavedService,
    private publishSettingsIsSavedService: PublishSettingsIsSavedService,
    private saveFormService: SaveFormService
  ) {
    this.generalInfoIsValidService.onIsValid.subscribe(
      val => (this.isGeneralInfoValid = val)
    );
    this.generalInfoIsSavedService.onIsSaved.subscribe(
      val => {
        this.isGeneralSaved = val;
        this.delegateLogic();
      }
    );
    this.formBuilderIsSavedService.onIsSaved.subscribe(
      val => {
        this.isBuilderSaved = val;
        this.delegateLogic();
      }
    );
    this.publishSettingsIsSavedService.onIsSaved.subscribe(
      val => {
        this.isPublishSaved = val;
        this.delegateLogic();
      }
    );
    this.constructorIsSavingService.onIsSaving.subscribe(
      val => {
        console.log(val);
        this.isSavingConstructor = val;
      }
    )
  }

  ngOnInit() {
    this.isGeneralSaved = undefined;
    this.isBuilderSaved = undefined;
    this.isPublishSaved = undefined;
  }

  getSavingStatus() {
    // console.log(`isGeneralSaved: ${this.isGeneralSaved}`);
    // console.log(`isBuilderSaved: ${this.isBuilderSaved}`);
    // console.log(`isPublishSaved: ${this.isPublishSaved}`);
    return this.isGeneralSaved !== false
        && this.isBuilderSaved !== false
        && this.isPublishSaved !== false;
  }

  delegateLogic() {
    if (this.getSavingStatus()) {
      this.saveFormService.setSavingStatus(true);
      this.goBack();
    } else {
      this.saveFormService.setSavingStatus(false);
    }
  }

  goBack() {
    // console.log("goBack");
    this.router.navigate([`/vertical-data-collection/`]);
  }

  saveForm() {
    // console.log("SaveAction");
    this.saveFormService.onSaveForm.emit();
  }
}
