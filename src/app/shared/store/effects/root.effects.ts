import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import {
  homePageEnterAction,
  homePageEnterActionComplete,
  homePageEnterActionFailed,
  addNewEventAction,
  addNewEventActionComplete,
  addNewEventActionFailed
} from '../actions/root.actions';
import { EventApiService } from '../../services/event.api.service';
import { IAppState } from '../reducers';
import { selectEventCards, selectIsEventCardsExist } from '../selectors/root.selectors';
import { IEventCard } from '../../interfaces/event-card.interface';
import { Router } from '@angular/router';


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
        )
      ),
    )
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
          map(events => {
            this.router.navigate(['/home']);
            return addNewEventActionComplete({
              objects: [
                ...events,
                object,
              ]
            });
          }),
          catchError((error) => {
            console.error(error);
            return of(addNewEventActionFailed());
          }),
        )),
    )
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
