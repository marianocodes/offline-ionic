import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactPage } from './contact';
import { CacheImgModule } from '../../global';

@NgModule({
  declarations: [ ContactPage ],
  imports: [
    CacheImgModule,

    IonicPageModule.forChild(ContactPage),
  ],
  exports: [ ContactPage ]
})
export class ContactPageModule {}
