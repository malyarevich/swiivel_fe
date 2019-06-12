import {Component, Input} from '@angular/core';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {Field} from '../../../../../../models/vertical-data-collection/field.model';

@Component({
  selector: 'app-date-time-field',
  templateUrl: './date-time-field.component.html',
  styleUrls: ['./date-time-field.component.css']
})
export class DateTimeFieldComponent  {

  @Input() data: Field;
  formatDate;
  constructor(private parserFormatter: NgbDateParserFormatter) {}

  ngOnInit(){
  this.formatDate = this.parserFormatter.parse(this.data.value);
  }

  blurChanges(event){
    this.data.value = this.parserFormatter.format(event);
  }
}
