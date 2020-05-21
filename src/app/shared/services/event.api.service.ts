import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IEventCard } from "../interfaces/event-card.interface";

@Injectable()
export class EventApiService {
  getAllEvents(): Observable<IEventCard[]> {
    return new Observable((subscriber) => {
      setTimeout(() => subscriber.next([{
        id: "0",
        name: "1",
        address: "qew",
        date: new Date(),
      }, {
        id: "1",
        name: "2",
        address: "asd",
        date: new Date(),
      }]), 3000);
    });
  }

  addEvent(eventCard: IEventCard): Observable<void> {
    return new Observable((subscriber) => {
      setTimeout((() => subscriber.next()), 3000);
    });
  }
}
