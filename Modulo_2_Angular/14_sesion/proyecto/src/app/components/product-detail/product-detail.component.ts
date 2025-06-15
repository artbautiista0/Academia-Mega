import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { StockPipe } from '../../pipes/stock.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe, StockPipe],
  template: `
    <div *ngIf="product" class="detail">
      <h3>📝 Detalle del Producto</h3>
      <p><strong>{{ product.title }}</strong></p>
      <p>{{ product.description }}</p>
      <p>💵 {{ product.price | currency:'USD' }}</p>
      <p>🟢 {{ product.stock | stock }}</p>
      <p>🏷️ Marca: {{ product.brand }}</p>
      <p>📂 Categoría: {{ product.category }}</p>
      <p>🕒 Fecha de alta: {{ product.createdAt | date:'fullDate' }}</p>
      <img [src]="product.thumbnail" width="200" />
    </div>
  `,
  styles: [`
    .detail {
      border: 1px solid #ccc;
      padding: 1rem;
      margin-top: 1rem;
      border-radius: 0.5rem;
      background: #fafafa;
    }
  `]
})
export class ProductDetailComponent {
  @Input() product!: Product;
}