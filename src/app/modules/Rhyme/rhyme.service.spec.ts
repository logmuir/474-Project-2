import { TestBed, inject } from '@angular/core/testing';

import { RhymeService } from './rhyme.service';

describe('RhymeService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [RhymeService]
    }));

  it('should be created', inject([RhymeService], (service: RhymeService) => {
    expect(service).toBeTruthy();
  }));
});
