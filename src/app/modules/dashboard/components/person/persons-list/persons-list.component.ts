import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Login} from "../../../../login/store";
import {Store} from "@ngrx/store";
import {GetPersons} from '../store';

@Component({
    selector: 'app-persons-list',
    templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

    persons = {};

    constructor(
        private readonly http: HttpClient,
        private readonly store: Store<any>
    ) {
    }

    ngOnInit() {
        // this.getItems()
        this.store.dispatch(new GetPersons());
    }

    // getItems() {
    //     this.persons = this.http.get('/persons').pipe(
    //         map((response) => response)
    //     )
    // }
}
