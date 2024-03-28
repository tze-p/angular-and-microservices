import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTailoringComponent } from './system-tailoring.component';

describe('SystemTailoringComponent', () => {
  let component: SystemTailoringComponent;
  let fixture: ComponentFixture<SystemTailoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemTailoringComponent]
    });
    fixture = TestBed.createComponent(SystemTailoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
