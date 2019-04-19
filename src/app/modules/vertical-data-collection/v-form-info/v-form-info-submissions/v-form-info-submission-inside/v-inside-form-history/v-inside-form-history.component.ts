import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-inside-form-history',
  templateUrl: './v-inside-form-history.component.html',
  styleUrls: ['./v-inside-form-history.component.css']
})
export class VInsideFormHistoryComponent implements OnInit {

  formHistory = [
    {action: 'created', full_name: 'Christine Hale', role_name: 'admin', date: '12-12-2019 12:40 pm'},
    {action: 'opened', full_name: 'Christine Hale', role_name: 'admin', date: '12-12-2019 12:40 pm'},
    {action: 'submitted', full_name: 'Alvarez', role_name: 'parent account', date: '12-12-2019 12:40 pm'},
    {action: 'uploaded', full_name: 'Alvarez', role_name: 'parent account', date: '12-12-2019 12:40 pm'},
    {action: 'created', full_name: 'Christine', role_name: 'admin', date: '12-12-2019 12:40 pm'},
    {action: 'created', full_name: 'Christine', role_name: 'admin', date: '12-12-2019 12:40 pm'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
