import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofAction } from 'ngrx-actions';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { RootActions, HomePageEnterAction } from '../actions/root.actions';

type CurrentRootActions$ = Observable<RootActions>;

@Injectable()
export class RootEffects {
  // @Effect()
  // asd: CurrentRootActions$ = this.actions$.pipe(
  //   ofAction(HomePageEnterAction),
  //   switchMap(() => ),
  // );

  constructor(
    private actions$: Actions,
  ) {}
}
