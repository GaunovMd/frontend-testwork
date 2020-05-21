import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { MockStore } from "@ngrx/store/testing";
import { configureTestSuite } from "ng-bullet";

import { IRootState } from "../shared/interfaces/state.interface";
import { configurePropertiesTestBed } from "../shared/properties/_tests/test-bed.setup";
import { homePageEnterAction } from "../shared/store/actions/root.actions";

import { HomePageComponent } from "./home-page.component";

describe("HomePageComponent", () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let store: MockStore<IRootState>;
    /* tslint:disable:no-unused-variable */
  let storeSpy;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      HomePageComponent,
    ],
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    storeSpy = spyOn(store, "dispatch");
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should init", () => {
    expect(() => {
      component.ngOnInit();
    }).not.toThrow();
  });

  it("should dispatch newChargePageEnteredAction", () => {
    expect(store.dispatch).toHaveBeenCalledWith(homePageEnterAction());
  });

  it("should render event card", async(() => {
    const content = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    expect(content.querySelector("app-event-card")).toBeTruthy();
  }));
});
