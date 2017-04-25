import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { OfflineApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LazyImgComponent }   from '../global/components/';

import { LazyLoadDirective }   from '../global/directives/';

import { ImgcacheService }    from '../global/services/';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    OfflineApp,
    HomePage,
    TabsPage,
    LazyImgComponent,
    LazyLoadDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(OfflineApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    OfflineApp,
    HomePage,
    TabsPage,
    LazyImgComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImgcacheService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
