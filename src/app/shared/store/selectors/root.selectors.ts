import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IEventCard } from "../../interfaces/event-card.interface";
import { IRootDataState, IRootSlice, IRootState, IRootUIState, rootStateKey } from "../../interfaces/state.interface";

const selectRootFeature =
  createFeatureSelector<IRootSlice, IRootState>(
    rootStateKey,
  );

const selectRootData =
  createSelector<IRootSlice, IRootState, IRootDataState>(
    selectRootFeature, (state) => state.data,
  );

const selectRootUI =
  createSelector<IRootSlice, IRootState, IRootUIState>(
    selectRootFeature, (state) => state.ui,
  );

export const selectEventCards =
  createSelector<IRootSlice, IRootDataState, IEventCard[]>(
    selectRootData, (state) => state.eventCards,
  );

export const selectIsHistoryPageLoading =
  createSelector<IRootSlice, IRootUIState, boolean>(
    selectRootUI, (state) => state.homePageUI.isLoading,
  );

export const selectIsEventCardsExist =
  createSelector<IRootSlice, IRootDataState, boolean>(
    selectRootData,
    (state) => Boolean(state.eventCards && state.eventCards.length),
  );

export const selectIsEventPageLoading =
  createSelector<IRootSlice, IRootUIState, boolean>(
    selectRootUI, (state) => state.eventPageUI.isLoading,
  );
