import { set } from 'monolite';
import { initialState } from '../state/root.state';
import { IRootState } from '../../interfaces/state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { homePageEnterAction, homePageEnterActionComplete, homePageEnterActionFailed } from '../actions/root.actions';
import { IEventCard } from '../../interfaces/event-card.interface';

export function rootReducer(state: IRootState | undefined, action: Action): IRootState {
  return reducer(state, action);
}

const reducer = createReducer<IRootState>(
  initialState,

  on(
    homePageEnterAction,
    oldState => set(oldState)
      .set(state => state.ui.isHomeLoading, true)
      .end(),
  ),

  on(
    homePageEnterActionComplete,
    (oldState, eventCards: { objects: IEventCard[]}) => set(oldState)
      .set(state => state.data.eventCards, eventCards.objects)
      .set(state => state.ui.isHomeLoading, false)
      .end(),
  ),

  on(
    homePageEnterActionFailed,
    oldState => set(oldState)
      .set(state => state.ui.isHomeLoading, false)
      .end(),
  ),
);
