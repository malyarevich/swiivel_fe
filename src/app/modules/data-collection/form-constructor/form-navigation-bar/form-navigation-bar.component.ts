import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GeneralInfoIsValidService } from "../../services/general-info-is-valid.service";
import { SaveFormService } from "../../services/save-form.service";
import { GeneralInfoIsSavedService } from "../../services/general-info-is-saved.service";
import { FormBuilderIsSavedService } from "../../services/form-builder-is-saved.service";
import { PublishSettingsIsSavedService } from "../../services/publish-settings-is-saved.service";
import { ConstructorIsSavingService } from "../../services/constructor-is-saving.service";
import { GeneralInfoIsFormExistService } from "../../services/general-info-is-form-exist.service";

@Component({
  selector: "app-form-navigation-bar",
  templateUrl: "./form-navigation-bar.component.html",
  styleUrls: ["./form-navigation-bar.component.scss"]
})
export class FormNavigationBarComponent implements OnInit {
  isGeneralSaved: boolean = undefined;
  isBuilderSaved: boolean = undefined;
  isPublishSaved: boolean = undefined;

  isGeneralInfoValid: boolean = true;
  isSavingConstructor: boolean = false;
  isFormExisted: boolean;

  constructor(
    private router: Router,
    private generalInfoIsValidService: GeneralInfoIsValidService,
    private generalInfoIsFormExistService: GeneralInfoIsFormExistService,
    private constructorIsSavingService: ConstructorIsSavingService,
    private generalInfoIsSavedService: GeneralInfoIsSavedService,
    private formBuilderIsSavedService: FormBuilderIsSavedService,
    private publishSettingsIsSavedService: PublishSettingsIsSavedService,
    private saveFormService: SaveFormService
  ) {
    this.generalInfoIsValidService.onIsValid.subscribe(
      val => (this.isGeneralInfoValid = val)
    );
    this.initSavedServices();
    this.constructorIsSavingService.onIsSaving.subscribe(val => {
      this.isSavingConstructor = val;
    });
    this.generalInfoIsFormExistService.onIsExist.subscribe(val => {
      this.isFormExisted = val;
    });
    this.isFormExisted = true;
  }

  initSavedServices() {
    this.generalInfoIsSavedService.onIsSaved.subscribe(val => {
      this.isGeneralSaved = val;
      this.delegateLogic();
    });
    this.isGeneralSaved = undefined;
    this.formBuilderIsSavedService.onIsSaved.subscribe(val => {
      this.isBuilderSaved = val;
      this.delegateLogic();
    });
    this.isBuilderSaved = undefined;
    this.publishSettingsIsSavedService.onIsSaved.subscribe(val => {
      this.isPublishSaved = val;
      this.delegateLogic();
    });
    this.isPublishSaved = undefined;
  }

  ngOnInit() {}

  getSavingStatus() {
    // console.log(`isGeneralSaved: ${this.isGeneralSaved}`);
    // console.log(`isBuilderSaved: ${this.isBuilderSaved}`);
    // console.log(`isPublishSaved: ${this.isPublishSaved}`);
    return (
      this.isGeneralSaved !== false &&
      this.isBuilderSaved !== false &&
      this.isPublishSaved !== false
    );
  }

  delegateLogic() {
    if (this.getSavingStatus()) {
      this.saveFormService.setSavingStatus(true);
      this.goBack();
    } else {
      this.saveFormService.setSavingStatus(false);
    }
  }

  isRoutingDisable() {
    return (
      !this.isGeneralInfoValid ||
      this.isSavingConstructor ||
      !this.isFormExisted
    );
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
