import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sw-online-form',
  templateUrl: './online-form.component.html',
  styleUrls: ['./online-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineFormComponent implements OnInit {
  formId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setFormId();
  }

  setFormId() {
    this.route.params.subscribe(params => {
      this.formId = params.mongo_id;
    });
  }
}
