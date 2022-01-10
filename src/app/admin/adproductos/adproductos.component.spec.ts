import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdproductosComponent } from './adproductos.component';

describe('AdproductosComponent', () => {
  let component: AdproductosComponent;
  let fixture: ComponentFixture<AdproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
