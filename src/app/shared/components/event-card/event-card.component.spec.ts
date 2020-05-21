import { ComponentFixture, TestBed } from "@angular/core/testing";
import { configureTestSuite } from "ng-bullet";

import { IEventCard } from "../../interfaces/event-card.interface";
import { configurePropertiesTestBed } from "../../properties/_tests/test-bed.setup";

import { EventCardComponent } from "./event-card.component";

describe("EventCardComponent", () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  const currentData = new Date();

  const cardData: IEventCard = {
    address: "test",
    date: currentData,
    id: "1",
    name: "test",
  };

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      EventCardComponent,
    ],
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    component.cardData = cardData;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display data", () => {
    const content = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    expect(content.querySelector(".card-name").innerHTML)
      .toContain(cardData.name);
    expect(content.querySelector(".location").innerHTML)
      .toContain(cardData.address);
    expect(content.querySelector(".date").innerHTML)
      .toContain(component.getHumanDate(cardData.date));
  });
});
