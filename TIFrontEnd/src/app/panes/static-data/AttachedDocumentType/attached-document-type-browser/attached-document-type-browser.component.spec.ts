import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachedDocumentTypeBrowserComponent } from './attached-document-type-browser.component';

describe('AttachedDocumentTypeBrowserComponent', () => {
  let component: AttachedDocumentTypeBrowserComponent;
  let fixture: ComponentFixture<AttachedDocumentTypeBrowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttachedDocumentTypeBrowserComponent]
    });
    fixture = TestBed.createComponent(AttachedDocumentTypeBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
