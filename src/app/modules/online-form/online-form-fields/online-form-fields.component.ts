import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import {Field} from "../model/field.model";
import {v4 as uuid} from 'uuid';
import {OnlineFormService} from "../online-form.service";
import {FieldContentDirective} from "../directives/field-content.directive";

@Component({
  selector: 'app-online-form-fields',
  templateUrl: './online-form-fields.component.html',
  styleUrls: ['./online-form-fields.component.css']
})
export class OnlineFormFieldsComponent implements OnInit {

  @Input() field: Field;


  @ViewChild(FieldContentDirective) contentDirective: FieldContentDirective;


  constructor(private resolver: ComponentFactoryResolver,
              private onlineFormService: OnlineFormService) {
  }

  ngOnInit() {
    this.createComponent();
  }


  createComponent() {
    if (!this.field._id) {
      this.field._id = uuid();
    }
// TODO Remove '+' after fix return number field type of new existing field
    let componentFactory = this.resolver.resolveComponentFactory(this.onlineFormService.componentFieldsMap.get(+this.field.type));

    let viewContainerRef = this.contentDirective.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);

    componentRef.instance.data = this.field;
  }

}
