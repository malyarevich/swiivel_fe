import {FormState} from './form.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromForm from './form.reducer';

export const selectFormsState = createFeatureSelector<FormState>("form");


export const selectFormById = (formId:string)=>createSelector(
  selectFormsState,
  formState => formState.entities[formId]
);




export const selectAllForms = createSelector(
  selectFormsState,
  fromForm.selectAll

);



export const selectEditedForm = createSelector(
  selectFormsState,
  formState => formState.entities[formState.edited]
);

export const selectEditedIdForm =createSelector(
  selectFormsState,
  formState => formState.edited
);
