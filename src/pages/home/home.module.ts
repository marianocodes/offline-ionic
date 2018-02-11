import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { CacheImgModule } from '../../global';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    CacheImgModule,

    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
