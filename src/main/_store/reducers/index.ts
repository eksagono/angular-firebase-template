import { createReducer, on } from "@ngrx/store";
import { Model } from "src/main/_models/model.model";
import { DataActions } from "../actions";

export interface AppState {
  data: Model[];
}

export const initialState: AppState = {
  data: [],
}

export const reducers = createReducer(
  initialState,
  on(DataActions.LoadDataSuccess, (State, { data }) => ({
    ...State,
    data: data,
  })),
)

// ***** for legacy ***** //
// import * as fromDataReducer from './data.reducer';
// import { ActionReducerMap } from '@ngrx/store';

// export interface AppState {
//   data: fromDataReducer.DataState;
// }

// export const reducers: ActionReducerMap<AppState> = {
//   data: fromDataReducer.reducer
// }