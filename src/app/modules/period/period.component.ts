import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})

export class PeriodComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onAddPeriod(): void {
    this.router.navigateByUrl('/period/create');
  }
}
