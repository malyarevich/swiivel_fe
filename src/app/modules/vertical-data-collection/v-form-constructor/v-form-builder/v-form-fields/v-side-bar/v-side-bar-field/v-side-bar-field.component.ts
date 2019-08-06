import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Field} from '../../../../../model/field.model';
import {Form} from '../../../../../model/form.model';
import {SideBarService} from '../side-bar.service';

@Component({
  selector: 'app-v-side-bar-field',
  templateUrl: './v-side-bar-field.component.html',
  styleUrls: ['./v-side-bar-field.component.css']
})

export class VSideBarFieldComponent implements OnInit, OnDestroy {

  @Input() field: Field;
  @Input() form: Form;
  @Input() nestedLevel: number;
  @Input() style: boolean;

  @Output() fieldChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private sideBarService: SideBarService
  ) {}

  ngOnInit() {}

  onFieldToggle(): void {
    console.log(this.form);
    this.sideBarService.onChangeField(this.field, this.form);
    this.fieldChanged.emit();
  }

  ngOnDestroy(): void {
    this.field.exist = false;
  }

}

