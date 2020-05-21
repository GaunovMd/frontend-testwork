import { ComponentFixture, TestBed } from "@angular/core/testing";
import { configureTestSuite } from "ng-bullet";
import { configurePropertiesTestBed } from "src/app/shared/properties/_tests/test-bed.setup";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      HeaderComponent,
    ],
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
