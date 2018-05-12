import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common"
import {LazyImgComponent} from './lazy-img/lazy-img';
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  declarations: [LazyImgComponent],
  imports: [
    DirectivesModule,
    CommonModule],
  exports: [LazyImgComponent]
})
export class ComponentsModule {
}
