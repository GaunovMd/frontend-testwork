import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEventCard } from '../shared/interfaces/event-card.interface';
import { IAppState } from '../shared/store/reducers';
import { selectEventCards, selectIsHomeLoading, selectIsEventCardsExist } from '../shared/store/selectors/root.selectors';
import { homePageEnterAction } from '../shared/store/actions/root.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  eventCards$: Observable<IEventCard[]> = this.store.select(selectEventCards);
  isHomeLoading$: Observable<boolean> = this.store.select(selectIsHomeLoading);
  adsd = this.store.select(selectIsEventCardsExist);

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(homePageEnterAction());
  }
}
