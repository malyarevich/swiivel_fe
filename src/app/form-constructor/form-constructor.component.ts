import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sw-form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormConstructorComponent implements OnInit {
  mongoId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.setFormId();
  }

  setFormId() {
    this.route.params.subscribe(params => {
      this.mongoId = params.mongo_id;
    });
  }
}
