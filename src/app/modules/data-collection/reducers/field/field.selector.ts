import * as fromFild from './field.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {selectFormsState} from '../forms/form.selectors';

export const selectFieldState = createFeatureSelector<fromFild.FieldState>('field');

export const selectFieldById = (fieldId:string)=>createSelector(
  selectFieldState,
  fieldState => fieldState.entities[fieldId]
);


export const selectAllField = createSelector(
  selectFieldState,
  fromFild.selectAll

);
export const selectAllIdsField = createSelector(
  selectFieldState,
  fromFild.selectIds

);

export const selectEditedField  = createSelector(
  selectFieldState,
  fieldState => fieldState.entities[fieldState.edited]
);

export const selectEditedIdField =createSelector(
  selectFieldState,
  fieldState => fieldState.edited
);
