import { Component } from "@angular/core";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-button",
  templateUrl: "./products-button.component.html"
})
export class ProductsButtonComponent {
  products$ = this.productsService.getProductsList();

  constructor(private productsService: ProductsService) {}
}
