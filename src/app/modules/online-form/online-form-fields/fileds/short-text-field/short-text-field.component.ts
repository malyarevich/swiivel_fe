import {AfterViewInit, Component, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {Field} from "../../../model/field.model";
import {NgModel, Validators} from "@angular/forms";

@Component({
  selector: 'app-short-text-field',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './short-text-field.component.html',
  styleUrls: ['./short-text-field.component.css']
})
export class ShortTextFieldComponent implements AfterViewInit {
  @Input() data: Field;
  @ViewChild(NgModel) mod: NgModel;

  ngAfterViewInit() {
    if (this.data.options.isValidator && this.data.validators.length) {
      this.data.validators.map((item) => {
        let validators = [];
        if (item.min) validators.push(Validators.minLength(item.min));
        if (item.max) validators.push(Validators.maxLength(item.max));
        this.mod.control.setValidators(validators);
      })
    }
  }
}
