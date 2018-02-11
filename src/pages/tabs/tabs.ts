import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = 'HomePage';
  public tab2Root = 'AboutPage';
  public tab3Root = 'ContactPage';

  constructor() { }
}
