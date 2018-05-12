import { NgModule } from '@angular/core';
import { LazyLoadDirective } from './lazy-load/lazy-load';
@NgModule({
	declarations: [LazyLoadDirective],
	imports: [],
	exports: [LazyLoadDirective]
})
export class DirectivesModule {}
