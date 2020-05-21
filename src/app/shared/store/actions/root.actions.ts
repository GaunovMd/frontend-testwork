import { createAction, props } from "@ngrx/store";

import { IEventCard } from "../../interfaces/event-card.interface";

export enum RootActionTypes {

  // Home page
  HomePageEnter = "[Home Page] Home Page Enter",
  HomePageEnterComplete = "[Home Page] Home Page Enter Complete",
  HomePageEnterFailed = "[Home Page] Home Page Enter Failed",

  // Add new event
  AddNewEvent = "[Event API] Add New Event",
  AddNewEventComplete = "[Event API] Add New Event Complete",
  AddNewEventFailed = "[Event API] Add New Event Failed",
}

// Home page
export const homePageEnterAction =
  createAction(RootActionTypes.HomePageEnter);

export const homePageEnterActionComplete = createAction(
  RootActionTypes.HomePageEnterComplete,
  props<{ objects: IEventCard[] }>(),
);

export const homePageEnterActionFailed =
  createAction(RootActionTypes.HomePageEnterFailed);

// Add new event
export const addNewEventAction = createAction(
  RootActionTypes.AddNewEvent,
  props<{ object: IEventCard }>(),
);

export const addNewEventActionComplete = createAction(
  RootActionTypes.AddNewEventComplete,
  props<{ objects: IEventCard[] }>(),
);

export const addNewEventActionFailed =
  createAction(RootActionTypes.AddNewEventFailed);
