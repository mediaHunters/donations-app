import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListNoSubscriptionComponent } from './product-list-no-subscription.component';

describe('ProductListNoSubscriptionComponent', () => {
  let component: ProductListNoSubscriptionComponent;
  let fixture: ComponentFixture<ProductListNoSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListNoSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListNoSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
