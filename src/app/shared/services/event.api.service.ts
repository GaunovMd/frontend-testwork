import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IEventCard } from "../interfaces/event-card.interface";

@Injectable()
export class EventApiService {
  getAllEvents(): Observable<IEventCard[]> {
    return new Observable((subscriber) => {
      setTimeout(() => subscriber.next([{
        address: "qew",
        date: new Date(),
        id: "0",
        name: "1",
      }, {
        address: "asd",
        date: new Date(),
        id: "1",
        name: "2",
      }]), 3000);
    });
  }

  addEvent(eventCard: IEventCard): Observable<void> {
    return new Observable((subscriber) => {
      setTimeout((() => subscriber.next()), 3000);
    });
  }
}
