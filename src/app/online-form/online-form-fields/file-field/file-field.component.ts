import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Field } from '@models/data-collection/field.model';

@Component({
  selector: 'sw-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss']
})

export class FileFieldComponent implements OnInit {

  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  formControl: any;
  filename: string;

  constructor() {}

  ngOnInit(): void {
    this.formControl = this.fg.get(this.field._id);
    if (this.field.options.required) {
      this.formControl.setValidators(Validators.required);
    }
    this.formControl.valueChanges.subscribe(data => {
        console.log(data);
    });
  }

  onFileSelected(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.filename = file.name;
        const fileData = {
          filename: file.name,
          filetype: file.type,
          value: reader.result
        };
        this.formControl.patchValue(fileData);
      };
    } else {
      this.formControl.reset();
    }
    this.formControl.markAsTouched();
  }

}
