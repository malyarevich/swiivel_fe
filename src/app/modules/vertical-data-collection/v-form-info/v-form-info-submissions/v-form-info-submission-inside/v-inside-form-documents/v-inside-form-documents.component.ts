import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-inside-form-documents',
  templateUrl: './v-inside-form-documents.component.html',
  styleUrls: ['./v-inside-form-documents.component.css']
})
export class VInsideFormDocumentsComponent implements OnInit {

  activeTab: string = 'documents';

  constructor() { }

  ngOnInit() {
  }

  onActiveTab(val) {
    this.activeTab = val;
  }

}
