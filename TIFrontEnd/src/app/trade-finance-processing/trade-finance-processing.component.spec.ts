import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeFinanceProcessingComponent } from './trade-finance-processing.component';

describe('TradeFinanceProcessingComponent', () => {
  let component: TradeFinanceProcessingComponent;
  let fixture: ComponentFixture<TradeFinanceProcessingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeFinanceProcessingComponent]
    });
    fixture = TestBed.createComponent(TradeFinanceProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
