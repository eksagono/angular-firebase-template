import { createSelector } from "@ngrx/store";
import { Model } from "src/main/_models/model.model";
import { AppState } from "src/main/_store/reducers";
import { DataState } from "src/main/_store/reducers/data.reducer";

const dataState = (state: AppState) => state.data;

const listDataRaw = createSelector(
  dataState,
  (state: DataState) => state.data
);

export const listData = createSelector(
  listDataRaw,
  (listData: Model[]) => listData
);