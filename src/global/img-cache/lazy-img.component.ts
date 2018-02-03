import { Component, Input } from '@angular/core';

/**
 * Component in charge of lazy load images and cache them
 */
@Component({
  selector: 'op-lazy-img',
  template: `
  <div text-center [ngClass]="{ 'placeholder': placeholderActive }">
    <img op-lazy-img [source]="source" (loaded)="placeholderActive = false"/>
  </div>
  `
})
export class LazyImgComponent {

  @Input()
  public source: string;

  public placeholderActive: boolean = true;

}
