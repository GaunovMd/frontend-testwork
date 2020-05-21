import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EventApiService } from '../../services/event.api.service';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { effects } from '../../store/effects';
import { reducers } from '../../store/reducers';
import { RootModule } from 'src/app/root/root.module';

export function configurePropertiesTestBed(config: Partial<TestModuleMetadata>): void {
    TestBed
    .configureTestingModule({
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            RootModule,
            EffectsModule.forRoot(effects),
            StoreModule.forRoot(reducers),
            FormsModule,
            CommonModule,
        ],
        declarations: [],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
            EventApiService,
        ],
        ...config,
        ...{
            declarations: [
                ...config.declarations,
            ]
        }
    });
}
