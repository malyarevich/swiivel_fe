import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../../person.model";
import {select, Store} from "@ngrx/store";
import {map, filter, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {selectPersonById} from "../../store/person.selector";
import {RequestPerson} from "../../store/person.actions";
import {PersonState} from "../../store/person.reducer";

@Component({
    selector: 'app-person-page',
    templateUrl: './person-page.component.html',
    styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {

    personId: number;
    person$: Observable<Person>;

    constructor(
        private route: ActivatedRoute,
        private  personStore$: Store<PersonState>
    ) {
    }

    ngOnInit() {
        this.personStore$.dispatch(new RequestPerson());
        this.personId = this.route.snapshot.params['id'];
        this.person$ = this.personStore$.pipe(
            select(selectPersonById(this.personId)),
        );
    }

}
