import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
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
