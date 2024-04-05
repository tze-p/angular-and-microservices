import { TestBed } from '@angular/core/testing';

import { AttachedDocumentTypeDataService } from './attached-document-type-data.service';

describe('AttachedDocumentTypeDataService', () => {
  let service: AttachedDocumentTypeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttachedDocumentTypeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
