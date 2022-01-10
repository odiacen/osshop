import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdpedidosComponent } from './adpedidos.component';

describe('AdpedidosComponent', () => {
  let component: AdpedidosComponent;
  let fixture: ComponentFixture<AdpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdpedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
