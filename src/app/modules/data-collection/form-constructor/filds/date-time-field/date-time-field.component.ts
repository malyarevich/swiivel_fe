import {Component, Input} from '@angular/core';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-time-field',
  templateUrl: './date-time-field.component.html',
  styleUrls: ['./date-time-field.component.css']
})
export class DateTimeFieldComponent  {

  @Input() data: any;
  date;
  constructor(private parserFormatter: NgbDateParserFormatter) {}

  ngOnInit(){
  this.date= this.parserFormatter.parse(this.data.value);
  }

  blurChanges(event){
    this.data.value = this.parserFormatter.format(event);
  }
}
