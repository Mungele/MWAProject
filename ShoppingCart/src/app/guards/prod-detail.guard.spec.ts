import { TestBed, async, inject } from '@angular/core/testing';

import { ProdDetailGuard } from './prod-detail.guard';

describe('ProdDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdDetailGuard]
    });
  });

  it('should ...', inject([ProdDetailGuard], (guard: ProdDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
