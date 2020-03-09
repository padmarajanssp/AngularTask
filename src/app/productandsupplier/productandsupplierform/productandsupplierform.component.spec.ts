import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductandsupplierformComponent } from './productandsupplierform.component';

describe('ProductandsupplierformComponent', () => {
  let component: ProductandsupplierformComponent;
  let fixture: ComponentFixture<ProductandsupplierformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductandsupplierformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductandsupplierformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
