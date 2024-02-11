import { TestBed } from '@angular/core/testing';

import { NumbersListService } from './numbers-list.service';

describe('NumbersListService', () => {
  let service: NumbersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
