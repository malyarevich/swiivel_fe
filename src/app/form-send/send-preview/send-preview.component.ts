import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'sw-send-preview',
  templateUrl: './send-preview.component.html',
  styleUrls: ['./send-preview.component.scss']
})
export class SendPreviewComponent implements OnInit {

  id: string;
  formType: string = 'generic';
  filter: FormControl = new FormControl('');
  buttonOptions = [
    {
      label: 'Generic Form',
      value: 'generic'
    },
    {
      label: 'Account Form',
      value: 'account'
    }
  ]

  constructor(
    private route: ActivatedRoute
  ) {
    this.filter.valueChanges.subscribe((filterValue) => {
      if (filterValue && filterValue.length > 0) {
        // this.dataSource.filter(filterValue.toLowerCase())
      } else {
        // this.dataSource.filter('');
      }
    });
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.hasOwnProperty('id') ? params.id : '';
      // this.initPage();
    });
  }


}
