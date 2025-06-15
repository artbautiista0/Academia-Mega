import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
  standalone: true
})
export class StockPipe implements PipeTransform {
  transform(stock: number): string {
    return stock > 0 ? 'Disponible' : 'Agotado';
  }
}