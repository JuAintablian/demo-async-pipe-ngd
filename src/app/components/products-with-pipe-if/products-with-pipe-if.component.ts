import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-with-pipe-if',
  templateUrl: './products-with-pipe-if.component.html'
})
export class ProductsWithPipeIfComponent {
  products$ = this.productsService.getProductsList();

  constructor(private productsService: ProductsService) {}
}
