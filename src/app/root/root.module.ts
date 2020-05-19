import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { HomePageComponent } from '../home-page/home-page.component';
import { AddEventPageComponent } from '../add-event-page/add-event-page.component';
import { AddEventFormComponent } from '../add-event-page/add-event-form/add-event-form.component';
import { SharedModule } from '../shared/shared.module';
import { RootComponent } from './containers/root.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AddEventPageComponent,
    AddEventFormComponent,
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
