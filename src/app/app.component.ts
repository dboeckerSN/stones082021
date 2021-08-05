import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentProduct = new Product(12, 'Granitstein Gravo', 134.56, 12);

  onPriceChanged(price: number) {
    alert('Aktueller Preis: ' + price);
  }
}
