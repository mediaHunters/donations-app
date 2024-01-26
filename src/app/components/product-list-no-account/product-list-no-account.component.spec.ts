import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListNoAccountComponent } from './product-list-no-account.component';

describe('ProductListNoAccountComponent', () => {
  let component: ProductListNoAccountComponent;
  let fixture: ComponentFixture<ProductListNoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListNoAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListNoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
