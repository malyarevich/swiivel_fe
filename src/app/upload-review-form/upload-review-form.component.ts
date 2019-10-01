import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadReviewFormDataSource } from '@app/upload-review-form/upload-review-form.datasource';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { Document } from '@models/data-collection/document.model';

@Component({
  selector: 'app-upload-review-form',
  templateUrl: './upload-review-form.component.html',
  styleUrls: ['./upload-review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadReviewFormComponent  implements OnInit {
  public dataSource: UploadReviewFormDataSource = new UploadReviewFormDataSource(this.uploadReviewFormService);
  public documents: Document[];
  public activeIdDocument: string;
  public activeIdForm = '';

  constructor(public uploadReviewFormService: UploadReviewFormService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.activeIdForm = this.route.snapshot.paramMap.get('id');
    this.dataSource.uploadDocuments(this.activeIdForm);
    this.dataSource.getDocuments()
      .subscribe((docs) => {
        if (docs.length) {
          this.documents = docs;
          this.activeIdDocument = docs[0]._id;
          this.selectItem(this.activeIdDocument);
          this.cdr.detectChanges();
        }
      });
  }

  getSelectForm(): Document {
    if (this.documents) {
      return this.documents.find(document => document._id === this.activeIdDocument);
    }
  }

  selectItem(id: string): void {
    this.documents.map(document => document._id === id ? document.isSelected = true : document.isSelected = false);
    this.activeIdDocument = id;
  }
}
