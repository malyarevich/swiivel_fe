import {Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Renderer, ElementRef} from '@angular/core';

import {ContentDirective} from '../content.directive';
import {BasicFieldsService} from '../../basic-fields.service';
import {FormService} from '../../form.service';
import { v4 as uuid } from 'uuid';
import {select, Store} from '@ngrx/store';
import {FieldState} from '../../reducers/field/field.reducer';
import { UpsertField, DeleteField, EditField} from '../../reducers/field/field.actions';
import {Field} from '../../reducers/field/field.model';
import {Observable} from 'rxjs';
import {selectEditedIdField} from '../../reducers/field/field.selector';

@Component({
  selector: 'app-form-conteiner',
  templateUrl: './form-conteiner.component.html',
  styleUrls: ['./form-conteiner.component.css']
})
export class FormConteinerComponent implements OnInit {

  visibility$: Observable<string>;
  @Input() field: Field;


  @ViewChild(ContentDirective, { static: true }) contentDirective: ContentDirective;


  constructor(private fieldStore$: Store<FieldState>,
              private resolver: ComponentFactoryResolver,
              private fieldService: BasicFieldsService,
              private formService: FormService,
              public renderer: Renderer,
              public elementRef: ElementRef){


  }

  ngOnInit() {
    this.createComponent();

     this.visibility$ = this.fieldStore$.pipe(
      select(selectEditedIdField)

    );
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
    this.fieldStore$.dispatch(new UpsertField({field: this.field}));
  }

  removeField(id: string) {
    this.fieldStore$.dispatch(new DeleteField({id}));

    this.formService.doFieldChanges();
  }

  editeField(id: string){

    this.fieldStore$.dispatch(new EditField({id}));


    this.formService.doFieldSettings();

  }



}
