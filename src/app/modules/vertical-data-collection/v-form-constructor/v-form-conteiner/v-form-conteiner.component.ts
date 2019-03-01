import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from '../../../data-collection/reducers/field/field.model';
import {VFormService} from '../../v-form.service';
import { range } from 'lodash'
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

  size = range(1  ,13);

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



  uniqActivated(event){
    this.onChange.emit(event);
  }


}
