import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';

import ImgCache from '@chrisben/imgcache.js';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { map, take, flatMap, switchMapTo, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { bindCallback } from 'rxjs/observable/bindCallback';

import { normalizeUrlIos } from '../utils';

/**
 * This service is charged of provide the methods to cache the images
 */
@Injectable()
export class ImgCacheService {

  private initNotifier$: ReplaySubject<string> = new ReplaySubject();

  constructor(private platform: Platform, private file: File) {
    // change on production mode
    ImgCache.options.debug = true;
  }

  public get notifier$(): Observable<string> {
    return this.initNotifier$.asObservable();
  }

  /**
   * Init imgCache library
   * @return {Promise}
   */
  public initImgCache(): Observable<string> {

    const init$ = bindCallback<string>(ImgCache.init)();

    return init$.pipe(
      take(1),
      tap(() => this.initNotifier$.next('init'))
    );
  }

  /**
   * Cache is image by using a url. If the image is already cached this method
   * will return the URL
   * @param src {string}
   */
  public cache(src: string): Observable<string> {
    return this.notifier$.pipe(
      switchMapTo(
        this.isCached(src)
          .pipe(
            flatMap(([path, success]: [string, boolean]) => {
              return success ? this.getCachedFileURL(path) : this.cacheFile(path);
            }),
            map((url: string) => {
              if (this.platform.is('ios')) {
                return this.normalizeURlWKWview(url);
              }
              return url;
            })
          )
      )
    );
  }

  /**
   * WKWebview doesn't accept urls with file;// or cvdfile:// protocols.
   * The url is formatted and fix to find the img
   * @param url
   * @return {string} - url formatted
   */
  private normalizeURlWKWview(url: string) {
    const urlIos = `${normalizeUrlIos(this.file.applicationStorageDirectory)}Library/files/${normalizeUrlIos(url)}`;
    return urlIos.replace('/localhost/persistent', '');
  }

  /**
   * Get file URL if cached
   * @param src - image url
   */
  private getCachedFileURL(src: string): Observable<string> {
    return bindCallback<string, string[]>(ImgCache.getCachedFileURL)(src)
      .pipe(
        map((urls: string[]) => urls[1])
      );
  }

  /**
   * Cache image using a url
   * @param src {string}
   */
  private cacheFile(src: string): Observable<string> {
    return bindCallback<string, string>(ImgCache.cacheFile)(src);
  }

  /**
   * Check if image is already cached
   * @param src
   */
  private isCached(src: string): Observable<[string, boolean]> {
    return bindCallback<string, [string, boolean]>(ImgCache.isCached)(src);
  }
}
