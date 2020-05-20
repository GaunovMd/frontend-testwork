import { IEventCard } from './event-card.interface';

export const rootStateKey = 'root';

export interface IRootSlice {
  [rootStateKey]: IRootState;
}

export interface IRootUIState {
  isHomeLoading: boolean;
}

export interface IRootDataState {
  eventCards: IEventCard[];
}

export interface IRootState {
  ui: IRootUIState;
  data: IRootDataState;
}
