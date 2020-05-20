import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventCard } from '../interfaces/event-card.interface';

@Injectable()
export class EventApiService {
  getAllEvents(): Observable<IEventCard[]> {
    return new Observable(subscriber => {
      setTimeout(() => subscriber.next([{name: '1'},{name: '2'}]), 3000)
    });
  }
}