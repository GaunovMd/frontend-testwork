import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { HomePageComponent } from '../home-page/home-page.component';
import { EventFormComponent } from '../event-page/components/event-form/event-form.component';
import { SharedModule } from '../shared/shared.module';
import { RootComponent } from './containers/root.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEventPageComponent } from '../event-page/components/add-event-page/add-event-page.component';
import { EditEventPageComponent } from '../event-page/components/edit-event-page/edit-event-page.component';

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
    RootRoutingModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
