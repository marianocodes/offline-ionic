import { Component, ElementRef, Input } from '@angular/core';

import ImgCache from 'imgcache.js';

/**
 * This component will be incharge of cache images and use them when the app is offline
 */
@Component({
  selector:  'lazy-img',
  template: `
    <div [ngClass]="{ 'placeholder': hidden }">
      <img [ngClass]="{ 'active' : !hidden }" [src]="src" (load)="load()" (error)="error()" />
    </div>
  `
})
export class LazyImgComponent {

  @Input() src: string;

  public img: HTMLImageElement;

  constructor(public el: ElementRef) { };

  ngOnInit() {
    this.img = this.el.nativeElement.querySelector('img');
    this.img.crossOrigin = 'Anonymous';
  }

  load(): void {
    // check if the images is already cached
    ImgCache.isCached(this.src, (path: string, success: boolean) => {

      // if not, it will be cached
      if (!success) {
        ImgCache.cacheFile(this.img.src, () => { console.info('cached file'); });
      }

    });

  }

  /**
   * This function will be triggered when http request fails
   */
  error(): void {
    // check if the images is already cached
    ImgCache.isCached(this.img.src, (path: string, success: boolean) => {

      if(success) {
        // use cached img
        ImgCache.useCachedFile(this.img);
      } else {
        // remove img element
        this.img.remove();
      }

    });

  }

}
