import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components,
  ]
})
export class SharedModule {
  static forRoot(): any[] | import('@angular/core').Type<any> | import('@angular/core').ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
