import { createReducer, on } from "@ngrx/store";
import { Data } from "src/main/_models/data.model";
import { Settings } from "src/main/_models/settings.model";
import { DataActions, SettingsActions } from "src/main/_store/actions";

export interface AppState {
  settings: Settings,
  data: Data[]
}

export const initialState: AppState = {
  settings: {} as Settings,
  data: []
}

export const reducers = createReducer(
  initialState,
  on(SettingsActions.LoadSettingsSuccess, (State, { settings }) => ({
    ...State,
    settings: settings,
  })),
  on(DataActions.LoadDataSuccess, (State, { data }) => ({
    ...State,
    data: data,
  }))
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