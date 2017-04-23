import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { ImgcacheService } from '../../services/';

/**
 * Component in charge of lazy load images and cache them
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
   public hidden: boolean = true;

  constructor(public imgCacheService: ImgcacheService, public el: ElementRef) { }

  ngOnInit(): void {
    this.img = this.el.nativeElement.querySelector('img');
    this.img.crossOrigin = 'Anonymous';

    this.imgCacheService.processImg({el: this.img, src: this.src});
  }

  /**
   * Show the image when it has loaded
   */
  load(): void {
    this.hidden = false;
  }

  /**
   * Will be triggered when http request fails
   */
  error(): void {
    this.img.remove();
  }

}
