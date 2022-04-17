import { createAction, props } from "@ngrx/store";
import { Settings } from "src/main/_models/settings.model";

export const LoadSettings = createAction(
  '[Collection] LoadSettings'
)
export const LoadSettingsSuccess = createAction(
  '[Collection] LoadSettingsSuccess',
  props<{ settings: Settings }>()
)
export const StopLoadSettings = createAction(
  '[Collection] StopLoadSettings',
)