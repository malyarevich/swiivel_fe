import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Person } from './person.model';
import { PersonActions, PersonActionTypes } from './person.actions';

export interface PersonState extends EntityState<Person> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({selectId: person=>person.id});

export const initialState: PersonState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PersonActions
): PersonState {
  switch (action.type) {
    case PersonActionTypes.AddPerson: {
      return adapter.addOne(action.payload.person, state);
    }

    case PersonActionTypes.UpsertPerson: {
      return adapter.upsertOne(action.payload.person, state);
    }

    case PersonActionTypes.AddPersons: {
      return adapter.addMany(action.payload.persons, state);
    }

    case PersonActionTypes.UpsertPersons: {
      return adapter.upsertMany(action.payload.persons, state);
    }

    case PersonActionTypes.UpdatePerson: {
      return adapter.updateOne(action.payload.person, state);
    }

    case PersonActionTypes.UpdatePersons: {
      return adapter.updateMany(action.payload.persons, state);
    }

    case PersonActionTypes.DeletePerson: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PersonActionTypes.DeletePersons: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PersonActionTypes.LoadPersons: {
      return adapter.addAll(action.payload.persons, state);
    }

    case PersonActionTypes.ClearPersons: {
      return adapter.removeAll(state);
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
