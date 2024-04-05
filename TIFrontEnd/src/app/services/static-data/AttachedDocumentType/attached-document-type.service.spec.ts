import { TestBed } from '@angular/core/testing';

import { AttachedDocumentTypeService } from './attached-document-type.service';

describe('AttachedDocumentTypeService', () => {
  let service: AttachedDocumentTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttachedDocumentTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
