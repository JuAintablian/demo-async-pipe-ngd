import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-with-pipe-template',
  templateUrl: './products-with-pipe-template.component.html'
})
export class ProductsWithPipeTemplateComponent {
	products$ = this.productsService.getProductsList();

	constructor(private productsService: ProductsService) {}
}
