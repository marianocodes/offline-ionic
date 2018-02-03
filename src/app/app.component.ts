import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ImgCacheService } from '../global';

@Component({
  templateUrl: 'app.html'
})
export class OfflineApp {

  @ViewChild(Nav)
  public nav: Nav;

  public rootPage = 'TabsPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, imgCacheService: ImgCacheService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.nav.setRoot(this.rootPage);
      // Init ImgCache lib
      imgCacheService.initImgCache()
        .subscribe((v) => console.log('init'), () => console.log('fail init'));
    });
  }
}
