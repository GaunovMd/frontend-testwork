import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { components } from "./components";
import { rootStateKey } from "./interfaces/state.interface";
import { EventApiService } from "./services/event.api.service";
import { RootEffects } from "./store/effects/root.effects";
import { rootReducer } from "./store/reducers/root.reducers";

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(rootStateKey, rootReducer),
    EffectsModule.forFeature([
      RootEffects,
    ]),
  ],
  exports: [
    components,
  ],
  providers: [
    EventApiService,
  ],
})
export class SharedModule {
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error("Method not implemented.");
  }
}
