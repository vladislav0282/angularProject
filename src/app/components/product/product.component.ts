import { IProduct } from './../../models/product';
import { Component } from "@angular/core"
import { Input } from "@angular/core"

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product: IProduct
    deteils:boolean = false
}