import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import {Field} from '../../reducers/field/field.model';
import {ContentDirective} from '../../form-constructor/content.directive';
import {select, Store} from '@ngrx/store';
import {FieldState} from '../../reducers/field/field.reducer';
import {BasicFieldsService} from '../../basic-fields.service';
import {FormService} from '../../form.service';
import { v4 as uuid } from 'uuid';



@Component({
  selector: 'app-form-view-conteiner',
  templateUrl: './online-form-conteiner.component.html',
  styleUrls: ['./online-form-conteiner.component.css']
})
export class OnlineFormConteinerComponent implements OnInit {

  @Input() field: Field;


  @ViewChild(ContentDirective) contentDirective: ContentDirective;


  constructor(private fieldStore$: Store<FieldState>,
              private resolver: ComponentFactoryResolver,
              private fieldService: BasicFieldsService,
              private formService: FormService,
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
