import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { File } from '@ionic-native/file';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OfflineApp } from './app.component';
import { CacheImgModule } from '../global';

@NgModule({
  declarations: [
    OfflineApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(OfflineApp),

    CacheImgModule.forRoot(),
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    OfflineApp
  ],
  providers: [
    File,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
