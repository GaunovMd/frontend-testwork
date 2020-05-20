import { set } from 'monolite';
import { initialState } from '../state/root.state';
import { IRootState } from '../../interfaces/state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  homePageEnterAction,
  homePageEnterActionComplete,
  homePageEnterActionFailed,
  addNewEventAction,
  addNewEventActionComplete,
  addNewEventActionFailed,
  editEventPageEnterAction,
  editEventPageEnterActionComplete,
  editEventPageEnterActionFailed,
  editEventAction,
  editEventActionFailed,
  editEventActionComplete
} from '../actions/root.actions';
import { IEventCard } from '../../interfaces/event-card.interface';

export function rootReducer(state: IRootState | undefined, action: Action): IRootState {
  return reducer(state, action);
}

const reducer = createReducer<IRootState>(
  initialState,

  // Home page
  on(
    homePageEnterAction,
    oldState => set(oldState)
      .set(state => state.ui.homePageUI.isLoading, true)
      .end(),
  ),

  on(
    homePageEnterActionComplete,
    (oldState, eventCards: { objects: IEventCard[] }) => set(oldState)
      .set(state => state.data.eventCards, eventCards.objects)
      .set(state => state.ui.homePageUI.isLoading, false)
      .end(),
  ),

  on(
    homePageEnterActionFailed,
    oldState => set(oldState)
      .set(state => state.ui.homePageUI.isLoading, false)
      .end(),
  ),


  // Add new event
  on(
    addNewEventAction,
    (oldState) => set(oldState)
      .set(state => state.ui.eventPageUI.isLoading, true)
      .end(),
  ),

  on(
    addNewEventActionComplete,
    (oldState, eventCards: { objects: IEventCard[] }) => set(oldState)
      .set(state => state.data.eventCards, eventCards.objects)
      .set(state => state.ui.eventPageUI.isLoading, false)
      .end(),
  ),

  on(
    addNewEventActionFailed,
    oldState => set(oldState)
      .set(state => state.ui.eventPageUI.isLoading, false)
      .end(),
  ),


  // Edit event page
  on(
    editEventPageEnterAction,
    oldState => set(oldState)
      .set(state => state.ui.eventPageUI.isLoading, true)
      .end(),
  ),

  on(
    editEventPageEnterActionComplete,
    (oldState, eventCards: { objects: IEventCard[] }) => set(oldState)
      .set(state => state.data.eventCards,
        eventCards.objects ? eventCards.objects : oldState.data.eventCards)
      .set(state => state.ui.eventPageUI.isLoading, false)
      .end(),
  ),

  on(
    editEventPageEnterActionFailed,
    oldState => set(oldState)
      .set(state => state.ui.eventPageUI.isLoading, false)
      .end(),
  ),


  // Edit event
  on(
    editEventAction,
    oldState => set(oldState)
    .set(state => state.ui.eventPageUI.isLoading, true)
    .end(),
  ),

  on(
    editEventActionComplete,
    (oldState, eventCards: { objects: IEventCard[] }) => set(oldState)
    .set(state => state.data.eventCards, eventCards.objects)
    .set(state => state.ui.eventPageUI.isLoading, false)
    .end(),
  ),

  on(
    editEventActionFailed,
    oldState => set(oldState)
    .set(state => state.ui.eventPageUI.isLoading, false)
    .end(),
  )
);
