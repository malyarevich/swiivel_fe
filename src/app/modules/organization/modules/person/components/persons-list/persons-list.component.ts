import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {Person} from "../../person.model";
import {PersonState} from '../../store/person.reducer';
import {RequestPerson} from '../../store/person.actions';
import {selectAllPersons, selectPersonById} from '../../store/person.selector';

@Component({
    selector: 'app-persons-list',
    templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

    public persons$: Observable<Person[]>;

    constructor(
        private readonly http: HttpClient,
        private  personStore$: Store<PersonState>
    ) {
    }

    ngOnInit() {

      this.personStore$.dispatch(new RequestPerson());
      this.persons$ = this.personStore$.pipe(
        select(selectAllPersons)
      );
    }




}
