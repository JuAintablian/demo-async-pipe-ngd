import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "../../services/products.service";

interface Product {
  name: string;
  category: string;
}

@Component({
  selector: "app-products-without-pipe",
  templateUrl: "./products-without-pipe.component.html"
})
export class ProductsWithoutPipeComponent implements OnInit, OnDestroy {
  products: Product[];
  private subscription = new Subscription();

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.subscription.add(
      this.productsService.getProductsList().subscribe(products => {
        this.products = products;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
