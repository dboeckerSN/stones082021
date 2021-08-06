import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productSaved = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    weight: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.productForm.value);
    this.productSaved.emit({id: 1 , ...this.productForm.value});
  }

}
