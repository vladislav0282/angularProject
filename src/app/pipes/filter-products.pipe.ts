import { IProduct } from '../models/product';
import { products } from './../data/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(p=>p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
