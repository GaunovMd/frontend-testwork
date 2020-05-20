import { createAction, props } from '@ngrx/store';
import { IEventCard } from '../../interfaces/event-card.interface';

export enum RootActionTypes {
  HomePageEnter = '[Home Page] Home Page Enter',
  HomePageEnterComplete = '[Home Page] Home Page Enter Complete',
  HomePageEnterFailed = '[Home Page] Home Page Enter Failed',
}

export const homePageEnterAction =
  createAction(RootActionTypes.HomePageEnter);

export const homePageEnterActionComplete = createAction(
  RootActionTypes.HomePageEnterComplete,
  props<{ objects: IEventCard[] }>(),
);

export const homePageEnterActionFailed =
  createAction(RootActionTypes.HomePageEnterFailed);
