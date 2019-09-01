import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Popup } from '@core/services/popup/popup.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [Popup],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit, AfterViewInit {

  form: FormGroup;

  dropdownList = {
    title: 'Upload New Form',
    data: [
      {
        title: 'Uploaded forms',
        data: [
          {
            id: 1,
            title: 'Edminify School Registration 2018-2019 (round 1).pdf'
          },
          {
            id: 2,
            title: 'Edminify School Registration 2018-2019 (round 2).pdf'
          }
        ]
      },
      {
        title: 'Existing forms',
        data: [
          {
            id: 1,
            title: 'Complaint Form for Edminify School.pdf'
          },
          {
            id: 2,
            title: 'Edminify Elementary School Registration 2019-2020.pdf'
          }
        ]
      }
    ]
  };

  dropdownOptions = [
    {
      id: 1,
      title: 'Edminify School Registration 2018-2019 (round 1).pdf'
    },
    {
      id: 2,
      title: 'Edminify School Registration 2018-2019 (round 2).pdf'
    },
    {
      id: 3,
      title: 'Complaint Form for Edminify School.pdf'
    },
    {
      id: 4,
      title: 'Edminify Elementary School Registration 2019-2020.pdf'
    }
  ];


  @ViewChild('template', {static: false}) template;


  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      short: new FormControl('short text'),
      dropdown: new FormControl([])
    });
    this.form.get('dropdown').valueChanges.subscribe(v => {
      console.log( v);
    })
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

}
