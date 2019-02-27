import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Field} from '../../../data-collection/reducers/field/field.model';
import {VFormService} from '../../v-form.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-v-form-conteiner',
  templateUrl: './v-form-conteiner.component.html',
  styleUrls: ['./v-form-conteiner.component.css']
})
export class VFormConteinerComponent implements OnInit {

  @Input() inputField: Field;
  @Output() onDelete = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();

  customFields: Field[];

  constructor(private formService: VFormService) {

  }

  ngOnInit() {
    this.loadBasicFilds();
  }

  loadBasicFilds() {
    this.formService.getCustomList().subscribe((fields: Field[]) => {
      this.customFields = fields;
    });
  }

  removeField(id: string){
    this.onDelete.emit(id);
  }

  onFieldTypeChange(event): void {

    this.inputField.type = +event.target.value;

  }

  uniqActivated(event){
    this.onChange.emit(event);
  }


}
