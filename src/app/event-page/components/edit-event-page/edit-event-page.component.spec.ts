import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { EditEventPageComponent } from "./edit-event-page.component";

describe("EditEventPageComponent", () => {
  let component: EditEventPageComponent;
  let fixture: ComponentFixture<EditEventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventPageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
