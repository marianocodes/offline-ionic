import { NgModule }              from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { OfflineApp }       from './app.component';

import { LazyImgComponent } from '../global/components/';

import { AboutPage,
         ContactPage,
         HomePage,
         TabsPage } from '../pages/';

const pages = [ AboutPage,
               ContactPage,
               HomePage,
               TabsPage ];

const components = [ LazyImgComponent ];

@NgModule({
  declarations: [
    OfflineApp,
    pages,
    components
  ],
  imports: [
    IonicModule.forRoot(OfflineApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    OfflineApp,
    pages,
    components
  ],
  providers: []
})
export class AppModule { }
