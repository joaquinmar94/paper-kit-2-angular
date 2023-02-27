import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCarComponent } from './seller-car.component';

describe('SellerCarComponent', () => {
  let component: SellerCarComponent;
  let fixture: ComponentFixture<SellerCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
