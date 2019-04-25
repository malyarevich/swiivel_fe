import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import {Field} from "../model/field.model";
import {VContentDirective} from "../../vertical-data-collection/v-form-view/v-content.directive";
import {Store} from "@ngrx/store";
import {v4 as uuid} from 'uuid';
import {OnlineFormService} from "../online-form.service";
import {FieldContentDirective} from "../directives/field-content.directive";
// import {FieldState} from "../../data-collection/reducers/field/field.reducer";
// import {VFieldsService} from "../../vertical-data-collection/v-fields.service";

@Component({
  selector: 'app-online-form-fields',
  templateUrl: './online-form-fields.component.html',
  styleUrls: ['./online-form-fields.component.css']
})
export class OnlineFormFieldsComponent implements OnInit {

  @Input() field: Field;


  @ViewChild(FieldContentDirective) contentDirective: FieldContentDirective;


  constructor(
    // private fieldStore$: Store<FieldState>,
    private resolver: ComponentFactoryResolver,
    private onlineFormService: OnlineFormService,
    public renderer: Renderer,
    // public elementRef: ElementRef
  ) {

  }

  ngOnInit() {
    this.createComponent();
  }


  createComponent() {
    if (!this.field._id) {
      this.field._id = uuid();
    }

    let componentFactory = this.resolver.resolveComponentFactory(this.onlineFormService.componentFieldsMap.get(this.field.type));

    let viewContainerRef = this.contentDirective.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);

    componentRef.instance.data = this.field;
  }

}
