import * as fromPerson from './person.reducer';
import {PersonState} from './person.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectPersonState = createFeatureSelector<PersonState>("person");

export const selectAllPersons = createSelector(
  selectPersonState,
  fromPerson.selectAll

);



export const selectPersonById = (personId:number)=>createSelector(
  selectPersonState,
  personState => personState.entities[personId]
);
