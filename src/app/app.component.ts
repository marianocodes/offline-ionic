import { Component, ViewChild } from '@angular/core';
import { Platform, Nav }  from 'ionic-angular';
import { StatusBar }      from 'ionic-native';

import { TabsPage }       from '../pages/';

import ImgCache           from 'imgcache.js';

@Component({
  template: `<ion-nav #nav></ion-nav>`
})
export class OfflineApp {

  @ViewChild('nav') nav: Nav;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // activated debug mode
      ImgCache.options.debug = true;
      // page is set until img cache has started
      ImgCache.init(()=>{ this.nav.setRoot(TabsPage); },
                    ()=>{ console.error('ImgCache init: error! Check the log for errors');});

    });

  }
}
