import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IRootState, IRootSlice, rootStateKey, IRootDataState, IRootUIState } from '../../interfaces/state.interface';
import { IEventCard } from '../../interfaces/event-card.interface';

const selectRootFeature =
  createFeatureSelector<IRootSlice, IRootState>(
    rootStateKey
  );

const selectRootData =
  createSelector<IRootSlice, IRootState, IRootDataState>(
    selectRootFeature, state => state.data,
  );

const selectRootUI =
  createSelector<IRootSlice, IRootState, IRootUIState>(
    selectRootFeature, state => state.ui,
  );

export const selectEventCards =
  createSelector<IRootSlice, IRootDataState, IEventCard[]>(
    selectRootData, state => state.eventCards
  );

export const selectIsHistoryPageLoading =
  createSelector<IRootSlice, IRootUIState, boolean>(
    selectRootUI, state => state.eventPageUI.isLoading
  );

export const selectIsEventCardsExist =
  createSelector<IRootSlice, IRootDataState, boolean>(
    selectRootData,
    state => Boolean(state.eventCards && state.eventCards.length)
  );
