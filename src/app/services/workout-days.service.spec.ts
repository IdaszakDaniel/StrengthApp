import { TestBed, inject } from '@angular/core/testing';

import { WorkoutDaysService } from './workout-days.service';

describe('WorkoutDaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutDaysService]
    });
  });

  // it('should be created', inject([WorkoutDaysService], (service: WorkoutDaysService) => {
  //   expect(service).toBeTruthy();
  // }));
});
