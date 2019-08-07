import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-info-submissions',
  templateUrl: './form-info-submissions.component.html',
  styleUrls: ['./form-info-submissions.component.css']
})
export class FormInfoSubmissionsComponent implements OnInit {

  showRowInfo: boolean = true;

  cols = [
    {
      id: 'account',
      type: 'text',
      title: 'ACCOUNTS',
      sort: true,
      search: true,
    },
    {
      id: 'student',
      type: 'text',
      title: 'STUDENTS',
      sort: true,
      search: true,
    },
    {
      id: 'created_at',
      type: 'date',
      title: 'DATE',
      sort: true,
      search: true,
    },


    {
      id: 'completion',
      type: 'text',
      title: 'COMPLETION',
      sort: true,
      search: true,
    },

    {
      id: 'incompletion',
      type: 'text',
      title: 'INCOMPLETION',
      sort: true,
      search: true,
    },
    {
      id: '',
      type: '',
      title: '',
      sort: false,
      search: false,
      width: '400px',
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
