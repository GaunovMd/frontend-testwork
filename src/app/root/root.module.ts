import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootRoutingModule } from './root-routing.module';
import { HomePageComponent } from '../home-page/home-page.component';
import { EventFormComponent } from '../event-page/components/event-form/event-form.component';
import { SharedModule } from '../shared/shared.module';
import { RootComponent } from './containers/root.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEventPageComponent } from '../event-page/components/add-event-page/add-event-page.component';
import { EditEventPageComponent } from '../event-page/components/edit-event-page/edit-event-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../shared/store/effects';
import { reducers } from '../shared/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEventPageComponent,
    EditEventPageComponent,
    EventFormComponent,
    HeaderComponent,
    HomePageComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RootRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    SharedModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
