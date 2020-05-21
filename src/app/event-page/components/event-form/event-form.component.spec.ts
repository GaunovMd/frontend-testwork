import { ComponentFixture, TestBed } from "@angular/core/testing";
import { configureTestSuite } from "ng-bullet";
import { configurePropertiesTestBed } from "src/app/shared/properties/_tests/test-bed.setup";

import { EventFormComponent } from "./event-form.component";

describe("EventFormComponent", () => {
  let component: EventFormComponent;
  let fixture: ComponentFixture<EventFormComponent>;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      EventFormComponent,
    ],
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
