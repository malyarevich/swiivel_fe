import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside-form-documents',
  templateUrl: './inside-form-documents.component.html',
  styleUrls: ['./inside-form-documents.component.css']
})
export class InsideFormDocumentsComponent implements OnInit {

  activeTab: string = 'documents';

  constructor() { }

  ngOnInit() {
  }

  onActiveTab(val) {
    this.activeTab = val;
  }

}
