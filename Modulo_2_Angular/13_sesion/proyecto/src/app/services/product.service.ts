import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  description: string;
  brand: string;
  category: string;
  thumbnail: string;
  createdAt?: string; // simulada
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.url).pipe(
      map(res =>
        res.products.map(p => ({
          ...p,
          createdAt: this.generateRandomDate()
        }))
      )
    );
  }

  private generateRandomDate(): string {
    const start = new Date(2023, 0, 1).getTime();
    const end = new Date().getTime();
    const random = new Date(start + Math.random() * (end - start));
    return random.toISOString();
  }
}
