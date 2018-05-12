import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';

import {ComponentsModule} from "../../components/components.module";
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    ComponentsModule,
    DirectivesModule,

    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {
}
