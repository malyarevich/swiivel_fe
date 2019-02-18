import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store, select} from "@ngrx/store";
import {GetPersons} from '../store';

@Component({
    selector: 'app-persons-list',
    templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

    public persons$: Observable<any>;

    constructor(
        private readonly http: HttpClient,
        private readonly store$: Store<any>
    ) {
    }

    ngOnInit() {
        this.store$.dispatch(new GetPersons());
        this.persons$ = this.store$.pipe(select('persons'));
    }
}
