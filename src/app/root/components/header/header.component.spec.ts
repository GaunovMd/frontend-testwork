import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { MockStore } from "@ngrx/store/testing";
import { configureTestSuite } from "ng-bullet";
import { configurePropertiesTestBed } from "src/app/shared/properties/_tests/test-bed.setup";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore<any>;
  let storeSpy;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      HeaderComponent,
    ],
  }));

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    store = TestBed.get(Store);
    storeSpy = spyOn(store, "dispatch");
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
