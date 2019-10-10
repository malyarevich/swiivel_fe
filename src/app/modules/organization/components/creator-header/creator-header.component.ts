import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-creator-header',
  templateUrl: './creator-header.component.html',
  styleUrls: ['./creator-header.component.scss']
})
export class CreatorHeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

}
