import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { IEventCard } from "../shared/interfaces/event-card.interface";
import { homePageEnterAction } from "../shared/store/actions/root.actions";
import { IAppState } from "../shared/store/reducers";
import { selectEventCards, selectIsHistoryPageLoading } from "../shared/store/selectors/root.selectors";

@Component({
  selector: "app-home-page",
  styleUrls: ["./home-page.component.scss"],
  templateUrl: "./home-page.component.html",
})
export class HomePageComponent implements OnInit {

  eventCards$: Observable<IEventCard[]> = this.store.select(selectEventCards);
  isLoading$: Observable<boolean> = this.store.select(selectIsHistoryPageLoading);

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(homePageEnterAction());
  }
}
