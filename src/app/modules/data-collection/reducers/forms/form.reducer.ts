import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Form } from './form.model';
import {ClearEditForm, FormActions, FormActionTypes} from './form.actions';

export interface FormState extends EntityState<Form> {
  edited: string
}

export const startedForm: Form = {
  fields:[],
  _id:'0',
  name:'',
  updated_at:'',
  created_at:'',
  api_token:'123',
  link:''
};

export const adapter: EntityAdapter<Form> = createEntityAdapter<Form>({selectId: form=>form._id}
);

export const initialState: FormState = adapter.getInitialState({
  edited: ''
});

export function reducer(
  state = initialState,
  action: FormActions
): FormState {
  switch (action.type) {
    case FormActionTypes.AddForm: {
      return  adapter.addOne(startedForm, state);
    }




    case FormActionTypes.UpdateForm: {
      return adapter.updateOne(action.payload.form, state);
    }



    case FormActionTypes.DeleteForm: {
      return adapter.removeOne(action.payload.id, state);
    }

    case FormActionTypes.FillForm: {
      return state;
    }


    case FormActionTypes.EditForm: {
      return {
        ...state,
        edited: action.payload.id
      };
    }

    case FormActionTypes.ClearEditForm: {
      return {
        ...state,
        edited: ''
      };
    }

    case FormActionTypes.SendForm: {
       return state;
    }




    case FormActionTypes.LoadForms: {
      return adapter.addAll(action.payload.forms, state);
    }



    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getEdited= (state: FormState) => state.edited;
