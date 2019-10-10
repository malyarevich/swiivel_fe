import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creator-header',
  templateUrl: './creator-header.component.html',
  styleUrls: ['./creator-header.component.scss']
})
export class CreatorHeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log('ID Parametr', params['id']) //log the value of id
    });
  }

  ngOnInit() {
    console.log('ROUTE', this.route);
    console.log('snapppp', this.route.snapshot.paramMap.get("id"));
  }

}
