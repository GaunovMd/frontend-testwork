import { CommonModule } from "@angular/common";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, TestModuleMetadata } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RootModule } from "src/app/root/root.module";

import { EventApiService } from "../../services/event.api.service";
import { effects } from "../../store/effects";
import { reducers } from "../../store/reducers";

export function configurePropertiesTestBed(config: Partial<TestModuleMetadata>): void {
    TestBed
    .configureTestingModule({
        declarations: [],
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            RootModule,
            EffectsModule.forRoot(effects),
            StoreModule.forRoot(reducers),
            FormsModule,
            CommonModule,
        ],
        providers: [
            EventApiService,
        ],
        schemas: [NO_ERRORS_SCHEMA],
        ...config,
        ...{
            declarations: [
                ...config.declarations,
            ],
        },
    });
}
