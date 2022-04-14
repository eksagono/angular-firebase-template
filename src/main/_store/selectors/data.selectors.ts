import { createSelector } from "@ngrx/store";
import { Model } from "src/main/_models/model.model";
import { AppState } from "src/main/_store/reducers";

const appState = (state: any) => state.store

const listDataRaw = createSelector(
  appState,
  (state: AppState) => state.data
);

export const listData = createSelector(
  listDataRaw,
  (listData: Model[]) => listData
);