import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'http://10.10.2.41:3000'
  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + '/products')
  }

  addProduct(newProd: Product) {
    return this.http.post<Product>(this.api + '/products', newProd);
  }
}

class mockProductService {
  getProductList(): Product[] {
    return [{
      id: 6,
      name: 'excepteur nostrud',
      price: 71.62,
      weight: 38
    }];
  }

  addProduct(newProd: Product) {

  }
}
