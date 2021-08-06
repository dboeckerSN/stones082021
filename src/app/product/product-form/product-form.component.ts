import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validator';
import { Product } from '../product';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productSaved = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl('', [CustomValidators.positiv]),
    weight: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if(this.productForm.valid){
      this.productSaved.emit({id: 1 , ...this.productForm.value});
    }
  }

}
