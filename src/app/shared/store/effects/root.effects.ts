import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, combineLatest } from 'rxjs';
import { map, switchMap, catchError, first } from 'rxjs/operators';
import { homePageEnterAction, homePageEnterActionComplete, homePageEnterActionFailed } from '../actions/root.actions';
import { EventApiService } from '../../services/event.api.service';
import { IAppState } from '../reducers';
import { selectEventCards, selectIsEventCardsExist } from '../selectors/root.selectors';


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
        IsEventCardsExist ?
          of(eventCards) :
          this.eventApiService.getAllEvents()),
      map((objects) => homePageEnterActionComplete({ objects })),
      catchError((error) => {
        console.error(error);
        return of(homePageEnterActionFailed());
      }),
    )
  );

  constructor(
    private actions$: Actions,
    private eventApiService: EventApiService,
    private store: Store<IAppState>,
  ) { }
}
