import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import { v4 as uuid } from 'uuid';
import {FieldsService} from '../../services/fields.service';
import {ContentDirective} from '../content.directive';
import {Field} from '../../../../models/data-collection/field.model';

@Component({
  selector: 'app-v-form-view-container',
  templateUrl: './form-view-container.component.html',
  styleUrls: ['./form-view-container.component.css']
})
export class FormViewContainerComponent implements OnInit {

  @Input() field: Field;


  @ViewChild(ContentDirective, { static: true }) contentDirective: ContentDirective;


  constructor(private resolver: ComponentFactoryResolver,
              private fieldService: FieldsService,
              public renderer: Renderer,
              public elementRef: ElementRef) {

  }

  ngOnInit() {
    this.createComponent();

  }



  createComponent() {
    if (!this.field._id) {
      this.field._id = uuid();
    }

    const componentFactory = this.resolver.resolveComponentFactory(this.fieldService.componentMap.get(this.field.type));

    const viewContainerRef = this.contentDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.field;
  }

}
