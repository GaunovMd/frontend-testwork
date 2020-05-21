import { Action, createReducer, on } from "@ngrx/store";
import { set } from "monolite";

import { IEventCard } from "../../interfaces/event-card.interface";
import { IRootState } from "../../interfaces/state.interface";
import {
  addNewEventAction,
  addNewEventActionComplete,
  addNewEventActionFailed,
  homePageEnterAction,
  homePageEnterActionComplete,
  homePageEnterActionFailed,
} from "../actions/root.actions";
import { initialState } from "../state/root.state";

export function rootReducer(state: IRootState | undefined, action: Action): IRootState {
  return reducer(state, action);
}

const reducer = createReducer<IRootState>(
  initialState,

  // Home page
  on(
    homePageEnterAction,
    (oldState) => set(oldState)
      .set((state) => state.ui.homePageUI.isLoading, true)
      .end(),
  ),

  on(
    homePageEnterActionComplete,
    (oldState, eventCards: { objects: IEventCard[] }) => set(oldState)
      .set((state) => state.data.eventCards, eventCards.objects)
      .set((state) => state.ui.homePageUI.isLoading, false)
      .end(),
  ),

  on(
    homePageEnterActionFailed,
    (oldState) => set(oldState)
      .set((state) => state.ui.homePageUI.isLoading, false)
      .end(),
  ),

  // Add new event
  on(
    addNewEventAction,
    (oldState) => set(oldState)
      .set((state) => state.ui.eventPageUI.isLoading, true)
      .end(),
  ),

  on(
    addNewEventActionComplete,
    (oldState, eventCards: { objects: IEventCard[] }) => set(oldState)
      .set((state) => state.data.eventCards, eventCards.objects)
      .set((state) => state.ui.eventPageUI.isLoading, false)
      .end(),
  ),

  on(
    addNewEventActionFailed,
    (oldState) => set(oldState)
      .set((state) => state.ui.eventPageUI.isLoading, false)
      .end(),
  ),
);
