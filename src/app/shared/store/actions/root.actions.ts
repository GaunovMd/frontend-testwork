import { createAction, props } from '@ngrx/store';
import { IEventCard } from '../../interfaces/event-card.interface';

export enum RootActionTypes {

  // Home page
  HomePageEnter = '[Home Page] Home Page Enter',
  HomePageEnterComplete = '[Home Page] Home Page Enter Complete',
  HomePageEnterFailed = '[Home Page] Home Page Enter Failed',

  // Add new event page
  EventPageEnter = '[Event Page] Event Page Enter',
  EventPageInitialized = '[Event Page] Event Page Initialized',
  EventPageInitFailed = '[Event Page] Event Page Init Failed',

  // Add new event
  AddNewEvent = '[Event Page] Add New Event',
  AddNewEventComplete = '[Event Page] Add New Event Complete',
  AddNewEventFailed = '[Event Page] Add New Event Failed',

  // Edit new event
  EditEvent = '[Event Page] Add New Event',
  EditEventComplete = '[Event Page] Add New Event Complete',
  EditEventFailed = '[Event Page] Add New Event Failed',
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


// Add new event page
export const eventPageEnter =
  createAction(RootActionTypes.EventPageEnter);

export const eventPageInitialized =
  createAction(RootActionTypes.EventPageInitialized);

export const eventPageInitFailed =
  createAction(RootActionTypes.EventPageInitFailed);


// Add new event
export const addNewEventAction = createAction(
  RootActionTypes.AddNewEvent,
  props<{ objects: IEventCard }>(),
);

export const addNewEventActionComplete =
  createAction(RootActionTypes.AddNewEventComplete);

export const addNewEventActionFailed =
  createAction(RootActionTypes.AddNewEventFailed);


// Edit event
export const editEventAction = createAction(
  RootActionTypes.EditEvent,
  props<{ objects: IEventCard }>(),
);

export const editEventActionComplete =
  createAction(RootActionTypes.EditEventComplete);

export const editEventActionFailed =
  createAction(RootActionTypes.EditEventFailed);
