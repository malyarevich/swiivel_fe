import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside-documents-view',
  templateUrl: './inside-documents-view.component.html',
  styleUrls: ['./inside-documents-view.component.css']
})
export class InsideDocumentsViewComponent implements OnInit {

  cols = [
    {
      id: 'form_type',
      type: 'text',
      title: 'FORM TYPE',
      sort: true,
      search: true,
    },
    {
      id: 'requirement',
      type: 'text',
      title: 'REQUIREMENT',
      sort: true,
      search: true,
    },
    {
      id: 'document',
      type: 'text',
      title: 'DOCUMENT',
      sort: true,
      search: true,
    },
    {
      id: 'required_for',
      type: 'text',
      title: 'REQUIRED FOR',
      sort: true,
      search: true,
    },
    {
      id: 'updated_at',
      type: 'date',
      title: 'UPDATE DATE',
      sort: true,
      search: true,
    },


    {
      id: 'status',
      type: 'text',
      title: 'STATUS',
      sort: true,
      search: true,
    },

    {
      id: 'required',
      type: 'text',
      title: 'REQUIRED',
      sort: true,
      search: true,
    },
    {
      id: '',
      type: '',
      title: '',
      sort: false,
      search: false,
      width: '50px',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  setSearch(data) {
    // console.log(data);
  }

  // TODO move to single directive
  convertDate(date) {
    return date.replace(/\s/g, "T");
  }

}
