import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-persons-list',
    templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

    persons = {};

    constructor(private readonly http: HttpClient,) {
    }

    ngOnInit() {
        this.getItems()
    }

    getItems() {
        this.persons = this.http.get('/persons').pipe(
            map((response) => response)
        )
    }
}
