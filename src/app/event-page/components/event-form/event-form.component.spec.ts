import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { MockStore } from "@ngrx/store/testing";
import { configureTestSuite } from "ng-bullet";
import { configurePropertiesTestBed } from "src/app/shared/properties/_tests/test-bed.setup";

import { EventFormComponent } from "./event-form.component";

describe("EventFormComponent", () => {
  let component: EventFormComponent;
  let fixture: ComponentFixture<EventFormComponent>;
  let store: MockStore<any>;
  let storeSpy;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      EventFormComponent,
    ],
  }));

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    store = TestBed.get(Store);
    storeSpy = spyOn(store, "dispatch");
    fixture = TestBed.createComponent(EventFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
