import { Action, Store } from 'ngrx-actions';
import { initialState } from '../state/root.state';
import {
  HomePageEnterAction,
  HomePageEnterActionComplete,
  HomePageEnterActionFailed,
} from '../actions/root.actions';
import { IState } from '../../interfaces/state.interface';

@Store(initialState)
export class RootState {

  @Action(HomePageEnterAction)
  homePageEnterAction(state: IState): IState {
    return {
      ...state,
      ui: {
        ...state.ui,
        isHomeLoading: true,
      }
    };
  }

  @Action(HomePageEnterActionComplete)
  homePageEnterActionComplete(
    state: IState,
    action: HomePageEnterActionComplete,
  ): IState {
    return {
      ...state,
      ui: {
        ...state.ui,
        isHomeLoading: true,
      },
      data: {
        ...state.data,
        eventCards: action.payload,
      }
    }
  }

  @Action(HomePageEnterActionFailed)
  homePageEnterActionFailed(state: IState): IState {
    return {
      ...state,
      ui: {
        ...state.ui,
        isHomeLoading: false,
      }
    };
  }
}