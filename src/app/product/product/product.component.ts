import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  })
export class ProductComponent implements OnInit {
  @Input() public product!: Product;
  @Output() priceChange = new EventEmitter<number>();
  showWeight = true;

  public styleConfig = {
    'border-style' : 'dashed',
  }

  constructor() {
   }

  ngOnInit(): void {
  }

  public raisePrice(): void {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
    console.log('Neuer Preis gesetzt' + this.product.price)
  }

  toggleWeight() {
    this.showWeight = !this.showWeight;
  }
}
