import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";

import { IEventCard } from "../../interfaces/event-card.interface";
import { EventApiService } from "../../services/event.api.service";
import {
  addNewEventAction,
  addNewEventActionComplete,
  addNewEventActionFailed,
  homePageEnterAction,
  homePageEnterActionComplete,
  homePageEnterActionFailed,
} from "../actions/root.actions";
import { IAppState } from "../reducers";
import { selectEventCards, selectIsEventCardsExist } from "../selectors/root.selectors";

@Injectable()
export class RootEffects {
  homePageEnter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homePageEnterAction),
      withLatestFrom(
        this.store.pipe(select(selectIsEventCardsExist)),
        this.store.pipe(select(selectEventCards)),
      ),
      switchMap(([_, IsEventCardsExist, eventCards]) =>
        this.getEventCards(IsEventCardsExist, eventCards).pipe(
          map((objects) => homePageEnterActionComplete({ objects })),
          catchError((error) => {
            console.error(error);
            return of(homePageEnterActionFailed());
          }),
        ),
      ),
    ),
  );

  addEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addNewEventAction),
      withLatestFrom(
        this.store.pipe(select(selectIsEventCardsExist)),
        this.store.pipe(select(selectEventCards)),
      ),
      switchMap(([{ object }, IsEventCardsExist, eventCards]) =>
        this.getEventCards(IsEventCardsExist, eventCards).pipe(
          map((events) => {
            this.router.navigate(["/home"]);
            return addNewEventActionComplete({
              objects: [
                ...events,
                object,
              ],
            });
          }),
          catchError((error) => {
            console.error(error);
            return of(addNewEventActionFailed());
          }),
        )),
    ),
  );

  constructor(
    private actions$: Actions,
    private eventApiService: EventApiService,
    private store: Store<IAppState>,
    private router: Router,
  ) {
  }

  getEventCards(IsEventCardsExist: boolean, eventCards: IEventCard[]): Observable<IEventCard[]> {
    return IsEventCardsExist ?
      of(eventCards) :
      this.eventApiService.getAllEvents();
  }
}
