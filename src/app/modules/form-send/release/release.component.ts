import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {

  filter: FormControl = new FormControl(null);
  dataSource = [
    {
      name: 'test 1',
      hint: 'Financial, Academic, Busing, Fourth Split, Fifth Split, Sixth Split',
    },
    {
      name: 'test 2',
      hint: 'Financial, Academic, Busing, Fourth Split, Fifth Split, Sixth Split',
    },
    {
      name: 'test 3',
      hint: 'Financial, Academic, Busing, Fourth Split, Fifth Split, Sixth Split',
    }
  ];

  constructor() {
    this.filter.valueChanges.subscribe((filterValue) => {
      if (filterValue && filterValue.length > 0) {
        // this.dataSource.filter(filterValue.toLowerCase())
      } else {
        // this.dataSource.filter('');
      }
    });
  }

  ngOnInit() {
  }

}
