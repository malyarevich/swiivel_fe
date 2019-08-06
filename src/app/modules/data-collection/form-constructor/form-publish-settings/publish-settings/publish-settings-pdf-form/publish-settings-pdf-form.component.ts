import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  IPdfStructure,
  PublishSettingsEntity
} from "../../../../model/publish-settings.model";
import { PublishSettingsPublishSettingsService } from "../../../../services/publish-settings-publish-settings.service";

@Component({
  selector: "app-v-publish-settings-pdf-form",
  templateUrl: "./publish-settings-pdf-form.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./publish-settings-pdf-form.component.scss"]
})
export class PublishSettingsPdfFormComponent implements OnInit {
  @Input() pdfConfig: IPdfStructure;

  pdfStructure = PublishSettingsEntity.pdfStructure;
  providers = PublishSettingsEntity.providers;

  defaultMailFormControls = {
    ProviderName: new FormControl({ value: 0, name: "Provider Name" }, Validators.required),
    AccountNumber: new FormControl("", {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    }),
    Email: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])
    ),
    EmailSubject: new FormControl("", Validators.required),
    EmailBody: new FormControl("", Validators.required),
    FormCheckbox: new FormControl(false, Validators.required),
    CoverLetter: new FormControl("", Validators.required)
  };

  pdfMailForm: FormGroup = new FormGroup(this.defaultMailFormControls);

  constructor(
    private publishSettingsService: PublishSettingsPublishSettingsService
  ) {}

  ngOnInit() {
    if (this.pdfConfig["form_value"]) {
      this.loadForm();
    }

  }

  loadForm() {
    // TODO: remove if after renew
    if (!this.pdfConfig["form_value"]['ProviderName']) {
      this.pdfConfig["form_value"]['ProviderName'] = {"value": ""};
    }
    this.pdfMailForm.patchValue(this.pdfConfig["form_value"]);
  }

  toggleCheckbox(key: string) {
    this.publishSettingsService.togglePdfCheckbox(key);
  }

  onChangeFormValue(key: string, newState: object) {
    this.setFormValue(key, newState);
  }

  onBlurFormField() {
    this.saveFormValues();
  }

  saveFormValues() {
    this.publishSettingsService.updateFormValue(this.pdfMailForm.value);
  }

  savePublishSettings(state: object) {
    this.publishSettingsService.savePublishSettings(state);
  }

  setFormValue(key: string, newState: object) {
    this.pdfMailForm.controls[key].markAsTouched({ onlySelf: true });
    this.pdfMailForm.patchValue(newState);
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    document.execCommand(name, showUi, value);
  }
}
