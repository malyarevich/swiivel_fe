import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {FormState} from "../../../../data-collection/reducers/forms/form.reducer";
import {selectAllForms} from "../../../../data-collection/reducers/forms/form.selectors";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public forms$;

  constructor(private formStore: Store<FormState>) { }

  ngOnInit() {
      this.forms$ = this.formStore.pipe(
          select(selectAllForms)
      );
  }

}
