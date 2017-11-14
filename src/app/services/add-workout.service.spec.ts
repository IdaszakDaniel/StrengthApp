import { TestBed, inject } from '@angular/core/testing';

import { AddWorkoutService } from './add-workout.service';

describe('AddWorkoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddWorkoutService]
    });
  });

  it('should be created', inject([AddWorkoutService], (service: AddWorkoutService) => {
    expect(service).toBeTruthy();
  }));
});
