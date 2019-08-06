import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import { v4 as uuid } from 'uuid';
import {VFieldsService} from '../../services/v-fields.service';
import {VContentDirective} from '../v-content.directive';
import {Field} from '../../../../models/vertical-data-collection/field.model';

@Component({
  selector: 'app-v-form-view-container',
  templateUrl: './v-form-view-container.component.html',
  styleUrls: ['./v-form-view-container.component.css']
})
export class VFormViewContainerComponent implements OnInit {

  @Input() field: Field;


  @ViewChild(VContentDirective, { static: true }) contentDirective: VContentDirective;


  constructor(private resolver: ComponentFactoryResolver,
              private fieldService: VFieldsService,
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
