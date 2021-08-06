import { TestBed } from '@angular/core/testing';
import { Product } from './product';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addProduct should add Product', () => {
    const newProd = new Product('name', 30,40,0);
    service.addProduct(newProd);
    expect(service.getProductList()[0]).toEqual(newProd);
  });
});
