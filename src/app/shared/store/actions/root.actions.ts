import { Action } from '@ngrx/store';
import { IEventCard } from '../../interfaces/event-card.interface';

export enum RootActionTypes {
  HomePageEnter = '[Home Page] Home Page Enter',
  HomePageEnterComplete = '[Home Page] Home Page Enter Complete',
  HomePageEnterFailed = '[Home Page] Home Page Enter Failed',
}

export class HomePageEnterAction implements Action {
  readonly type: string = RootActionTypes.HomePageEnter;
}

export class HomePageEnterActionComplete implements Action {
  readonly type: string = RootActionTypes.HomePageEnter;
  constructor(public payload: IEventCard[]) { }
}

export class HomePageEnterActionFailed implements Action {
  readonly type: string = RootActionTypes.HomePageEnter;
}

export type RootActions =
  | HomePageEnterAction
  | HomePageEnterActionComplete
  | HomePageEnterActionFailed;
