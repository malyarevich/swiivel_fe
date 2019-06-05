import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { IPdfStructure, PublishSettingsItems } from "../../models/publish-settings";

@Component({
  selector: "app-v-publish-settings-pdf-form",
  templateUrl: "./v-publish-settings-pdf-form.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings-pdf-form.component.scss"]
})
export class VPublishSettingsPdfFormComponent implements OnInit {
  @Input() pdfConfig: object;
  @Output() onTogglePdfCheckbox: EventEmitter<string> = new EventEmitter<
    string
  >();
  @Output() onUpdateFormValue: EventEmitter<object> = new EventEmitter<object>();
  @Output() onSavePublishSettings: EventEmitter<object> = new EventEmitter<
    object
  >();

  pdfStructure = PublishSettingsItems.pdfStructure;
  providers = PublishSettingsItems.providers;

  defaultMailFormControls = {
    ProviderName: new FormControl(null, Validators.required),
    AccountNumber: new FormControl("", {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    }),
    Email: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])
    ),
    EmailSubject: new FormControl("", Validators.required),
    EmailBody: new FormControl("", Validators.required),
    FormCheckbox: new FormControl("", Validators.required),
    CoverLetter: new FormControl("", Validators.required)
  };

  pdfMailForm: FormGroup = new FormGroup(this.defaultMailFormControls);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.pdfConfig);
    if (this.pdfConfig['form_value']) {
      this.loadForm();
    }
  }

  loadForm() {
    this.pdfMailForm.patchValue(this.pdfConfig['form_value']);
  }

  toggleCheckbox(key: string) {
    this.onTogglePdfCheckbox.emit(key);
  }

  onChangeFormValue(key: string, newState: object) {
    // const value = newState[key] == "" ? null : newState[key];
    this.setFormValue(key, newState);
  }

  onBlurFormField() {
    
    console.log(this.pdfConfig);
    // console.log(this.pdfMailForm.value);
    this.saveFormValues();
  }

  saveFormValues() {
    this.onUpdateFormValue.emit(this.pdfMailForm.value);
  }

  savePublishSettings(state: object) {
    this.onSavePublishSettings.emit(state);
  }

  setFormValue(key: string, newState: object) {
    this.pdfMailForm.controls[key].markAsTouched({ onlySelf: true });
    this.pdfMailForm.patchValue(newState);
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    document.execCommand(name, showUi, value);
  }
}
