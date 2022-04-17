import { createSelector } from "@ngrx/store";
import { Settings } from "src/main/_models/settings.model";
import { AppState } from "src/main/_store/reducers";

const appState = (state: any) => state.store;

const settingsState = createSelector(
  appState,
  (state: AppState) => state.settings
);

const paramSettings = createSelector(
  settingsState,
  (settings: Settings) => settings?.param
);