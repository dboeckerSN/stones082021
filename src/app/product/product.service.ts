import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Array<Product> = [
    {
      id: 0,
      name: 'nisi elit',
      price: 85.59,
      weight: 22
    },
    {
      id: 1,
      name: 'pariatur aliquip',
      price: 122.39,
      weight: 21
    },
    {
      id: 2,
      name: 'nulla cillum',
      price: 151.49,
      weight: 20
    },
    {
      id: 3,
      name: 'id exercitation',
      price: 128.45,
      weight: 23
    },
    {
      id: 4,
      name: 'commodo minim',
      price: 111.34,
      weight: 21
    },
    {
      id: 5,
      name: 'duis tempor',
      price: 164.61,
      weight: 24
    },
    {
      id: 6,
      name: 'excepteur nostrud',
      price: 71.62,
      weight: 38
    }
  ];
  constructor() { }

  getProductList(): Product[] {
    return this.products;
  }

  addProduct(newProd: Product) {
    this.products.unshift(newProd);
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
