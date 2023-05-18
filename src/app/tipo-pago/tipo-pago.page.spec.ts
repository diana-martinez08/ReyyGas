import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoPagoPage } from './tipo-pago.page';

describe('TipoPagoPage', () => {
  let component: TipoPagoPage;
  let fixture: ComponentFixture<TipoPagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipoPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
