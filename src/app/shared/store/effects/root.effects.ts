import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, combineLatest, Observable } from 'rxjs';
import { map, switchMap, catchError, first } from 'rxjs/operators';
import { homePageEnterAction, homePageEnterActionComplete, homePageEnterActionFailed, addNewEventAction, addNewEventActionComplete, addNewEventActionFailed } from '../actions/root.actions';
import { EventApiService } from '../../services/event.api.service';
import { IAppState } from '../reducers';
import { selectEventCards, selectIsEventCardsExist } from '../selectors/root.selectors';
import { IEventCard } from '../../interfaces/event-card.interface';


@Injectable()
export class RootEffects {
  homePageEnter$ = createEffect(() =>
    combineLatest([
      this.actions$.pipe(ofType(homePageEnterAction)),
      this.store.pipe(select(selectIsEventCardsExist)),
      this.store.pipe(select(selectEventCards)),
    ]).pipe(
      first(),
      switchMap(([{ }, IsEventCardsExist, eventCards]) =>
        this.getEventCards(IsEventCardsExist, eventCards).pipe(
          map((objects) => homePageEnterActionComplete({ objects })),
          catchError((error) => {
            console.error(error);
            return of(homePageEnterActionFailed());
          }),
        )),
      catchError((error) => {
        console.error(error);
        return of(homePageEnterActionFailed());
      }),
    )
  );

  addEvent$ = createEffect(() =>
    combineLatest([
      this.actions$.pipe(ofType(addNewEventAction)),
      this.store.pipe(select(selectIsEventCardsExist)),
      this.store.pipe(select(selectEventCards)),
    ]).pipe(
      first(),
      switchMap(([{ object }, IsEventCardsExist, eventCards]) =>
        this.getEventCards(IsEventCardsExist, eventCards).pipe(
          map(events => {
            window.location.href = '/home';
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
      catchError((error) => {
        console.error(error);
        return of(addNewEventActionFailed());
      }),
    )
  );

  constructor(
    private actions$: Actions,
    private eventApiService: EventApiService,
    private store: Store<IAppState>,
  ) {
  }


  getEventCards(IsEventCardsExist: boolean, eventCards: IEventCard[]): Observable<IEventCard[]> {
    return IsEventCardsExist ?
      of(eventCards) :
      this.eventApiService.getAllEvents();
  }
}
