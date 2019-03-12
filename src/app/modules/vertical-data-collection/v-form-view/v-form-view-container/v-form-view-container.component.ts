import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import {Field} from "../../../data-collection/reducers/field/field.model";
import {ContentDirective} from "../../../data-collection/form-constructor/content.directive";
import {Store} from "@ngrx/store";
import {FieldState} from "../../../data-collection/reducers/field/field.reducer";
import { v4 as uuid } from 'uuid';
import {VFieldsService} from "../../v-fields.service";

@Component({
  selector: 'app-v-form-view-container',
  templateUrl: './v-form-view-container.component.html',
  styleUrls: ['./v-form-view-container.component.css']
})
export class VFormViewContainerComponent implements OnInit {

  @Input() field: Field;


  @ViewChild(ContentDirective) contentDirective: ContentDirective;


  constructor(private fieldStore$: Store<FieldState>,
              private resolver: ComponentFactoryResolver,
              private fieldService: VFieldsService,
              public renderer: Renderer,
              public elementRef: ElementRef){

  }

  ngOnInit() {
    this.createComponent();

  }



  createComponent(){
    if(!this.field._id){
      this.field._id = uuid();
    }

    let componentFactory = this.resolver.resolveComponentFactory(this.fieldService.componentMap.get(this.field.type));

    let viewContainerRef = this.contentDirective.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.field;
  }

}
