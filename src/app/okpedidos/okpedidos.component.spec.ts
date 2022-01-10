import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkpedidosComponent } from './okpedidos.component';

describe('OkpedidosComponent', () => {
  let component: OkpedidosComponent;
  let fixture: ComponentFixture<OkpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkpedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
