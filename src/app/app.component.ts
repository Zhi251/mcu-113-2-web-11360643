import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent],
  template: `<app-product-card></app-product-card>`, // 直接嵌入 component
})
export class AppComponent {
  title = 'shopping-cart';
}
