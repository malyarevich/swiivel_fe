import {Component, Input} from '@angular/core';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {Field} from '../../../model/field.model';

@Component({
  selector: 'app-date-time-field',
  templateUrl: './date-time-field.component.html',
  styleUrls: ['./date-time-field.component.css']
})
export class DateTimeFieldComponent  {

  @Input() data: Field;
  date;
  constructor(private parserFormatter: NgbDateParserFormatter) {}

  ngOnInit(){
  this.date= this.parserFormatter.parse(this.data.value);
  }

  blurChanges(event){
    this.data.value = this.parserFormatter.format(event);
  }
}
