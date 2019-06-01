import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ICheckbox } from "../v-publish-settings.component";

export enum PDFCheckboxGroup {
  general = "general",
  sending = "sending",
  form = "form",
}

@Component({
  selector: "app-v-publish-settings-pdf-form",
  templateUrl: "./v-publish-settings-pdf-form.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./v-publish-settings-pdf-form.component.scss"],
})
export class VPublishSettingsPdfFormComponent implements OnInit {
  @Input() pdf: IPdf;
  @Output() onToggleCheckbox: EventEmitter<
    IPdfCheckboxStructure
  > = new EventEmitter<IPdfCheckboxStructure>();

  pdfMailForm: FormGroup = new FormGroup({
    ProviderName: new FormControl(null, Validators.required),
    AccountNumber: new FormControl("", {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
    }),
    Email: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
      ]),
    ),
    EmailSubject: new FormControl(null, Validators.required),
    EmailBody: new FormControl(null, Validators.required),
    FormCheckbox: new FormControl(null, Validators.required),
    CoverLetter: new FormControl(null, Validators.required),
  });

  constructor() {}

  ngOnInit() {}

  toggleCheckbox(group: PDFCheckboxGroup, index: number) {
    this.onToggleCheckbox.emit({ group, index });
  }

  onChangeFormValue(key: string, newState: object) {
    const value = newState[key] == "" ? null : newState[key];
    this.setFormValue(key, newState);
  }

  setFormValue(key: string, newState: object) {
    this.pdfMailForm.controls[key].markAsTouched({ onlySelf: true });
    this.pdfMailForm.patchValue(newState);
  }

  setCommand(name: string, showUi: boolean = false, value: string = null) {
    document.execCommand(name, showUi, value);
  }
}

export interface IPdf {
  title: string;
  subtitle: string;
  checkBoxList: IPdfCheckbox;
  inputList?: IInput[];
}

export interface IInput {
  value: string;
  type: string;
  placeholder?: string;
}

export interface IPdfCheckbox {
  general: ICheckbox[];
  sending: ICheckbox[];
  form: ICheckbox[];
}

export interface IPdfCheckboxStructure {
  group: PDFCheckboxGroup;
  index: number;
}
