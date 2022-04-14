// ***** for legacy ***** //
// import { Action, createReducer, on } from "@ngrx/store";
// import { Model } from "src/main/_models/model.model";
// import { DataActions } from "src/main/_store/actions";

// export interface DataState {
//   data: Model[];
// }

// export const initialState: DataState = {
//   data: [],
// }

// const DataReducer = createReducer(
//   initialState,
//   on(DataActions.LoadDataSuccess, (State, { data }) => ({
//     ...State,
//     data: data,
//   })),
// )

// export function reducer(state: DataState | undefined, action: Action) {
//   return DataReducer(state, action)
// }