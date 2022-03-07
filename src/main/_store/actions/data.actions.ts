import { createAction, props } from "@ngrx/store";
import { Model } from "src/main/_models/model.model";

export const LoadData = createAction(
  '[Collection] LoadData'
)
export const LoadDataSuccess = createAction(
  '[Collection] LoadDataSuccess',
  props<{ data: Model[] }>()
)
export const StopLoadData = createAction(
  '[Collection] StopLoadData',
)