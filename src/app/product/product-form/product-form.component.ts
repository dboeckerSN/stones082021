import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validator';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productSaved = new EventEmitter<Product>();
  nameLength = 0;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl('', [CustomValidators.positiv]),
    weight: new FormControl(),
  });

  constructor(private pService: ProductService) {
    this.productForm.get('name')?.valueChanges.subscribe(
      (value: string) => {
        this.nameLength = value.length;
      }
    )
   }

  ngOnInit(): void {
  }

  save() {
    if(this.productForm.valid){
      this.pService.addProduct(this.productForm.value).subscribe();
    }
  }

}
