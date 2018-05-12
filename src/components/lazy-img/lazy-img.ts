import {Component, Input} from '@angular/core';

/**
 * Generated class for the LazyImgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'op-lazy-img',
  templateUrl: 'lazy-img.html'
})
export class LazyImgComponent {

  @Input()
  public source: string;

  public placeholderActive: boolean = true;

}
