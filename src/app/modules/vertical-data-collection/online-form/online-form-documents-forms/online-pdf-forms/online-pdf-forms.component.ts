import { Component, Input, OnInit } from '@angular/core';
import { Form } from '../../../model/form.model';
// import { environment } from '../../../../../../environments/environment';
// import { PDFProgressData } from 'pdfjs-dist';
// import { FormsDivModel } from '../../../v-form-constructor/v-form-builder/v-documents-forms/model/formsPDF.model';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-online-pdf-forms',
  templateUrl: './online-pdf-forms.component.html',
  styleUrls: ['./online-pdf-forms.component.scss'],
  animations: [
    trigger(
      'slideInOut',
      [
        state('in', style({height: '*', opacity: 0})),
        transition(':leave', [
          style({height: '*', opacity: 1}),
          group([
            animate(300, style({height: 0})),
            animate('200ms ease-in-out', style({opacity: '0'}))
          ])
        ]),
        transition(':enter', [
          style({height: '0', opacity: 0}),
          group([
            animate(300, style({height: '*'})),
            animate('400ms ease-in-out', style({opacity: '1'}))
          ])
        ])
    ])
  ]
})

export class OnlinePdfFormsComponent implements OnInit {

  @Input() form: Form;

  constructor() {}

  ngOnInit() {}

  onFileSelected($event) {
    const file = $event.target.files[0];
    console.log(file);
  }

}
