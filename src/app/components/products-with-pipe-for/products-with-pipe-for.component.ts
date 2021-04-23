import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-with-pipe-for',
  templateUrl: './products-with-pipe-for.component.html'
})
export class ProductsWithPipeForComponent {
  products$ = this.productsService.getProductsList();

  constructor(private productsService: ProductsService) {}
}
