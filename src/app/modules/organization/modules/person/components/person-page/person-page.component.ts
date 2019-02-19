import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../../../../../../models/person";
import {select, Store} from "@ngrx/store";
import {map, filter, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {GetPersons} from "../../store";
// import {selectAllPersons} from "../../store/selectors";

@Component({
    selector: 'app-person-page',
    templateUrl: './person-page.component.html',
    styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {

    personId: number;
    persons;

    constructor(
        private route: ActivatedRoute,
        private readonly store$: Store<any>
    ) {
    }

    ngOnInit() {
        this.personId = this.route.snapshot.params['id'];
        // this.persons = this.store$.pipe(
        //     select(selectAllPersons),
        //     // map(person => person.persons.filter(person => person.id == this.personId)),
        //     map(person => person.map((person) => console.log(person))),
        //     // filter(person => person.id === 1)
        // );
    }

}
