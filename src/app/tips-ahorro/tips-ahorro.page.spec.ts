import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipsAhorroPage } from './tips-ahorro.page';

describe('TipsAhorroPage', () => {
  let component: TipsAhorroPage;
  let fixture: ComponentFixture<TipsAhorroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipsAhorroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
