import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentProduct = new Product(12, 'Granitstein Gravo', 134.56, 12);
  products: Array<Product> = [
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

  onPriceChanged(price: number) {
    alert('Aktueller Preis: ' + price);
  }

  public changePrice(price: string) {
    this.parentProduct.price = Number(price);
    alert('Aktueller Preis: ' + this.parentProduct.price)
  }
}
