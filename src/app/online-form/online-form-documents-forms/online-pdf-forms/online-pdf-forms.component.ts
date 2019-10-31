import {
  animate,
  group,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '@models/data-collection/form.model';
import { Subscription } from 'rxjs';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'sw-online-pdf-forms',
  templateUrl: './online-pdf-forms.component.html',
  styleUrls: ['./online-pdf-forms.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' }))
        ])
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' }))
        ])
      ])
    ])
  ]
})
export class OnlinePdfFormsComponent implements OnInit, OnDestroy {
  @Input() form: FormModel;
  @Input() formErrors: object;
  @Input() fg: FormGroup;

  constructor(private fileService: FilesService) {}

  uploadSubscription: Subscription;

  ngOnInit() {}

  onFileSelected($event) {
    const file = $event.target.files[0];
    const formData = new FormData();
    formData.append('type', 'document');
    formData.append('original_name', file.name);
    formData.append('file', file, file.name);
    this.uploadSubscription = this.fileService
      .uploadFileToServer(this.form._id, formData)
      .subscribe(() => {
        console.log(this.form);
      });
  }

  ngOnDestroy() {
    if (this.uploadSubscription) {
      this.uploadSubscription.unsubscribe();
    }
  }
}
