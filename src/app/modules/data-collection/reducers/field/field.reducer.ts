import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Field} from './field.model';
import {FieldActions, FieldActionTypes} from './field.actions';

export interface FieldState extends EntityState<Field> {
  edited: string
}

export const adapter: EntityAdapter<Field> = createEntityAdapter<Field>({selectId: field=>field._id}
);

export const initialState: FieldState = adapter.getInitialState({
  edited: ''
});

export function reducer(
  state = initialState,
  action: FieldActions
): FieldState {
  switch (action.type) {
    case FieldActionTypes.AddField: {
      return adapter.addOne(action.payload.field, state);
    }

    case FieldActionTypes.UpsertField: {
      return adapter.upsertOne(action.payload.field, state);
    }

    case FieldActionTypes.AddFields: {
      return adapter.addMany(action.payload.fields, state);
    }

    case FieldActionTypes.UpsertFields: {
      return adapter.upsertMany(action.payload.fields, state);
    }

    case FieldActionTypes.UpdateField: {
      return adapter.updateOne(action.payload.field, state);
    }

    case FieldActionTypes.UpdateFields: {
      return adapter.updateMany(action.payload.fields, state);
    }

    case FieldActionTypes.DeleteField: {
      return adapter.removeOne(action.payload.id, state);
    }

    case FieldActionTypes.DeleteFields: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case FieldActionTypes.LoadFields: {
      return adapter.addAll(action.payload.fields, state);
    }

    case FieldActionTypes.ClearFields: {
      return adapter.removeAll(state);
    }

    case FieldActionTypes.EditField: {
      return {
        ...state,
        edited: action.payload.id
      };
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
