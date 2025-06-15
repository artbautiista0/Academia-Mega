import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { StockPipe } from '../../pipes/stock.pipe';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FilterPipe, StockPipe, ProductDetailComponent, FormsModule],
  template: `
    <h2>🛒 Catálogo de Productos</h2>
    <input [(ngModel)]="searchText" placeholder="🔍 Buscar..." />

<ul>
  <li *ngFor="let product of products | filter:searchText">
    <strong>{{ product.title | uppercase }}</strong><br />
    💵 {{ product.price | currency:'USD' }}<br />
    🟢 {{ product.stock | stock }}<br />
    <button (click)="selectProduct(product)">Ver detalle</button>
    <hr />
  </li>
</ul>

<app-product-detail [product]="selectedProduct" *ngIf="selectedProduct" />

  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchText = '';

  constructor(private productService: ProductService) {}

  selectedProduct: Product | null = null;

selectProduct(product: Product) {
  this.selectedProduct = product;
}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(p => this.products = p);
  }
}