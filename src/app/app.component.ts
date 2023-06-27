import { Observable, tap } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { products as data, products} from './data/products';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// export class AppComponent implements OnInit {
//   title = 'angular app';
//   products: IProduct[] = []
//   loading = false

//   constructor(private productsService: ProductsService){
//   }

//   ngOnInit(): void {
//     this.loading = true
//     this.productsService.getAll().subscribe(products=>{
//       this.products = products
//       this.loading = false
// })   
// }
// }

// С использованием "Стримов"
export class AppComponent {
  
}