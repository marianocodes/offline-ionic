import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ImgCacheService } from './img-cache.service';
// import {LazyImgComponent} from "../../components/lazy-img/lazy-img";
// import {LazyLoadDirective} from "../../directives/lazy-load/lazy-load";

const declarations = [
  // LazyImgComponent,
  // LazyLoadDirective
];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ...declarations ],
  exports: [ ...declarations ]
})
export class CacheImgModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CacheImgModule,
      providers: [
        ImgCacheService
      ]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: CacheImgModule) { }
}
