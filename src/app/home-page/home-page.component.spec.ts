import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { MockStore } from '@ngrx/store/testing';
import { configureTestSuite } from 'ng-bullet';
import { configurePropertiesTestBed } from '../shared/properties/_tests/test-bed.setup';
import { Store } from '@ngrx/store';
import { homePageEnterAction } from '../shared/store/actions/root.actions';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let store: MockStore<any>;
  let storeSpy;

  configureTestSuite(() => configurePropertiesTestBed({
    declarations: [
      HomePageComponent
    ],
  }));

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    store = TestBed.get(Store);
    storeSpy = spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    expect(() => {
      component.ngOnInit();
    }).not.toThrow();
  });

  it('should dispatch newChargePageEnteredAction', () => {
    expect(store.dispatch).toHaveBeenCalledWith(homePageEnterAction());
  });

  it('should render event card', async(() => {
    const content = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    expect(content.querySelector('app-event-card')).toBeTruthy();
  }));
});
