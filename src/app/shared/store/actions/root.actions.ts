import { createAction, props } from '@ngrx/store';
import { IEventCard } from '../../interfaces/event-card.interface';

export enum RootActionTypes {

  // Home page
  HomePageEnter = '[Home Page] Home Page Enter',
  HomePageEnterComplete = '[Home Page] Home Page Enter Complete',
  HomePageEnterFailed = '[Home Page] Home Page Enter Failed',

  // Add new event
  AddNewEvent = '[Event API] Add New Event',
  AddNewEventComplete = '[Event API] Add New Event Complete',
  AddNewEventFailed = '[Event API] Add New Event Failed',

  // Edit event page
  EditEventPageEnter = '[Edit Event Page] Edit Event Page Enter',
  EditEventPageEnterComplete = '[Edit Event Page] Edit Event Page Enter Complete',
  EditEventPageEnterFailed = '[Edit Event Page] Edit Event Page Init Enter Failed',

  // Edit new event
  EditEvent = '[Event API] Add New Event',
  EditEventComplete = '[Event API] Add New Event Complete',
  EditEventFailed = '[Event API] Add New Event Failed',
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
  props<{ objects: IEventCard }>(),
);

export const addNewEventActionComplete = createAction(
  RootActionTypes.AddNewEventComplete,
  props<{ objects: IEventCard[] }>(),
);

export const addNewEventActionFailed =
  createAction(RootActionTypes.AddNewEventFailed);


// Edit event page
export const editEventPageEnterAction =
  createAction(RootActionTypes.EditEventPageEnter);

export const editEventPageEnterActionComplete =
  createAction(RootActionTypes.EditEventPageEnterComplete,
  props<{ objects: IEventCard[] }>(),
);

export const editEventPageEnterActionFailed =
  createAction(RootActionTypes.EditEventPageEnterFailed);


// Edit event
export const editEventAction = createAction(
  RootActionTypes.EditEvent,
  props<{ objects: IEventCard }>(),
);

export const editEventActionComplete = createAction(
  RootActionTypes.EditEventComplete,
  props<{ objects: IEventCard[] }>(),
);

export const editEventActionFailed =
  createAction(RootActionTypes.EditEventFailed);
