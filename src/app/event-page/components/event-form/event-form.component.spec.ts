import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EventFormComponent } from './event-form.component';
import { MockStore } from '@ngrx/store/testing';
import { configureTestSuite } from 'ng-bullet';
import { configurePropertiesTestBed } from 'src/app/shared/properties/_tests/test-bed.setup';
import { Store } from '@ngrx/store';


describe('EventFormComponent', () => {
  let component: EventFormComponent;
  let fixture: ComponentFixture<EventFormComponent>;
  let store: MockStore<any>;
  let storeSpy;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      EventFormComponent
    ],
  }));

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    store = TestBed.get(Store);
    storeSpy = spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(EventFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
