import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { OnlineFormService } from '../../services/online-form.service';

@Component({
  selector: "app-email-field",
  templateUrl: "./email-field.component.html",
  styleUrls: ["./email-field.component.scss"]
})
export class EmailFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}

}
