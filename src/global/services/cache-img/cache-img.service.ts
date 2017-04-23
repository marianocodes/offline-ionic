import { Injectable } from '@angular/core';
import { Platform }   from 'ionic-angular';

import ImgCache       from 'imgcache.js';

interface IImgcache {
  el: HTMLImageElement,
  src: string
}

/**
 * This service is charged of provide the methods to cache the images
 */
@Injectable()
export class ImgcacheService {

  public imgQueue: IImgcache[] = [];

  constructor(platform: Platform) {

    platform.ready().then(() => {
        ImgCache.options.debug = true;
        ImgCache.init(()=> {
          for (let img of this.imgQueue) {
            this.cacheImg(img);
          }
        },
        ()=> { console.error('ImgCache init: error! Check the log for errors'); });
    });

  }

  /**
   * Check if library is ready, if so cache the img otherwise add it to the queue
   * @param obj
   */
  public processImg(obj: IImgcache): void {
    if (ImgCache.ready) {
      this.cacheImg(obj)
    } else {
      this.addToQueue(obj);
    }
  }

  /**
   * Add img to the queue including the element
   * @param obj
   */
  public addToQueue(obj: IImgcache): void {
    this.imgQueue.push(obj);
  }

  /**
   * Check if image has been cached before and use it otherwise it will save it
   * @param el {HTMLImageElement}
   */
  public cacheImg({ el, src }): void {
    // check if the images are already cached
    ImgCache.isCached(src, (path: string, success: boolean) => {
      // if not, it will be cached
      if (success) {
        ImgCache.useCachedFile(el);
      } else {
        ImgCache.cacheFile(src);
      }
    });
  }

}
