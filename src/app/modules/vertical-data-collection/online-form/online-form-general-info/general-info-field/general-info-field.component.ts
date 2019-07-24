import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/models/vertical-data-collection/field.model';

@Component({
  selector: 'app-general-info-field',
  templateUrl: './general-info-field.component.html',
  styleUrls: ['./general-info-field.component.scss']
})
export class GeneralInfoFieldComponent implements OnInit {
  @Input() field: Field;
  
  constructor() { }

  ngOnInit() {
    this.initFormField();
  }

  initFormField() {
    switch (this.field.type) {
      case 101:
        
        break;
    
      case 101:
      
        break;
      
      default:
        break;
    }
  }

}
