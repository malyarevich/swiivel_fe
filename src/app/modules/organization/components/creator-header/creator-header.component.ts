import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-creator-header',
  templateUrl: './creator-header.component.html',
  styleUrls: ['./creator-header.component.scss']
})
export class CreatorHeaderComponent implements OnInit {

  id: string = '';

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
      }
    });
  }

  getLink(path: string) {
    if (this.id) {
      path += `/${this.id}`;
    }
    return path;
  }

}
