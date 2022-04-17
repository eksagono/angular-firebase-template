import { createAction, props } from "@ngrx/store";
import { Data } from "src/main/_models/data.model";

export const LoadData = createAction(
  '[Collection] LoadData'
)
export const LoadDataSuccess = createAction(
  '[Collection] LoadDataSuccess',
  props<{ data: Data[] }>()
)
export const StopLoadData = createAction(
  '[Collection] StopLoadData',
)