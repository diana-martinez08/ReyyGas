import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagoTransferenciaPage } from './pago-transferencia.page';

describe('PagoTransferenciaPage', () => {
  let component: PagoTransferenciaPage;
  let fixture: ComponentFixture<PagoTransferenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagoTransferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
