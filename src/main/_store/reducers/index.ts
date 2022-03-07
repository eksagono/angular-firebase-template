import * as fromDataReducer from './data.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  data: fromDataReducer.DataState;
}

export const reducers: ActionReducerMap<AppState> = {
  data: fromDataReducer.reducer
}