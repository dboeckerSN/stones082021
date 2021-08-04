import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product = new Product(12, 'Granitstein Gravo', 134.56, 12);

  constructor() {
    const test: Product = {
      id: 12,
      name: "test",
      price: 123,
      weight: 12,
    };
   }

  ngOnInit(): void {
  }

  public raisePrice(): void {
    this.product.price += 5;
    alert('Aktueller preis: ' + this.product.price);
  }
}
