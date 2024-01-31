import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsNoComponent } from './subscriptions-no.component';

describe('SubscriptionsNoComponent', () => {
  let component: SubscriptionsNoComponent;
  let fixture: ComponentFixture<SubscriptionsNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionsNoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionsNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
