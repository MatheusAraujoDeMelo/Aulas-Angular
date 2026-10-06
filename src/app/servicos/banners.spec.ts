import { TestBed } from '@angular/core/testing';
import { Banners } from './banners';

describe('Banners', () => {
  let service: Banners;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Banners);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
