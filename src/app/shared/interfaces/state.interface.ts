import { IEventCard } from './event-card.interface';

export const rootStateKey = 'root';

export interface IRootSlice {
  [rootStateKey]: IRootState;
}

export interface IEventPageUI {
  isLoading: boolean;
}

export interface IHomePageUI {
  isLoading: boolean;
}

export interface IRootUIState {
  homePageUI: IHomePageUI;
  eventPageUI: IEventPageUI;
}

export interface IRootDataState {
  eventCards: IEventCard[];
}

export interface IRootState {
  ui: IRootUIState;
  data: IRootDataState;
}
