import { TestBed, inject } from '@angular/core/testing';

import { WorkoutsListService } from './workouts-list.service';

describe('WorkoutsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutsListService]
    });
  });

  it('should be created', inject([WorkoutsListService], (service: WorkoutsListService) => {
    expect(service).toBeTruthy();
  }));
});
