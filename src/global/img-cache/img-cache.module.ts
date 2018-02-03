import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LazyImgComponent } from './lazy-img.component';
import { LazyLoadDirective } from './lazy-img.directive';
import { ImgCacheService } from './img-cache.service';

const declarations = [
  LazyImgComponent,
  LazyLoadDirective
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
