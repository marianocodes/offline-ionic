import { Component, ElementRef, Input, OnInit } from '@angular/core';

import ImgCache from 'imgcache.js';

/**
 * This component will be in charge of caching images and use them when the app is offline
 */
@Component({
  selector: 'lazy-img',
  template: `
    <div [ngClass]="{ 'placeholder': hidden }">
      <img [ngClass]="{ 'active': !hidden }" [src]="src" (load)="load()" (error)="error()" />
    </div>
  `
})
export class LazyImgComponent implements OnInit {

  @Input() src: string;

  public img: HTMLImageElement;
  public hidden: boolean;

  constructor(public el: ElementRef) {
    this.hidden = true;
  };

  ngOnInit() {
    this.img = this.el.nativeElement.querySelector('img');
    this.img.crossOrigin = 'Anonymous';

    // check if the images are already cached
    ImgCache.isCached(this.src, (path: string, success: boolean) => {

      // if not, it will be cached
      if (success) {

        ImgCache.useCachedFile(this.img, () => {  });

      } else {

        ImgCache.cacheFile(this.src, () => { });

      }

    });
  }

  /**
   * This function will show the image when it has loaded
   */
  load(): void {
    this.hidden = false;
  }

  /**
   * This function will be triggered when http request fails
   */
  error(): void {
    this.img.remove();
  }

}
