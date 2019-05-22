import { Component, OnInit, OnDestroy } from '@angular/core';
import { Form } from './model/form.model';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-v-data-collection',
  templateUrl: './v-data-collection.component.html'
})
export class VDataCollectionComponent implements OnInit, OnDestroy {

  private draftForm = new Map<string, Form>();

  public getDraftForm = (id: string): Form => {
    // console.log('getDraftForm()');
    if (this.draftForm.has(id))
      return this.draftForm.get(id);
  };

  public setDraftForm = (id: string, newForm: Form): void => {
    // console.log('setDraftForm()');
    this.draftForm.set(id, newForm);
  };

  public deleteDraftForm = (id: string): void => {
    // console.log('deleteDraftForm()');
    this.draftForm.delete(id);
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    // console.log("ngOnDestroy()//v-data-collection"); // needed to fix?
    // this.draftForm = undefined;
  }
}
