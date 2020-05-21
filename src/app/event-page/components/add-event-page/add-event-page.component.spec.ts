import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { MockStore } from "@ngrx/store/testing";
import { configureTestSuite } from "ng-bullet";
import { configurePropertiesTestBed } from "src/app/shared/properties/_tests/test-bed.setup";

import { AddEventPageComponent } from "./add-event-page.component";

describe("AddEventPageComponent", () => {
  let component: AddEventPageComponent;
  let fixture: ComponentFixture<AddEventPageComponent>;
  let store: MockStore<any>;
  let storeSpy;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      AddEventPageComponent,
    ],
  }));

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    store = TestBed.get(Store);
    storeSpy = spyOn(store, "dispatch");
    fixture = TestBed.createComponent(AddEventPageComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    fixture.detectChanges();
  });

  it("should create", async(() => {
    expect(component).toBeTruthy();
  }));

  it("should init", () => {
    expect(() => {
      component.ngOnInit();
    }).not.toThrow();
  });

  it("should render form", async(() => {
    const content = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    expect(content.querySelector("app-event-form")).toBeTruthy();
  }));

  it("should render button", async(() => {
    const content = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    expect(content.querySelector("app-my-button")).toBeTruthy();
  }));
});
