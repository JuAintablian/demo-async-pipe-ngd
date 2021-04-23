import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsWithPipeIfComponent } from "./components/products-with-pipe-if/products-with-pipe-if.component";
import { ProductsWithPipeTemplateComponent } from "./components/products-with-pipe-template/products-with-pipe-template.component";
import { ProductsWithPipeForComponent } from "./components/products-with-pipe-for/products-with-pipe-for.component";
import { ProductsWithoutPipeComponent } from "./components/products-without-pipe/products-without-pipe.component";
import { ProductsButtonComponent } from "./components/products-button/products-button.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsWithoutPipeComponent,
    ProductsWithPipeIfComponent,
    ProductsWithPipeTemplateComponent,
    ProductsWithPipeForComponent,
    ProductsButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
