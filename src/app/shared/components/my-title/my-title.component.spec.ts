import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { MockStore } from "@ngrx/store/testing";
import { configureTestSuite } from "ng-bullet";

import { configurePropertiesTestBed } from "../../properties/_tests/test-bed.setup";

import { MyTitleComponent } from "./my-title.component";

describe("MyTitleComponent", () => {
  let component: MyTitleComponent;
  let fixture: ComponentFixture<MyTitleComponent>;
  let store: MockStore<any>;
  let storeSpy;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      MyTitleComponent,
    ],
  }));

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    store = TestBed.get(Store);
    storeSpy = spyOn(store, "dispatch");
    fixture = TestBed.createComponent(MyTitleComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
