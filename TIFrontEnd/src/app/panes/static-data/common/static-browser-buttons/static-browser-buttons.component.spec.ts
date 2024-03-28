import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBrowserButtonsComponent } from './static-browser-buttons.component';

describe('StaticBrowserButtonsComponent', () => {
  let component: StaticBrowserButtonsComponent;
  let fixture: ComponentFixture<StaticBrowserButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticBrowserButtonsComponent]
    });
    fixture = TestBed.createComponent(StaticBrowserButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
