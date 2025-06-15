import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product.service';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if (!search) return products;
    return products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}