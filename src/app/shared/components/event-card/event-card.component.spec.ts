import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';
import { MockStore } from '@ngrx/store/testing';
import { configureTestSuite } from 'ng-bullet';
import { configurePropertiesTestBed } from '../../properties/_tests/test-bed.setup';
import { Store } from '@ngrx/store';
import { IEventCard } from '../../interfaces/event-card.interface';
import { By } from '@angular/platform-browser';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;
  let store: MockStore<any>;
  let storeSpy;

  const currentData = new Date();

  const cardData: IEventCard = {
    id: '1',
    name: 'test',
    address: 'test',
    date: currentData,
  };

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      EventCardComponent
    ],
  }));

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    store = TestBed.get(Store);
    storeSpy = spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    component.cardData = cardData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data', () => {
    const content = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    expect(content.querySelector('.card-name').innerHTML)
      .toContain(cardData.name);
    expect(content.querySelector('.location').innerHTML)
      .toContain(cardData.address);
    expect(content.querySelector('.date').innerHTML)
      .toContain(component.getHumanDate(cardData.date));
  });
});
