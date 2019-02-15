import {Action} from '@ngrx/store';
import {Person} from "../../../../../models/person";

export class GetPersons implements Action {
    static Type = '[Persons Page] GetPersons';

    public type = GetPersons.Type;

    constructor() {
    }
}

export class GetPersonsSuccess implements Action {
    static Type = '[Persons API] GetPersonsSuccess';

    public type = GetPersonsSuccess.Type;

    constructor(public persons) {
    }
}

export type PersonsAction =
    | GetPersons
    | GetPersonsSuccess

