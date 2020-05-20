import { IRootSlice } from 'src/app/shared/interfaces/state.interface';
import { ActionReducerMap } from '@ngrx/store';
import { rootReducer } from './root.reducers';

export type IAppState =
  IRootSlice;

export const reducers: ActionReducerMap<Pick<IAppState, 'root'>> = {
    root: rootReducer,
};
