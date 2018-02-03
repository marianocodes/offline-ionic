import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ImgCacheService } from '../../global';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, imgCacheService: ImgCacheService) { }

}
