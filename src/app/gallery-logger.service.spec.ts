import { TestBed } from '@angular/core/testing';

import { GalleryLoggerService } from './gallery-logger.service';

describe('GalleryLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryLoggerService = TestBed.get(GalleryLoggerService);
    expect(service).toBeTruthy();
  });
});
