import { ComponentFixture, TestBed } from "@angular/core/testing";
import { configureTestSuite } from "ng-bullet";

import { configurePropertiesTestBed } from "../../properties/_tests/test-bed.setup";

import { MyTitleComponent } from "./my-title.component";

describe("MyTitleComponent", () => {
  let component: MyTitleComponent;
  let fixture: ComponentFixture<MyTitleComponent>;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      MyTitleComponent,
    ],
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTitleComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
