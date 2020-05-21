import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducer, MetaReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { localStorageSync } from "ngrx-store-localstorage";

import { AddEventPageComponent } from "../event-page/components/add-event-page/add-event-page.component";
import { EditEventPageComponent } from "../event-page/components/edit-event-page/edit-event-page.component";
import { EventFormComponent } from "../event-page/components/event-form/event-form.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { SharedModule } from "../shared/shared.module";
import { effects } from "../shared/store/effects";
import { reducers } from "../shared/store/reducers";

import { HeaderComponent } from "./components/header/header.component";
import { RootComponent } from "./containers/root.component";
import { RootRoutingModule } from "./root-routing.module";

// tslint:disable-next-line: no-any
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  bootstrap: [RootComponent],
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
    StoreModule.forRoot(
      reducers,
      { metaReducers },
    ),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    SharedModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
})
export class RootModule { }

// tslint:disable-next-line: no-any
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ["root"], rehydrate: true })(reducer);
}
